<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	// import Header from '$lib/components/Header.svelte';
	import Header2 from '$lib/components/Header2.svelte';
	import FooterSimple from '$lib/components/FooterSimple.svelte';
	import FooterSimpleDark from '$lib/components/FooterSimpleDark.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header2 />

{@render children()}

<ScrollToTop />
<Footer />
<FooterSimple />
<FooterSimpleDark />