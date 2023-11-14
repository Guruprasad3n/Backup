<script>
  // import svelteLogo from "./assets/svelte.svg";
  // import viteLogo from "/vite.svg";
  // import Counter from "./lib/Counter.svelte";
  import TailwindCss from "./lib/TailwindCSS.svelte";

  // import { Carousel, initTE } from "tw-elements";

  // initTE({ Carousel });


  let currentVideoIndex = 0;

const videos = [
  'https://player.vimeo.com/video/411458540',
  'https://player.vimeo.com/video/411458541',
  'https://player.vimeo.com/video/411458542',
];

function nextVideo() {
  if (currentVideoIndex < videos.length - 1) {
    currentVideoIndex += 1;
  }
}

function prevVideo() {
  if (currentVideoIndex > 0) {
    currentVideoIndex -= 1;
  }
}

</script>

<TailwindCss />
<main>
  <div class="carousel">
    <video controls src={videos[currentVideoIndex]}></video>
    <button class="bg-blue-500 text-white p-2 rounded" on:click={prevVideo}>Previous</button>
    <button class="bg-blue-500 text-white p-2 rounded" on:click={nextVideo}>Next</button>
  </div>
  

</main>

<style>
  .carousel {
    text-align: center;
  }

  video {
    max-width: 100%;
  }
</style>
