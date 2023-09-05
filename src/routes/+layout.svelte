<script>
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import Header from './Header.svelte';
	import './styles.css';

  let innerWidth;

  // Function to update innerWidth value and log it
  function logInnerWidth() {
		if(browser){
			innerWidth = window.innerWidth;

		}
    console.log(innerWidth);
  }

  onMount(() => {
    if (browser) {
      // Add an event listener for the window resize event
      window.addEventListener("resize", logInnerWidth);
    }
  });

  onDestroy(() => {
    if (browser) {
      // Remove the event listener when the component is destroyed
      window.removeEventListener("resize", logInnerWidth);
    }
  });


</script>

<div class="app">
	<main>
		<slot />
	</main>
	<footer>
		<p>Drag and drop to reorder list</p>
	</footer>

</div>

<style>

main {
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer {
  text-align: center;
  /* padding: 10px;  */
	align-self: flex-end;
	height: 70vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	/* padding-bottom: 17px; */
	/* margin-bottom: 50rem; */
	background-color: var(--bg-color);
}


footer >p{
	margin-bottom: 2rem;
	color: var(--color);
}


/* if anyone ever sees this, I have no idea how this worked lol */
	@media (max-width: 1025px) {
		footer{
			margin-top: -20vh;
			height: 90vh;
		}
	}

</style>
