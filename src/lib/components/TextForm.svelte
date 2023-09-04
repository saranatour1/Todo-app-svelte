<script lang="ts">
  export let textVal:string ;
  export let checked:boolean;
  export let idCounter:number;
  import deleteBtn from '$lib/images/icon-cross.svg'

  let showDeleteBtn = false;

  const changeCheck = () =>{
    checked =!checked;
  }

</script>

<div>
  <form action="post" on:submit|preventDefault={()=>console.log("Something Has happened")} >
    <input type="checkbox" checked={checked} name="myCheckbox" id={`myCheckbox${idCounter}`} on:change={()=>changeCheck()}>
    <label for={`myCheckbox${idCounter}`} class="custom-checkbox"></label>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <input type="text" name="todo" id="todo" placeholder="Create a new todo .." value={textVal ? textVal : ""} disabled={textVal ? true :false} class={checked ? "crossed":""} on:mouseenter={() => showDeleteBtn = !showDeleteBtn} on:mouseout={() => showDeleteBtn = !showDeleteBtn}>
    
    {#if idCounter !==-1}
      {#if showDeleteBtn}
        <button class="hovered">
          <img src={deleteBtn} alt="delte button">
        </button>
        {:else}
        <!-- <div></div> -->
      {/if}


    {/if}
    
  </form>
</div>

<style>
  	div{
		width: 30rem;
		margin: 0 auto;
		margin-top: 0.55rem;
    height: 3.5rem;

    /* height: 4rem; */
    /* background-color: var(--very-light-gray); */
	}

  form{
    height: 100%;
    width: 100%;
    background-color: var(--very-light-gray);
    border-radius: 7px;
    padding: 3px;
    filter: drop-shadow(0rem 0rem 0rem var(--very-light-grayish-blue));
    display: flex;
    align-items: center;
    justify-content:flex-start;
    border-bottom: 1px solid var(--light-grayish-blue);
  }

  input[type="checkbox"] {
    display: none;
  }

  .custom-checkbox {
    margin: 0 10px; 
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid var(--light-grayish-blue);
    cursor: pointer;
    position: relative;
  }

  .custom-checkbox::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('src/lib/images/icon-check.svg'); 
    background-repeat: no-repeat;
    background-position: center center;
    /* background-size: cover;  */
    display: none; 
  }

  input[type="checkbox"]:checked + .custom-checkbox::before {
    display: block;
  }


  input[type="checkbox"]:checked + .custom-checkbox {
    background: linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%)); 
  }

  input[type="checkbox"]:hover:not(:checked) + .custom-checkbox{
    border: 1px solid var(--bright-blue);
  }

  input[type="text"] {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 50%; */
    width: 100%;
    height: auto;
    outline: none;
    border: none;
    background-color: inherit;
    text-align: left;
    font-size: var(--font-size-body);
    font-family: var(--font-family);
    padding: 10px;
  }

  input[type="text"]::placeholder {
    padding: 4px;
    margin-left: 4px;
    height: 100%;
  }

  input[type="text"]::-ms-value{
    padding: auto;
    /* height: 100%; */
  }

  .crossed{
    text-decoration: line-through;
  }
  
  .hovered{
    z-index: 999;
    background-color: transparent;
    border: none;

    position: absolute;
    right: 20px; 
  }



</style>