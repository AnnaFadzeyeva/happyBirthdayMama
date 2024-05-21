<script>
	export let href = '/';
	export let text = 'Text';
	export let imgSrc = 'img';
	export let altText = 'alt';
</script>

<div class="container-img-pFooter my-4 gap-x-3">
	<div class="container-footer-img w-4">
		<img src={imgSrc} alt={altText} />
	</div>
	<p class="pFooter"><a class="font-sans" {href}>{text}</a></p>
</div>

<style>
	.container-img-pFooter {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	.container-footer-img {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		line-height: 1em;
	}

	.pFooter {
		color: #ffffff;
		font-family: FiraGO;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
		letter-spacing: 0.04em;
	}
</style>
