<script lang="ts">
  // Supports weights 100-700
  import "@fontsource-variable/josefin-sans";
  import Header from "./lib/Header.svelte";
  import Background from "./lib/Background.svelte";
  import TextInput from "./lib/TextInput.svelte";
  import Display from "./lib/Display.svelte";
  import { TodoItems, active, completed } from "./lib/store";

  let allItems = $TodoItems;

  const updateCounts = () => {
    // update count
    $completed = $TodoItems.filter((item) => item.seen === true).length;
    $active = $TodoItems.filter((item) => item.seen === false).length;
    allItems =$TodoItems;
  };

  $:updateCounts();
</script>

<main
  class=" w-full min-h-screen p-0 m-0 flex flex-col justify-start items-center px-80 pt-14 font-joseph-sans max-md:px-40 max-sm:px-10"
>
  <Background />
  <Header />
  <TextInput on:make-todo-item={updateCounts} />
  <Display allItems={allItems}  on:update={updateCounts}/>

  <span class="text-lgb dark:text-white">Drag and drop to reorder list</span>
</main>

<style>
</style>
