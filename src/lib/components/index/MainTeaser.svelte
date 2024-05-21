<script>
	import ButtonPrimery from '../buttons/ButtonPrimery.svelte';
	import Formom from '$lib/images/for-mom.svg';
	import SnowEffect from '$lib/components/spezials/SnowEffect.svelte';
</script>

<section
	class="w-full columns-2 main-teaser bg-gradient-to-t from-indigo-100 via-purple-50 to-pink-50 dark:bg-gradient-to-t dark:from-slate-900 dark:via-slate-700 dark:to-slate-800"
>
	<div class="main-teaser-image-container m-5 ">
		<img src={Formom} alt="Für Mama" class="main-teaser-image" />
	</div>
	
	<div class="box-main-teaser basis-1/2">
		<div class="container-teaser-text">
			<h1 class=" text-pink-600 dark:text-pink-50">Alena, alles Liebe zum Jubiläum!</h1>
			<h2 class="text-slate-800 dark:text-sky-100">
				Wir können kaum sagen, wie wichtig du uns bist!
			</h2>
		</div>

	</div>
	<SnowEffect />
</section>
<!-- <div class="button-main-teaser my-4">
	<ButtonPrimery text="Glückwunsch schreiben" />
</div> -->

<style>
	.main-teaser {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		position: relative;
		overflow: hidden;
		z-index: 9;
	}

	.box-main-teaser {
		right: 0;
		margin: 11% 2em 8% 0%;
		position: relative;
		width: 100vw;
	}

	.main-teaser-image-container {
		position: absolute;
		display: flex;
		justify-content: flex-start;
		width: 50vw;
		bottom: 0%;
		left: 0%;
		margin: 0% 0% 0% 2%;
		z-index: 1000;
	}
	.container-teaser-text{
		position: relative;

	}
	h1,
	h2 {

		text-align: right;
		padding: 0;
		margin: 0 auto;
		position: relative;
		right: 0%;
		z-index: 1000;
	}

	h1 {
		font-size: 6vw; /* for responsive font size */
		font-weight: 700;
	}

	h2 {
		font-size: 2.4vw;
	}

	h1{
		line-height: 7rem;
	}

	.button-main-teaser {
		position: relative;
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
	}


	@media only screen and (min-width: 1200px) {
		.main-teaser-image-container {
		width: 35vw;
		}
	}

	@media only screen and (min-width: 993px) {
		.main-teaser-image-container {
		width: 40vw;
		}
	}


	@media only screen and (max-width: 992px) {
		h1 {
			font-size: 8vw;
			line-height: 5rem;
			margin: 2% 0% 4% 0%;
		}

		h2 {
			font-size: 3vw;
			margin-left: 2em;
		}
	}

	@media only screen and (max-width: 768px) {
		h1 {
			font-size: 7vw;
			line-height: 3rem;
			margin: 2% 0% 4% 0%;
		}

		h2 {
			font-size: 3vw;
		}
	}


	@media only screen and (max-width: 576px) {
		h1 {
			font-size: 7vw;
			line-height: 2rem;
			margin: 2% 0% 4% 0%;
		}

		h2 {
			font-size: 3vw;
		}
	}
</style>
