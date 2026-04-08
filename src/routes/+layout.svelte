<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	// import Header from '$lib/components/Header.svelte';
	import Header2 from '$lib/components/Header2.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header2 />

{@render children()}

<Footer />