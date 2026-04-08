<script>
	import { getStatusBarContext } from '$lib/components/top_status_bar/topStatusBarContext';

	const { show, hide } = getStatusBarContext();
</script>

<div class="chatLeftContainer">
	<button onclick={show}>显示状态栏</button>
	<button onclick={hide}>隐藏状态栏</button>
</div>

<style>
	.chatLeftContainer {
		height: 100%;
		background-color: cyan;
	}
</style>
