<!-- <script>
  import { onDestroy } from "svelte";

  let scrollSpeed = 0.5; // Adjust the scrolling speed as needed
  let containerWidth = 130; // Adjust the container width as needed
  let visibleItems = 4; // Adjust the number of visible items

  // Array of items to scroll
  let items = [
    {
      id: 1,
      text: "Item 1",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/globallogic_c30eb641f7.svg",
    },
    {
      id: 2,
      text: "Item 2",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg",
    },
    {
      id: 3,
      text: "Item 2",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg",
    },
    {
      id: 4,
      text: "Item 2",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg",
    },
    {
      id: 5,
      text: "Item 2",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg",
    },
    {
      id: 6,
      text: "Item 1",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/globallogic_c30eb641f7.svg",
    },
    // Add more items as needed
  ];

  // Circular buffer variables
  let buffer = [...items, ...items, ...items]; // Create a circular buffer

  let scrollX = 0;
  let currentIndex = 0;

  $: contentWidth = buffer.length * containerWidth;

  function updateScroll() {
    scrollX -= scrollSpeed;
    if (scrollX <= -containerWidth) {
      scrollX = 0;
      currentIndex = (currentIndex + 1) % items.length;
      items = buffer.slice(currentIndex, currentIndex + visibleItems);
    }
  }

  const interval = setInterval(updateScroll, 10);
  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="scroll-container">
  {#each items as item, i (item.id)}
    <div
      class="item"
      style="width: {containerWidth}px; transform: translateX({scrollX}px);"
    >
      <img src={item.image} alt={item.text} />
    </div>
  {/each}
</div>

<style>
  .scroll-container {
    width: 130px * 4px;
    display: flex;
    overflow: hidden;
    gap: 20px;
  }

  .item {
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: rgba(8, 207, 140, 0.3) 0px 19px 38px,
      rgba(8, 212, 69, 0.22) 0px 15px 12px;
  }
  .item > img {
    width: 100%;
    border-radius: 15px;
  }
</style> -->
<!-- 
<script>
  
  let data = [
    {
      id: 1,
      text: "Item 1",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/globallogic_c30eb641f7.svg",
    },
    {
      id: 2,
      text: "Item 2",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg",
    },
    {
      id: 3,
      text: "Item 3",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg",
    },
    {
      id: 4,
      text: "Item 4",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg",
    },
    {
      id: 5,
      text: "Item 5",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/airmeet_93e45faced.svg",
    },
    {
      id: 6,
      text: "Item 6",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 7,
      text: "Item 7",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 8,
      text: "Item 8",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 9,
      text: "Item 9",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 10,
      text: "Item 10",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 11,
      text: "Item 11",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 12,
      text: "Item 12",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 13,
      text: "Item 13",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
  ];
</script>

<div class="scroll-container">
  {#each data as item, i (item.id)}
    <div class="item" style="width: 130px; margin-right: 10px;">
      <img src={item.image} alt={item.text} />
    </div>
  {/each}
</div>

<style>
  .scroll-container {
    display: flex;
    animation: scrollAnimation 15s linear infinite;
    gap: 10px;
    overflow: hidden;
  }

  .scroll-container:hover {
    animation-play-state: paused; /* Pause animation on hover */
  }

  @keyframes scrollAnimation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-140px * 13)); /* 130px (item width + 10px gap) times the number of items */
    }
  }

  .item {
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: rgba(8, 207, 140, 0.3) 0px 19px 38px, rgba(8, 212, 69, 0.22) 0px 15px 12px;
  }

  .item > img {
    width: 100%;
    border-radius: 15px;
  }
</style> -->

<script>
  let data = [
    {
      id: 1,
      text: "Item 1",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/globallogic_c30eb641f7.svg",
    },
    {
      id: 2,
      text: "Item 2",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg",
    },
    {
      id: 3,
      text: "Item 3",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg",
    },
    {
      id: 4,
      text: "Item 4",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg",
    },
    {
      id: 5,
      text: "Item 5",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/airmeet_93e45faced.svg",
    },
    {
      id: 6,
      text: "Item 6",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 7,
      text: "Item 7",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 8,
      text: "Item 8",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 9,
      text: "Item 9",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 10,
      text: "Item 10",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 11,
      text: "Item 11",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 12,
      text: "Item 12",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 13,
      text: "Item 13",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
  ];
  let loopedData = data.map(item => ({
    ...item,
    id: `looped-${item.id}` // Adding a prefix to create unique keys
  }));
</script>

<div class="scroll-container">
  {#each loopedData as item, i (item.id)}
    <div class="item" style="">
      <img src={item.image} alt={item.text} />
    </div>
  {/each}
</div>

<style>
.scroll-container {
    display: flex;
    animation: scrollAnimation 20s linear infinite;
    gap: 10px;
    overflow: hidden;
    width: 100%;
  }

  @keyframes scrollAnimation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        -100%
      ); /* Scrolls the entire width of the container */
    }
  }

  .item {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: rgba(8, 207, 140, 0.3) 0px 19px 38px,
      rgba(8, 212, 69, 0.22) 0px 15px 12px;
  }

  .item > img {
    width: 100%;
    border-radius: 15px;
  }
</style>
