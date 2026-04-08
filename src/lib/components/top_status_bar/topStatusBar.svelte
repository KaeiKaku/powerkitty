<script lang="ts">
	import { slide } from 'svelte/transition';
	import { getStatusBarContext } from './topStatusBarContext';

	const { visible } = getStatusBarContext();
</script>

{#if $visible}
	<div class="topStatusBar" transition:slide={{ duration: 300, axis: 'y' }}>status bar</div>
{/if}

<style>
	.topStatusBar {
		position: absolute;
		top: 0;
		width: 100%;
		background-color: orange;
		line-height: var(--container-height-0);
		z-index: 10;
	}
</style>
