<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import CrossIcon from "./CrossIcon.svelte";
  import type { Todo } from "./store";
  export let item:Todo;
  const dispatch = createEventDispatcher();
</script>


<label class="relative w-full flex p-4 justify-between items-center">
  <div class="absolute inset-y-0 left-0 flex items-center pl-4 ">
    <input type="checkbox" class="w-6 h-6 rounded-full border cursor-pointer appearance-none hover:border-bb dark:border-dgb2" checked={item.seen} id={item.id} on:change={()=>dispatch('update', {id:item.id, seen:!item.seen})}/>
    <label for={item.id} class="w-6 h-6 rounded-full border cursor-pointer hover:border-bb transition-colors  dark:border-dgb2"></label>
    <span class="{item.seen ? 'line-through':''} text-vdgb dark:text-white ps-4">{item.value}</span>
  </div>
  <button class="ml-auto" on:click={()=>dispatch('delete',{id:item.id})}>
    <CrossIcon  />
  </button>
</label>

<style>
  input[type="checkbox"] {
    display: none; 
  }
  input[type="checkbox"] + label {
    background-repeat: no-repeat;
    background-size: contain;
  }
  input[type="checkbox"]:checked + label {
    background-image: url("../assets/icon-check.svg"), linear-gradient(to bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    background-size: 50% auto, auto;
    background-position: center, center;
  }
</style>