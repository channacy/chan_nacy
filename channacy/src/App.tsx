import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import Navbar from "./components/Navbar";
import Home from "./routes";
export default function App() {
  return (
    <div class="container flex items-center p-20">
      <Router
      root={(props) => (
        <div class="flex">
        <Navbar />
        <div class="content flex-1">
          <Suspense>{props.children}</Suspense>
        </div>
      </div>
      )}
    >
      <FileRoutes />
    </Router>

    </div>
  );
}
