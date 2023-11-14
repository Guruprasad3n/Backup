<!-- <script>
  let masaiNews = [
    {
      id: 1,
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Article_Prateek_Shukla_Gen_AI_92324e2d6b.jpeg",
      text: "Empowering Education Through GenAI",
    },
    {
      id: 2,
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thungy_1_420b226e5b.webp",
      text: "Masai School targets fivefold revenue growth in three years",
    },
    {
      id: 3,
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp",
      text: "Beyond Degrees: Embracing Alternative Credentialing and Micro-learning in Tech Recruitment",
    },
  ];
</script>

<div>
  <h1>Masai in News</h1>
  <div class="masai-news-main">
    {#each masaiNews as news (news.id)}
      <div class="masai-news">
        <img src={news.image} alt={news.text} />
        <p>{news.text}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .masai-news-main {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    margin: auto;
    gap: 0px 25px;
  }
  .masai-news > img {
    width: 100%;
  }
  .masai-news > p{
    font-size: 1.3rem;
    font-weight: 700;
  }
</style> -->

<!-- Swiper.svelte -->
<!-- <script>

let slides = [
    {
      id:1,
      src: "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Article_Prateek_Shukla_Gen_AI_92324e2d6b.jpeg",
      text: "Empowering Education Through GenAI",
    },
    {
      id:2,
      src: "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thungy_1_420b226e5b.webp",
      text: "Masai School targets fivefold revenue growth in three years",
    },
    {
      id:3,
      src: "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp",
      text: "Beyond Degrees: Embracing Alternative Credentialing and Micro-learning in Tech Recruitment",
    },
  ];




  // let isMobile = false;

  // if (window.innerWidth <= 768) {
  //   isMobile = true;
  // }

  // window.addEventListener("resize", () => {
  //   if (window.innerWidth >= 768) {
  //     isMobile = false;
  //   } else {
  //     isMobile = true;
  //   }
  // });

  // let isMobile = false;

  // const mediaQuery = window.matchMedia('(max-width: 768px)');

  // // Initialize the isMobile status based on the initial window width
  // isMobile = mediaQuery.matches;

  // // Update isMobile when the media query matches change
  // mediaQuery.addListener((event) => {
  //   isMobile = event.matches;
  // });
  let isMobile = false;

  function updateView() {
    isMobile = window.innerWidth <= 768;
  }

  window.addEventListener("resize", updateView);

  // Initial check on component load
  updateView();

  
  let currentIndex = 0;



  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  }
  let isLastSlide = currentIndex-1;
</script> -->

<!-- <div class="masai-heading-main">
  <h1 class="masai-heading-news">Masai in <span>News</span></h1>
  <img
    src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
    alt="Under Line"
  />
</div> -->

<!-- <div class="center-text">
  <h2>Masai in <span class="news">News</span>
  </h2>
    <img class="pen-image" src="https://masaischool.com/images/new-homepage/yellow-vector.svg" alt="Pen Icon" /> 
</div> -->
<!-- 
<div class="center-text">
  {#if isMobile}
    <h3>Masai in <span class="news">News</span> mob</h3>
  {:else}
    <h2>Masai in <span class="news">News</span> desk</h2>
  {/if}
</div>

{#if isMobile}
 
  <div class="mobile-swiper">
    <div class="swiper-slide">
      <img src={slides[currentIndex].src} alt={slides[currentIndex].text} />
      <p>{slides[currentIndex].text}</p>
    </div>
    <div class="masai-slider-buttons-next-prev">
      <button  on:click={prevSlide} class="prev"
        ><i class="bx bx-chevron-left" /></button
      >
      <button on:click={nextSlide} on:disabled={isLastSlide} class="next"
        ><i class="bx bx-chevron-right" />
      </button>
    </div>
   
  </div>
{:else}
 
  <div class="desktop-grid">
    {#each slides as slide (slide.id)}
      <div class="swiper-slide">
        <img src={slide.src} alt={slide.text} />
        <p>{slide.text}</p>
      </div>
    {/each}
  </div>
{/if} -->
<!-- 
<style>
  .center-text {
    text-align: center;
    margin: 0 auto;
    padding: 30px;
    font-size: 34px;
    font-weight: 700;
  }
  .news {
    color: red;
    position: relative; /* Make the "News" text a positioning context */
  }
  .pen-image {
    position: absolute;
    width: 125px;
    top: 32;
    left:53%;
  
  }
  /* .button{
    font-size: 2rem;
    color: white;
    border: 1px solid red;
    font: 600;
} */
  /* .masai-heading-main {
    padding: 40px;
    border: 1px solid red;
  }
  .masai-heading-news {
    text-align: center;
    
    position: relative;
  }
  .masai-heading-news > span {
    color: red;
  }
  .masai-heading-main > img {
    position: absolute;
    width: 7%;
    top: 100;
    left: 100;
   
  } */


  /* Customize your desktop grid styles here */
  .desktop-grid {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 25px;
  }

  .desktop-grid .swiper-slide {
    text-align: center;
  }

  /* Customize your mobile swiper styles here */
  .mobile-swiper {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
  }

  .swiper-slide img {
    width: 100%;
    height: 60%;
  }
  .swiper-slide > p {
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 2rem;
    text-align: left;
    color: rgb(45, 45, 45);
    width: 95%;
  }
  .mobile-swiper {
  }
  .masai-slider-buttons-next-prev {
    display: flex;
    align-items: flex-end;
    gap: 0px 10px;
  }

  .masai-slider-buttons-next-prev > button {
    padding: 7px;
    background-color: white;
    border: 1px solid red;
    border-radius: 10px;
    color: red;
  }
  .masai-slider-buttons-next-prev > button > i {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .masai-slider-buttons-next-prev > button:hover {
    color: white;
    background-color: red;
    transition: ease all 0.5s;
    cursor: pointer;
  }
</style> -->

<!-- YourSvelteComponent.svelte -->
<script>
  let slides = [
    {
      id: 1,
      src: "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Article_Prateek_Shukla_Gen_AI_92324e2d6b.jpeg",
      text: "Empowering Education Through GenAI",
    },
    {
      id: 2,
      src: "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thungy_1_420b226e5b.webp",
      text: "Masai School targets fivefold revenue growth in three years",
    },
    {
      id: 3,
      src: "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp",
      text: "Beyond Degrees: Embracing Alternative Credentialing and Micro-learning in Tech Recruitment",
    },
  ];

  let isMobile = false;
  let currentIndex = 0;

  function updateView() {
    isMobile = window.innerWidth <= 768;
  }

  window.addEventListener("resize", updateView);
  updateView();

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  }

  // Check if it's the last slide
  let isLastSlide = currentIndex === slides.length - 1;
</script>

<div class="center-text">
  {#if isMobile}
    <h3>Masai in <span class="news">News
      <img style="width: 100px;"
    src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
    alt="Under Line"
  />
    </span></h3>
  {:else}
    <h2>Masai in <span class="news">News
      <img style="width: 130px;"
      src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
      alt="Under Line"
    />
    </span></h2>
  {/if}
</div>

{#if isMobile}
  <!-- Mobile Swiper -->
  <div class="mobile-swiper">
    <div class="swiper-slide">
      <img src={slides[currentIndex].src} alt={slides[currentIndex].text} />
      <p>{slides[currentIndex].text}</p>
    </div>
    <div class="masai-slider-buttons-next-prev">
      <button on:click={prevSlide} class="prev" disabled={currentIndex === 0}>
        <i class="bx bx-chevron-left" />
      </button>
      <button on:click={nextSlide} disabled={isLastSlide} class="next">
        <i class="bx bx-chevron-right" />
      </button>
    </div>
  </div>
{:else}
  <!-- Desktop Image Grid -->
  <div class="desktop-grid">
    {#each slides as slide (slide.id)}
      <div class="swiper-slide">
        <img src={slide.src} alt={slide.text} />
        <p>{slide.text}</p>
      </div>
    {/each}
  </div>
{/if}

<style>
  .desktop-grid {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    width: 90%;
  }
  .center-text {
    text-align: center;
    margin: 0 auto;
    padding: 30px;
    font-size: 34px;
    font-weight: 700;
  }

  .news {
    color: red;
    position: relative;
  }
  .news>img{
    
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .mobile-swiper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .swiper-slide {
    width: 100%;
    /* border: 1px solid red; */
    /* margin: auto; */
  }
  .swiper-slide img {
    width: 100%;
    height: 55%;
  }

  .swiper-slide > p {
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 2rem;
    text-align: left;
    color: rgb(45, 45, 45);
  }

  .masai-slider-buttons-next-prev {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 10px;
    gap: 0px 10px;
    /* border: 1px solid red; */
    width: 100%;
  }

  .masai-slider-buttons-next-prev button {
    padding: 1px;
    background-color: white;
    border: 1px solid red;
    border-radius: 7px;
    color: red;
    font-size: 2rem;
  }

  .masai-slider-buttons-next-prev button:hover {
    color: white;
    background-color: red;
    cursor: pointer;
  }

</style>
