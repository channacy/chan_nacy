export default function About() {
    return (
        <div class="flex-1 grow w-2/3">
            <h1 class="max-4-xs text-4xl my-8 font-medium">🤓 About</h1>
            <p class="text-lg my-4">As you may find out, I am somewhat nerdy...</p>
            <div class="flex gap-2">
                <img class="max-w-180 max-h-60" src="assets/selfie.jpg"/>
                <img class="max-w-180 max-h-60" src="assets/photography.jpg"/>
            </div>
            <ul class="list-disc mx-5">
                <li class="text-lg my-4">
                    I am currently reading <em>The Power of Knowing When To Walk Away: Quit</em> by Annie Duke.
                    Some of my favorite books are <em>The Courage to Be Disliked</em> and <em>Brave New World</em>.
                </li>
                <li class="text-lg my-4">
                    Other interests: true crime and astronomy podcasts, playing chess, cooking, journaling, graphic design, and running
                </li>
                <li class="text-lg my-4">
                    At college, I am learning how to lead student organizations and building the confidence to effectively communicate my ideas.
                </li>
                <li class="text-lg my-4">
                    <em>"Even the scars formed from your mistakes mark your constellations."</em> - a song lyric
                </li>
            </ul>
      </div>
    )
}