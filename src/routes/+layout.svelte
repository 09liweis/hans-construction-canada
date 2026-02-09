<script lang="ts">
  import '../app.css';
  import Navigation from '../components/Navigation.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <title>Hans Construction Canada</title>
</svelte:head>

<Navigation />

{@render children()}