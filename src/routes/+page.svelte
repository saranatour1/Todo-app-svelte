<script>
	import lightBgDesktop from "$lib/images/bg-desktop-light.jpg";
	import lightBgMobile from "$lib/images/bg-mobile-light.jpg";

	import darkBgDesktop from "$lib/images/bg-desktop-dark.jpg";
	import darkBgMobile from "$lib/images/bg-mobile-dark.jpg";
	import ThemeBtn from "$lib/components/ThemeBtn.svelte";
	import TextForm from "$lib/components/TextForm.svelte";
	import ToDo from "$lib/components/ToDo.svelte";
	import Navigation from "$lib/components/Navigation.svelte";

	let isDarkMode = false;

	const toggleTheme =(/** @type {{ detail: { isDarkMode: boolean; }; }} */ event) => {
		// isDarkMode =! isDarkMode;

		isDarkMode = event.detail.isDarkMode;

	}



</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="To-do App with front-End Mentor Challneges " />
</svelte:head>

<section>
	<picture>
		<source srcset={isDarkMode ? lightBgMobile :darkBgMobile} media="(max-width: 600px)" />
		<img src={ isDarkMode ? lightBgDesktop:darkBgDesktop} alt="Background imagge in light mode" />
	</picture>
	
	<ThemeBtn  on:message={toggleTheme} />
	<TextForm textVal="" checked={false} idCounter={-1}/>
	<ToDo />
	<Navigation />


</section>

<style>
	section{
		/* margin: 1rem auto; */
		height: 30vh;
	}
img{
	/* position: relative;
	top: 0;
	left: 0; */
		width: 100vw;
		max-height: 40dvh;
		/* z-index: -9999; */
		background-size: cover;
		aspect-ratio: 1 / 1;
	}




</style>
