<script>
	import lightBgDesktop from "$lib/images/bg-desktop-light.jpg";
	import lightBgMobile from "$lib/images/bg-mobile-light.jpg";

	import darkBgDesktop from "$lib/images/bg-desktop-dark.jpg";
	import darkBgMobile from "$lib/images/bg-mobile-dark.jpg";
	import ThemeBtn from "$lib/components/ThemeBtn.svelte";
	import TextForm from "$lib/components/TextForm.svelte";
	import ToDo from "$lib/components/ToDo.svelte";



</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="To-do App with front-End Mentor Challneges " />
</svelte:head>

<section>
	<picture>
		<source srcset={lightBgMobile} media="(max-width: 600px)" />
		<img src={lightBgDesktop} alt="Background imagge in light mode" />
	</picture>
	
	<ThemeBtn />
	<TextForm textVal="" checked={false}/>
	<ToDo />


</section>

<style>
	section{
		/* margin: 1rem auto; */
		height: 30vh;
	}
	picture>img{
		/* position: relative;
		top: 0;
		left: 0; */
		width: 100vw;
		z-index: -9999;
		background-size: cover;
	}




</style>
