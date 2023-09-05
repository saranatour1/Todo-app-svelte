<script lang="ts">
  import { myList, unCheckedItems , all , active ,completed } from "$lib/store";

  let number = $myList.filter((item) => item.seen === false).length;

  console.log($all)

  const deleteCompleted =() => {
    $myList = $myList.filter((item) => item.seen != true);
    $myList = $myList;
  }

</script>

<div class="first">
  <p>
    {$unCheckedItems} items left
  </p>

  
  <nav>
    <button class={$all ? "active":""} on:click={()=> {$all =true; $active =false; $completed =false;}}>All</button>
    <button class={$active ? "active":""} on:click={()=> { $all =false; $active =true; $completed =false;}} >Active</button>
    <button class={$completed ? "active":""} on:click={()=> {$all =false; $active =false; $completed =true;}}>Completed</button>
  </nav>

    <button on:click={()=> deleteCompleted()}>
      Clear Completed
    </button>

</div>

<style>
  div.first{
    width: 30rem;
    margin: 0 auto;
    margin-top: -1rem;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: center;
    height: 2rem; 
    background-color: var(--bg-task);
    border-radius: 7px;
    padding: 4px;
    box-shadow: 0px 1px 0px 0px rgba(9, 30, 66, 0.137);
    z-index: 9999;
    position: relative;
  }

  div p{
    color:var(--color);
    font-size: 14px;
    text-indent: 5px;
    padding-left: 6px;
  }
  
  button{
    border: none;
    background-color: transparent;
    color: var(--color);
    cursor: pointer;
    font-family: var(--font-family);
  }

  button:active , button:hover{
    color: var(--bright-blue);
  }

  .active{
    color: var(--bright-blue);
  }

  nav button{
    padding-left: 4px;
  }

  div.first button:last-of-type{
    padding-right: 5px;
  }

  @media (max-width: 540px) {
    div.first{
			width: 25rem;
		}
	}

  @media (max-width: 450px) {
    div.first{
			width: 22rem;
		}

    div p{
    font-size: 12px;
    padding-left: 4px;
  }
  nav button{
    padding-left: 2px;
  }

  div.first button:last-of-type{
    padding-right: 3px;
  }
	}


  @media (max-width: 406px) {
		div.first{
			width: 20rem;
		}
	}

</style>

