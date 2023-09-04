<script>
	import TextForm from "./TextForm.svelte";

let todos = [
  { seen: true, text: "You should do some Workouts", createdAt: new Date(), updatedAt: new Date() },
  { seen: true, text: "You should do some Workouts", createdAt: new Date(), updatedAt: new Date() },
  { seen: true, text: "You should do some Workouts", createdAt: new Date(), updatedAt: new Date() },
  { seen: true, text: "You should do some Workouts", createdAt: new Date(), updatedAt: new Date() },
  { seen: true, text: "You should do some Workouts", createdAt: new Date(), updatedAt: new Date() },
  { seen: true, text: "You should do some Workouts", createdAt: new Date(), updatedAt: new Date() },
  { seen: true, text: "You should do some Workouts", createdAt: new Date(), updatedAt: new Date() },
  { seen: true, text: "You should do some Workouts", createdAt: new Date(), updatedAt: new Date() },

];
</script>


<div>


  {#each todos as item}
      <TextForm textVal={item.text} checked={item.seen} />
  {/each}
</div>

<style>
  div{
    width: 30rem;
  margin: 0 auto;
  margin-top: -0.5rem;
  height: 40vh;
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