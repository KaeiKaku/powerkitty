<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/app.css';
	import '$lib/stores/status.ts';
	import { createStatusBarContext } from '$lib/components/top_status_bar/topStatusBarContext';

	createStatusBarContext();

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
