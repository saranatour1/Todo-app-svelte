<script>
	import TextForm from "./TextForm.svelte";
  import {myList, all , active, completed} from "../store";
	import { onMount } from "svelte"; 

  let activeTasks = $myList.filter((item) => item.seen === false);
  let completedTasks = $myList.filter((item) => item.seen === true);

  // let fakeBin = [];
  // onMount(()=>{
  //   fakeBin = all ? $myList : active ? activeTasks: completedTasks; 
  // })

  // $:console.log(fakeBin,activeTasks,completedTasks)

</script>

<div>
  {#each [...$myList] as item}
      <TextForm textVal={item.text} checked={item.seen} idCounter={item.id}/>
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


  @media (max-width: 540px) {
    div{
			width: 25rem;
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