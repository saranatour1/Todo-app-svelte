<script lang="ts">
  import Navigation from "./Navigation.svelte";
  import { TodoItems } from "./store";
  import DisplayInput from "./DisplayInput.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  
  import Sortable from 'sortablejs';

  const dispatch = createEventDispatcher();

  export let allItems = $TodoItems;
  let current = "all";

  $: activeItems = allItems.filter((item) => !item.seen);
  $: completedItems = allItems.filter((item) => item.seen);

  const returnCurrent = (event: CustomEvent<any>) => {
    current = event.detail;
    updateItems();
  };

  const updateItems = () => {
    allItems = $TodoItems;
    activeItems = $TodoItems.filter((item) => !item.seen);
    completedItems = $TodoItems.filter((item) => item.seen);
    dispatch('update');
  };

  const updateItem = (event: CustomEvent<any>) => {
    let id = event.detail.id;
    let checked = event.detail.seen;
    const item = $TodoItems.find((item) => item.id === id);
    if (item) {
      item.seen = checked;
      updateItems();
    }
  };

  const deleteItem = (event: CustomEvent<any>) => {
    let id = event.detail.id;
    const item = $TodoItems.find((item) => item.id === id);
    if (item) {
      $TodoItems = $TodoItems.filter((item) => item.id != id);
      updateItems();
    }
  };

  const clearDone =()=>{
    $TodoItems = $TodoItems.filter(item => !item.seen);
    updateItems();
  }

  let foo:HTMLElement;
  onMount(async function() {
		Sortable.create(foo, {
      filter: '.filtered',
      group: {
				name: 'foo',
				put: true,
			},
			animation: 200
		});

	});
</script>

<div
  class="w-full bg-white flex flex-col items-start justify-between dark:bg-vddb rounded mt-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] my-8" 
>
<div bind:this={foo} class="w-full bg-white flex flex-col items-start justify-between dark:bg-vddb rounded">
  
  {#if current === "all"}
    {#each [...allItems] as item}
      <DisplayInput {item} on:update={updateItem} on:delete={deleteItem} />
    {/each}
  {:else if current === "active"}
    {#each activeItems as item}
      <DisplayInput {item} on:update={updateItem} on:delete={deleteItem} />
    {/each}
  {:else}
    {#each completedItems as item}
      <DisplayInput {item} on:update={updateItem} on:delete={deleteItem} />
    {/each}
  {/if}
</div>

  <Navigation on:on-active={returnCurrent} {current}  on:clear={clearDone} />
</div>
