<script>
	export let text = 'Text';
</script>

<div class="text-container mt-10  ">
	<h4 class="headline-text text-slate-800 text-3xl mx-8 dark:text-slate-300">{text}</h4>
</div>

<style>
	.text-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.headline-text {
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
</style>
