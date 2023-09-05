<script lang="ts">
  import { myList, unCheckedItems } from '$lib/store';
  export let textVal:string ;
  export let checked:boolean;
  export let idCounter:string;
  import deleteBtn from '$lib/images/icon-cross.svg';
  import type {ToDo} from '../model';
	import { onMount } from 'svelte';


  let todoText = textVal;

  let showDeleteBtn = false;

  const changeCheck = () =>{
    const indexToUpdate = $myList.findIndex((obj) => obj.id === idCounter);
    checked =!checked;
    if(idCounter != "-1"){
      $myList[indexToUpdate].seen = checked;
      $myList=$myList;
    }
    if(checked){
      $unCheckedItems -=1;
    }else{
      $unCheckedItems +=1;
    }
    console.log($myList)
  }

  let fakeArray; 
  // $: myList.subscribe(item =fakeArray)
  

  // $:console.log(checked, idCounter , textVal ,todoText);

  const bindText =(event: Event)=>{
    todoText= (event.target as HTMLInputElement).value;
  }

  let myObj:ToDo = new Object();

  const addTodo = ()=>{

    if(todoText.length ===0 ){
      console.log("Please Add a Todo list" , "You may have added an exsiting todo list ");
    }else{
      myObj["id"]=Math.random().toString(16).slice(2);
      myObj["seen"] = checked;
      myObj["text"] = todoText;
      myObj["updatedAt"] = new Date();
      myObj["createdAt"] = new Date();
      $myList.unshift(myObj);
      $myList = $myList;
      clearText()
    }
    myObj={};
    console.log($myList)
  }

  const clearText = () => {
    textVal = ""; // Set textVal to an empty string to clear the text
    todoText="";
  };

  $:console.log(myObj)

  const deleteItem = () => {
    $myList =$myList.filter((item) => item.id != idCounter); 
    // $myList=$myList;
    console.log($myList)
  }

//<!--     <!-- value={textVal} --> -->

onMount(()=>{
  $unCheckedItems = $myList.filter((item) => item.seen === false).length;
})
</script>

<div >
  <form action="post" on:submit|preventDefault={()=> addTodo()}>
    <input type="checkbox" checked={checked} name="myCheckbox" id={`myCheckbox${idCounter}`} on:change={()=>changeCheck()}>
    <label for={`myCheckbox${idCounter}`} class="custom-checkbox"></label>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <input type="text" name="todo" id="todo" placeholder="Create a new todo .." 
    on:input={(e)=>  bindText(e)}
    bind:value={todoText}

    disabled={textVal ? true :false} class={checked ? "crossed":""} >
    
    {#if idCounter != "-1"}
        <button class="hovered" on:click={()=> deleteItem()}>
          <img src={deleteBtn} alt="delte button" >
        </button>
    {/if}
  </form>
</div>


<!-- Stuff to fix : remove the main div, make this component a form only -->
<style>
  	div{
		width: 30rem;
		margin: 0 auto;
		margin-top: 0.55rem;
    height: 3.5rem;

    /* height: 4rem; */
    /* background-color: var(--very-light-gray); */
    filter: drop-shadow(0rem 0rem 0rem var(--sad-color));

    transition: background ease-in-out 0.3s;
	}

  form{
    height: 100%;
    width: 100%;
    background-color: var(--bg-task);
    border-radius: 7px;
    padding: 3px;
    /* filter: drop-shadow(0rem 0rem 0rem var(--very-light-grayish-blue)); */
    display: flex;
    align-items: center;
    justify-content:flex-start;
    border-bottom: 1px solid var(--border-color);
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
    border: 1px solid var(--border-color);
    cursor: pointer;
    position: relative;
    background-color: inherit;
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
    border: 1px solid var(--bright-blue); /** we can keep this*/
  }

  input[type="text"]:not(.crossed) {
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
    color: var(--color);
  }

  input[type="text"]{
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
    color: var(--label-color);
  }
  
  .hovered{
    z-index: 999;
    background-color: transparent;
    border: none;

    position: absolute;
    right: 20px; 
  }

  button{
    display: none;
  }

  form:hover button{
    display: block;
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