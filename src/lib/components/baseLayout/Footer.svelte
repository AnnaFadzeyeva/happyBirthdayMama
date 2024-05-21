<script lang="ts">
	import LogoCISStdiWhiteURL from '$lib/images/LogoCISStdiWhite.svg';
	import HeadlineFooter from '$lib/components/headlines/footer/HeadlineFooter.svelte';
	import SublineFooter from '$lib/components/headlines/footer/SublineFooter.svelte';
	import LinktextFooter from '$lib/components/headlines/footer/LinktextFooter.svelte';
	import LinktextImgFooter from '$lib/components/headlines/footer/LinktextImgFooter.svelte';
	import Call from '$lib/images/footer/Call.svg';
	import Home from '$lib/images/footer/Home.svg';
	import Mail from '$lib/images/footer/Mail.svg';
	import LinkedIn from '$lib/images/footer/LinkedIn.svg';
	import Twitter from '$lib/images/footer/Twitter.svg';
	import Instagram from '$lib/images/footer/Instagram.svg';
	import Xing from '$lib/images/footer/Xing.svg';
	import Support from '$lib/images/footer/Support.svg';
	import Despatch from '$lib/images/footer/Despatch.svg';
	import Invoice from '$lib/images/footer/Invoice.svg';
</script>

<footer>
	<!-- class="bg-gradient-to-r from-slate-600  to-slate-500" -->
	<div class="footerInfo">
		<div class="container-footer-logo">
			<div class="container-logo">
				<img src={LogoCISStdiWhiteURL} alt="Logo CISS TDI" />
			</div>
			<HeadlineFooter text="Geodaten Bundesweit" />
			<SublineFooter text="Datenbeschaffung und Konvertierung in NAS, DXF und SHAPE" />
		</div>
		<div>
			<HeadlineFooter text="Kontakt" />
			<LinktextImgFooter
				imgSrc={Call}
				altText="CISS TDI Telefonnummer anrufen"
				text="+49 2642 978077"
				href="/"
			/>
			<LinktextImgFooter
				imgSrc={Mail}
				altText="CISS TDI anschreiben"
				text="shop@ciss.de"
				href="mailto:shop@ciss.de"
			/>
			<LinktextImgFooter
				imgSrc={Home}
				altText="CISS TDI Anschrift"
				text="Barbarossastraße 36a, 53489 Sinzig DE"
				href="/"
			/>
		</div>
		<div class="gap-y-3">
			<HeadlineFooter text="Nützliche Links" />
			<LinktextImgFooter imgSrc={Support} altText="Icon Support" text="Support" href="/" />
			<LinktextImgFooter
				imgSrc={Despatch}
				altText="Icon Versandbedingungen"
				text="Versandbedingungen"
				href="/"
			/>
			<LinktextImgFooter
				imgSrc={Invoice}
				altText="Icon Rechnungsbedingungen"
				text="Rechnungsbedingungen"
				href="/"
			/>
		</div>
		<div>
			<HeadlineFooter text="Social Media" />
			<LinktextImgFooter
				imgSrc={LinkedIn}
				altText="LinkedIn Logo"
				text="LinkedIn"
				href="https://www.linkedin.com/company/cisstdi/?originalSubdomain=de"
			/>
			<LinktextImgFooter
				imgSrc={Xing}
				altText="XING Logo"
				text="XING"
				href="https://www.xing.com/pages/ciss-tdi-gmbh"
			/>
			<LinktextImgFooter
				imgSrc={Twitter}
				altText="Twitter Logo"
				text="Twitter"
				href="https://twitter.com/i/flow/login?redirect_after_login=%2Fciss_tdi"
			/>
			<LinktextImgFooter
				imgSrc={Instagram}
				altText="Instagram Logo"
				text="Instagram"
				href="https://www.instagram.com/cisstdi/"
			/>
		</div>
	</div>
	<div class="footerLegal">
		<LinktextFooter text="AGB" href="/" />
		<LinktextFooter text="Datenschutz" href="/" />
		<LinktextFooter text="Impressum" href="/" />
	</div>
</footer>

<style>
	footer {
		bottom: 0;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2em 0em 1.4em 0em;
		background: var(--gradient-footer, linear-gradient(180deg, #343b47 0%, #262b35 100%));

		color: #ffffff;
		z-index: 100000;
	}

	.footerInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 95vw;
		margin: 1.2em 1.2em 1.2em 1.2em;
	}

	.footerInfo div {
		width: 15em;
		/*     border: 0.5px solid var(--color-theme-2); */
	}

	.container-footer-logo {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.container-logo img {
		width: 10em;
	}

	.footerLegal {
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: space-around;
		flex-wrap: wrap;
		border-top: 0.3px solid #5e6879;
		padding-top: 1em;
		gap: 1.4em;
		width: 80vw;
	}
</style>
