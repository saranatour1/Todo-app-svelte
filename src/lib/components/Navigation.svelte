<script lang="ts">
  let number = 0;

</script>

<div class="first">
  <p>
    {number} items left
  </p>

  <nav>
    <button class="">All</button>
    <button>Active</button>
    <button>Completed</button>
  </nav>

    <button>
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
    background-color: var(--very-light-gray);
    border-radius: 7px;
    padding: 4px;
    box-shadow: 0px 1px 0px 0px rgba(9, 30, 66, 0.137);
  }

  div p{
    color:var(--dark-grayish-blue);
    font-size: 14px;
    text-indent: 5px;
    padding-left: 6px;
  }
  
  button{
    border: none;
    background-color: transparent;
    color: var(--dark-grayish-blue);
    cursor: pointer;
    font-family: var(--font-family);
  }

  button:active{
    color: var(--bright-blue);
  }

  nav button{
    padding-left: 4px;
  }

  div.first button:last-of-type{
    padding-right: 5px;
  }

</style>

