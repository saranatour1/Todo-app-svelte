<script lang="ts">
  import darkModeIcon from "$lib/images/icon-moon.svg";
	import lightModeIcon from "$lib/images/icon-sun.svg";
	import { createEventDispatcher, onMount } from "svelte";
	
	const dispatch = createEventDispatcher();
	
	let isDarkMode:boolean;

	function sayHello() {
		dispatch('message' , {isDarkMode:isDarkMode});
	}

	// $:console.log(isDarkMode);
		// Stolen from EmNudge @ https://github.com/EmNudge/unicode-lookup/blob/main/src/components/ThemeSwitcher.svelte
	const updateTheme = (darkTheme: boolean) => {
    const newTheme = darkTheme ? 'dark' : 'light';;
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('color-scheme', newTheme);
  }

	const getColorSchemeLS = () => localStorage.getItem('color-scheme') as 'dark' | 'light' | null;
  onMount(() => {
    const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const onColorSchemeChange = (e: MediaQueryListEvent) => {
      if (getColorSchemeLS()) return;
      isDarkMode = e.matches;
    };
    colorSchemeMedia.addEventListener('change', onColorSchemeChange);

    const colorSchemeLS = getColorSchemeLS();
    console.log({ colorSchemeLS })
    if (colorSchemeLS) {
      isDarkMode = colorSchemeLS === 'dark';
    } else {
      const isSystemDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDarkMode = isSystemDarkTheme;
    }

    updateTheme(isDarkMode);
    return () => colorSchemeMedia.removeEventListener('change', onColorSchemeChange);
  });


  const toggleTheme = () => {
		isDarkMode=!isDarkMode;
    updateTheme(isDarkMode);
  }

</script>

<div>
  <h3>To Do </h3>
  <button on:click={()=> {sayHello(); toggleTheme();}}  aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
    <img src={isDarkMode ? lightModeIcon:darkModeIcon} alt={isDarkMode ?  "Moon":"Sun"+ "icon"}>
  </button>
</div>


<style>
  	div{
		display: flex;
		width: 30rem;
		margin: 0 auto;
		margin-top: -8.75rem;
		justify-content: space-between;
		align-items: center;

	}

  h3{
		letter-spacing: 10px;
		text-rendering: geometricPrecision;
		/* text-size-adjust: ; */
		text-transform: uppercase;
		font-weight: var(--font-weight-bold);
		font-size: 2rem;
		margin: 0;
		padding: 0;
		color: var(--very-light-gray);
	}
	button{
		background-color: transparent;
		outline: none;
		border: none;
		cursor: pointer;	
	}


	img{
		/* animation: iconTransition 0.3s linear; */
		transition: all 0.3s ease-in-out;
	}

	@media (max-width: 1150px) {
    div{
			margin-top: -9rem;
		}
	}

	@media (max-width: 540px) {
    div{
			width: 25rem;
		}
		h3{
			letter-spacing: 9px;
		}
	}


  @media (max-width: 450px) {
		div{
			width: 22rem;
		}
	}

	@media (max-width: 406px) {
		div{
			width: 20rem;
		}
	}











</style>