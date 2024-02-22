<script lang="ts">
  import { onMount } from "svelte";
  import Moon from "./Moon.svelte";
  import Sun from "./Sun.svelte";
  import { isDark } from "./store";

  const getColorSchemeLS = () => localStorage.getItem("color-scheme") as "dark" | "light" | null;

  onMount(() => {
    const colorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const onColorSchemeChange = (e: MediaQueryListEvent) => {
      if (getColorSchemeLS()) return;
      $isDark = e.matches;
    };
    colorSchemeMedia.addEventListener("change", onColorSchemeChange);

    const colorSchemeLS = getColorSchemeLS();
    if (colorSchemeLS) {
      $isDark = colorSchemeLS === "dark";
    } else {
      const isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      $isDark = isSystemDarkTheme;
    }
    updateTheme($isDark);
    return () => colorSchemeMedia.removeEventListener("change", onColorSchemeChange);
  });

  const changeTheme = () => {
    $isDark = !$isDark;
    updateTheme($isDark);
  };

  const updateTheme = (darkTheme: boolean) => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("color-scheme", darkTheme ? "dark" : "light");
  };
</script>

<button on:click={changeTheme} class="transition-all cursor-pointer">
  {#if $isDark}
    <Sun />
  {:else}
    <Moon />
  {/if}
</button>
