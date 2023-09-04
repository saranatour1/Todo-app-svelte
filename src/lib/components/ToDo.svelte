<script>
	import TextForm from "./TextForm.svelte";

let todos = [
  {id:Math.random().toString(16).slice(2), seen: true, text: "You should do some Workouts", createdAt: new Date(), updatedAt: new Date() },
];

// console.log()
</script>

<div>
  {#each todos as item}
      <TextForm textVal={item.text} checked={item.seen} idCounter={todos.indexOf(item)}/>
  {/each}
</div>

<style>
  div{
    width: 30rem;
    margin: 0 auto;
    margin-top: -0.5rem;
    max-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 

    overflow-y: scroll; 
    overflow-x: hidden;
    padding: 25px;
    background-color: transparent;
    /* backdrop-filter: blur(1px); */
    /* scroll-snap-type: proximity; */
  }

  
  div::-webkit-scrollbar{
    opacity: 0;
  }
</style>