<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';
	import MegaMenu from '$lib/components/baseLayout/MegaMenu.svelte';
	import SearchInputField from '$lib/components/searchInput/SearchInputField.svelte';
	import Monogramm from '$lib/images/monogramm.png';
</script>

<header>
	<div class="container-menu shadow-md">
		<div class="container-menu-secondary shadow-md">
			<div class="my-2 mx-8 left-12 w-10">
				<a href="/"><img src={Monogramm} alt="Ciss Logo" /></a>
			</div>
			<div class="container-darkmode">
				<DarkMode />
			</div>
		</div>
	</div>
</header>

<style>
	.container-menu {
    width: 100%;
  }

	.container-menu-secondary {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		align-self: center;
		margin: 0 auto;
	}

	.container-darkmode {
		display: flex;
		align-items: center;
		margin-right: 2em;
	}
</style>
