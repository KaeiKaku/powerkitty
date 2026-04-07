<script>
	import TopStatusBar from '$lib/components/top_status_bar/topStatusBar.svelte';
	import ChatLeftContainer from '$lib/components/chat_left_container/chatLeftContainer.svelte';
	import RightContainer from '$lib/components/chat_right_container/chatRightContainer.svelte';
</script>

<div class="topStatusBar"><TopStatusBar /></div>

<div><ChatLeftContainer /></div>
<div class="rightContainer">
	<RightContainer />
</div>

<style>
	.topStatusBar {
		grid-column: 1 / span 2;
	}

	.rightContainer {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
</style>
