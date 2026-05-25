<script lang="ts">
  import '../app.css';
  import Navigation from '../components/Navigation.svelte';
  import {COMPANY_NAME} from '$lib';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <title>{COMPANY_NAME}</title>
</svelte:head>

<Navigation />

{@render children()}