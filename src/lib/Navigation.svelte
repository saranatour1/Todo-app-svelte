<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { TodoItems, active, completed } from "./store";
  import Button from "./Button.svelte";
  
  const dispatch = createEventDispatcher();  
  export let current = 'all';

  const btnRoutes = ['all','active','completed'];

  function handleClick(route:string) {
    dispatch('on-active',route);
  }

  const clearCompleted = ()=>{
    dispatch('clear');
  }

</script>

<div class="flex justify-between items-center w-full p-2">
  <span class=" text-lgb dark:text-dgb2">{$active} items left</span>

  <div class=" flex justify-around items-center w-3/12">

    {#each btnRoutes as route}
      <Button active={current === route} on:click={()=>handleClick(route)}>
        {route}
      </Button>
    {/each}
  </div>

  <Button on:click={clearCompleted}>
    clear completed
  </Button>

</div>
