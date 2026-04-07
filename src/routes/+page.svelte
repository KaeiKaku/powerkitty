<script>
	import TopStatusBar from '$lib/components/top_status_bar/topStatusBar.svelte';
	import ChatLeftContainer from '$lib/components/chat_left_container/chatLeftContainer.svelte';
</script>

<div style="grid-column: 1 / span 2;"><TopStatusBar /></div>

<div><ChatLeftContainer /></div>

<div class="right-wrapper">
	<div class="header">header</div>
	<div class="main-content">
		<h1>main content</h1>
		<div style="height: 2000px; background: linear-gradient(blue, #fff);"></div>
		<h1>End of content</h1>
	</div>
	<div class="footer">footer</div>
</div>

<style>
	.right-wrapper {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: white;
	}

	.header {
		line-height: var(--container-height-0);
		background: #ddd;
		flex-shrink: 0;
	}

	.main-content {
		flex: 1;
		overflow-y: auto; /* 这里产生内部滚动 */
		padding: 20px;
	}

	.footer {
		line-height: var(--container-height-0);
		background: red;
		color: white;
		flex-shrink: 0;
	}
</style>
