<script>
	import Header from './Header.svelte';
	import './styles.css';
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
	background-color: var(--very-light-gray);
}


footer >p{
	margin-bottom: 2rem;
}


</style>
