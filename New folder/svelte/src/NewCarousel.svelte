<script>
  import { onDestroy } from "svelte";

  let scrollSpeed = .5; // Adjust the scrolling speed as needed
  let containerWidth = 130; // Adjust the container width as needed

  // Array of items to scroll (you can replace this with your content)
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
      text: "Item 5",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 7,
      text: "Item 5",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 8,
      text: "Item 5",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 9,
      text: "Item 5",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 10,
      text: "Item 5",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 11,
      text: "Item 5",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 12,
      text: "Item 5",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    {
      id: 13,
      text: "Item 5",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    },
    // Add more items as needed
  ];

  // Circular buffer variables
  let buffer = [...items, ...items, ...items]; // Create a circular buffer

  let scrollX = 0;
  let currentIndex = 0;

  // Calculate the total width of the content
  $: contentWidth = buffer.length * containerWidth;

  // Function to update the scroll position
  function updateScroll() {
    scrollX -= scrollSpeed;
    if (scrollX <= -containerWidth) {
      scrollX = 0;
      currentIndex = (currentIndex + 1) % items.length;
      items = buffer.slice(currentIndex, currentIndex + items.length);
    }
  }

  // Automatically update the scroll position
  const interval = setInterval(updateScroll, 10); // Adjust the interval time as needed

  // Cleanup the interval when the component is destroyed
  onDestroy(() => {
    clearInterval(interval);
  });
</script>
<!-- {contentWidth} -->
<div class="scroll-container" style="width: 100%;">
  {#each items as item, i (item.id)}
    <div
      class="item"
      style="width: {containerWidth}px; transform: translateX({scrollX}px);"
      >
      <!-- {containerWidth} -->
      <img class="scroll-masai-msguru-image-brand" src={item.image} alt={item.text} />
      <!-- <p>{item.text}</p> -->
    </div>
  {/each}
</div>

<style>
  .scroll-container {
    width: 100%;
    display: flex;
    overflow: hidden;
    border: 1px solid red;
    gap: 20px;
    /* position: relative; */
  }
  
  .item {
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 150px; */
    height: 130px; /* Adjust the height as needed */
    border: 1px solid #ccc;
  }
  .item > img {
    width: 100%;
    border-radius: 30px;
  }
</style>
