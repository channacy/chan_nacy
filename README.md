# imba-bun-template

First of all clone this project to your local machine. Make sure that [Bun](https://bun.sh) is installed and availble in the folder where you have cloned the project.

Install dependencies:

```bash
bun install
```

Run the project:

```bash
bun serve
```
**Known issues**: 
- L function does not work.

## How it works
I don't usually use `create` methods of different CLI tools to make bootstrap projects, bacause I like to know how things work under the hood. So let's dive into details...

Bun does everything that Imba used to do out of the box. The more such tools like Bun or Vite are established the more time Imba team will be able to spend on compiler or frontend framework. 

And the first thing we need to make Bun and Imba work togehter is to show Bun how to compile  *.imba files.

### Backend development
To develop backend with Imba using Bun the only thing that is needed is the plugin for Bun. The working code of such plugin is pretty small: 
```js
import * as compiler from 'imba/compiler'

export const imbaPlugin: BunPlugin = {
  name: "imba",
  async setup(build) {
    
    // when an .imba file is imported...
    build.onLoad({ filter: /\.imba$/ }, async ({ path }) => {
      let contents = '';

      // read and compile it with the imba compiler
      const file = await Bun.file(path).text();
      const out = compiler.compile(file, {
        sourcePath: path,
        platform: 'browser'
      })

      // the file has been successfully compiled
      if (!out.errors || !out.errors.length) {
        contents = out.js;
      }
      
      // and finally return the compiled source code as "js"
      return {
        contents,
        loader: "js",
      };
    });
  }
};

plugin(imbaPlugin);

```
This plugin lets Bun deal with .imba files (compile them to JavaScript). But it will not show errors produced by the Imba compiler. 

That is why the plugin in the `plugin.ts` file has much more code - more than a half of it is needed to print pretty error messages generated by the Imba compiler.

After the plugin is ready it should be preloaded before everything else via the settings in the `bunfig.toml`:
```bash
preload = ["./plugin.ts"]
```
Well, this is enough to develop and host backend projects. Just run the command with the correct entrypoint file from CLI (same as node or imba):
```bash
bun run "./index.imba" ✔️
```
You can delete everything except `plugin.ts`, `bunfig.toml`, `tsconfig.json`, and of course `package.json` if you are working on server-side application. All other files are needed only for developing a frontend project.

### Frontend development

#### Bundling the code
First of all Frontend development needs files bundling for serving them to the clients. But there is a problem - the current version of Bun (1.0.25) does not support plugins when the build function is called from CLI:
```bash
bun build "./src/index.imba" --outdir './public' ❌
```
So we will need to call the `Bun.build` function from the code. And since we already could run Imba code it is not a problem - we will not get our hands dirty again with JavaScript 🤣. Here is the bare minimum code that is needed to bundle Imba files:
```imba
import {imbaPlugin} from './plugin.ts'

export def bundle options
	await Bun.build
		plugins: [imbaPlugin] # <== THIS CAN'T BE MADE VIA CLI
		entrypoints: options.entrypoints || ['./src/index.imba']
		outdir: options.outdir || './public'
		target: options.target || 'node'
		sourcemap: options.sourcemap || 'none'
		minify: options.minify || true
```
This code is already written in the `server.imba` file. It also includes logging messages to the terminal. So when you need to bundle you can just write:
```imba
import {bundle} from './server.imba'

bundle 
	entrypoints: [import.meta.dir + '/src/index.imba']
	outdir: import.meta.dir + '/public'
	minify: true
```
More on the parameters of Bun build function you can find here: https://bun.sh/docs/bundler

#### HTTP server
After the project is bundled it is a good idea to test how it works before deploying it to the hosting. And for that Bun has a fast built-in HTTP server. Here is the bare working minimum: 
```imba
Bun.serve
	port: '8080'
	fetch: do(req)
		const path = './public' + new URL(req.url).pathname
		const file = await Bun.file(path)
		return new Response(file)
	error: do(err) return new Response(null, { status: 404 })
```
The second function in the `/server.imba` file called `serve` implements HTTP server, watches source directory for changes and informs browser on the changes. It can be called pretty easily:
```imba
import {serve} from './server.imba'

serve 
	source: import.meta.dir + '/src' # full path to source folder
	public: import.meta.dir + '/public' # full path to destination folder
	entry: '/index.imba' # the file path inside the source folder
	port: 8080 # the port at which http server serves compiled files
	chokidar: true # monitor file changes with chokidar (great for WSL on Windows)
```
Though Bun has a built-in function to monitor changes in directory it is based on Linux `inotify` which is not supported by WSL2 on Windows. In this case you can use chokidar watcher instead.

#### Hot reload
To make frontend development a pleasure the project should be rebundled on every code change, and the browser should be informed about that to reload the updated version.

To be able to send message to connected browsers (even if you are developing on localhost the project could be opened in several tabs) the fronend code should keep connection with the server. To achive that the http server in the `imba/server.imba` file injects the `hmr.html` in the `index.html`.

The code in the `hmr.html` tries to download `favicon.png` to know if the server is alive. This is needed to get rid of `ERR_CONNECTION_REFUSED` errors in the browser console, which bothers developers with any other approach. And that is why `favicon.png` is needed for hot reload to properly work.

Moreover to show the status of hot reload the actual favicon is swapped for green circle when hot reload is working, and red circle - otherwise. So you don't need to open console to see the status of hot reload.