<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { TodoItems } from './store';
  import {useId} from '../utils/index';
  let seen = false;
  let textInput ='';
  
  const dispatch = createEventDispatcher();  

  const addTodoItem=()=>{
    if(textInput!=''){
    const id = useId();
    $TodoItems.push({seen:seen, id:id, value: textInput});
    dispatch('make-todo-item');
    textInput = '';
    seen = false;
    }
  }

</script>

<form class="relative mt-10 w-full" on:submit|preventDefault>
  <div class="absolute inset-y-0 left-0 flex items-center pl-4">
    <input type="checkbox" class="w-6 h-6 rounded-full border cursor-pointer appearance-none hover:border-bb dark:border-dgb2" id="checkbox-id"  bind:checked={seen}/>
    <label for="checkbox-id" class="w-6 h-6 rounded-full border cursor-pointer hover:border-bb transition-colors  dark:border-dgb2"></label>
  </div>
  <input class="w-full pl-14 py-4 rounded-md outline-none border-none  text-black dark:text-vlg bg-white dark:bg-vddb" type="text" id="text-id" placeholder="Create a new todo.." bind:value={textInput}  on:keypress={(e) => e.key === 'Enter' && addTodoItem()}/>
</form>

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
