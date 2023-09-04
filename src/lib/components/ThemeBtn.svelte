<script>
  import darkModeIcon from "$lib/images/icon-moon.svg";
	import lightModeIcon from "$lib/images/icon-sun.svg";
</script>


<div>
  <h3>To Do </h3>
  <button>
    <img src={darkModeIcon} alt="light or Dark mode">
  </button>
</div>


<style>
  	div{
		display: flex;
		width: 30rem;
		margin: 0 auto;
		margin-top: -10.5rem;
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
	}
</style>