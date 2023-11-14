<script>
  import Abc from "./ScrollAv.svelte";
  import CareerPossibilities from "./CareerPossibilities/CareerPossibilities.svelte";
  import CertificateNsdc from "./CertificateByNSDC/CertificateNSDC.svelte";
  import MasaiNews from "./Components/MasaiNews.svelte";
  import Footer from "./Footer.svelte";
  import Infinitescroll from "./Infinitescroll.svelte";
  import ScrollAv from "./ScrollAv.svelte";

  // import MuComponent from "./MuComponent.svelte";
  // import NewCarousel from "./NewCarousel.svelte";
  // import NewScroll from "./StudentImpact/NewScroll.svelte";
  // import StudentImpactRight from "./StudentImpact/StudentImpactRight.svelte";
  // import RightSideSlider from "./RightSideSlider.svelte";
  // import StudentImpact from "./StudentImpact/StudentImpact.svelte";
  // import LoginForm from "./LoginForm.svelte";
  // import Model from "./Model.svelte";
  // let showModal = false

  // const handleModel =()=>{
  // 	showModal = !showModal
  // }
  // -------------------------------------------------------------------------------
  // 	export let name;
  // let myName = 'Guru'
  // let firstName = 'Srinu'
  // let lastName = 'Behera'
  // const handleClick = ()=>{
  // 	myName = 'Guru Prasad'
  // }
  // const handleInout = (e)=>{
  // 	myName = e.target.value
  // }

  // $: fullname = `${firstName} ${lastName}`
  // $:{
  // 	console.log(myName)
  // 	console.log(fullname)
  // }
  // ---------------------------------------------------------------------------------

  // let people = [
  //   { name: "Guru", age: "23", gender: "Male", id: 1 },
  //   { name: "Guru", age: "24", gender: "Male", id: 2 },
  //   { name: "Guru", age: "25", gender: "Male", id: 3 },
  // ];

  // const handleDelete = (id) => {
  //   console.log(id);
  // people = people.filter((e)=>e.id != id);
  // };
</script>

<main>
  <!-- <Model message="Hey! This is Prop Value" isPromo={true} showModal={showModal} on:click={handleModel}/> -->

  <!-- <LoginForm/> -->

  <!-- {#each people as person (person.id)}
    <div>
		<button on:click={handleModel}>Show Model</button>
      <h2>{person.name}</h2>
	  {#if person.age <=23}
	  <strong>The age is less than 23</strong>
	  {/if}
      <p> Age:{person.age}, Gender:{person.gender}</p>
      <button on:click={() => handleDelete(person.id)}>Delete</button>
    </div>
  {:else}
    <p>There is No data</p>
  {/each} -->

  <!-- --------------------------------------------------------------------------------- -->
  <!-- <h1>Hello  {name}!</h1>
	<p >Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	
	<p style="color:{myName}"> {fullname} My Name is {myName}</p>
	<button on:click={handleClick} >Change Name</button> -->
  <!-- <input type="text" on:input={handleInout} name="" id="" value={myName}> -->
  <!-- <input type="text" bind:value={myName}>
		
		<input type="text" bind:value={firstName} >
		<input type="text" bind:value={lastName} > -->
  <!-- --------------------------------------------------------------------------------- -->

  <!-- <MuComponent/> -->
  <!-- <NewCarousel /> -->
  <!-- <StudentImpact /> -->
  <!-- <RightSideSlider/> -->
  <!-- <StudentImpactRight/> -->
  <Infinitescroll/>
  <ScrollAv/>
  <!-- <NewScroll/>
  <CareerPossibilities />
  <CertificateNsdc />
  <MasaiNews /> -->
  <footer>
    <Footer />
  </footer>
</main>

<style>
  * {
    font-family: Open Sans, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol,
      "Noto Color Emoji";
  }
  @import "tailwindcss/base.css";
  @import "tailwindcss/components.css";
  @import "tailwindcss/utilities.css";
  /* main {
    text-align: center;
    padding: 0;
    max-width: 240px;
    margin: auto;
  } */

  /* h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  } */

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
