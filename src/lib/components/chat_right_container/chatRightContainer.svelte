<script lang="ts">
	import ChatTextAreaContainer from '$lib/components/chat_right_container/chat_textarea_conatiner/chatTextAreaContainer.svelte';
</script>

<div class="chatRightContainer">
	<div class="header">header</div>
	<div class="chatContainer">
		{#each { length: 10 } as _, i}
			<div style="height: 100%; background: linear-gradient(blue, #fff);"></div>
			<div style="height: 100%; background: linear-gradient(red, #fff);"></div>
		{/each}
	</div>
	<div class="footer">
		<ChatTextAreaContainer />
	</div>
</div>

<style>
	.chatRightContainer {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: white;
		height: 100%;
	}

	.header {
		line-height: var(--container-height-0);
		background: #ddd;
		flex-shrink: 0;
	}

	.chatContainer {
		flex: 1;
		overflow-y: auto;
	}

	.footer {
		min-height: var(--container-height-0);
		flex-shrink: 0;
		padding: 0.5rem;
	}
</style>
