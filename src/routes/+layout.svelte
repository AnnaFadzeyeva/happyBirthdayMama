<script lang="ts">
	import '../app.pcss';
	import Header from '$lib/components/baseLayout/Header.svelte';
	import Footer from '$lib/components/baseLayout/Footer.svelte';
	import { megaMenuLinks as importedMegaMenuLinks } from '$lib/data/layoutData';

	interface Data {
	  megaMenuLinks: any;
	  subMenuLinks: any;
	}
  
	export let data: Data;
	$: ({ subMenuLinks } = data || {});

	const megaMenuLinks = importedMegaMenuLinks; // Neuer Name für die importierten Daten
</script>
  
<div class="app">
	<!-- <Header /> -->
	<slot></slot>
	<!-- <Footer /> -->
</div>
  
<style>
	.app {
	  display: flex;
	  flex-direction: column;
	  min-height: 100vh;
	}
</style>
