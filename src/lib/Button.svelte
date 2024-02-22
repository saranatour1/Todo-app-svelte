<script lang="ts">
  export let  active = false;
</script>

<button class="dark:text-dgb2 capitalize hover:text-bb transition-colors {active ? 'text-bb':"text-lgb"}"   {...$$restProps}  {...$$props} on:click>
  <slot />
</button>