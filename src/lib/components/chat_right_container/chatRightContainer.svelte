<script lang="ts">
	import ChatTextAreaContainer from '$lib/components/chat_right_container/chat_textarea_conatiner/chatTextAreaContainer.svelte';
</script>

<div class="chatRightContainer">
	<div class="header">header</div>
	<div class="chatContainer">
		{#each { length: 10 } as _, key (key)}
			<div style="height: 100%; background: linear-gradient(blue, #fff);"></div>
			<div style="height: 100%; background: linear-gradient(red, #fff);"></div>
		{/each}
		<h1>last message</h1>
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
		height: 100%;
	}

	.header {
		line-height: var(--container-height-0);
		flex-shrink: 0;
	}

	.chatContainer {
		flex: 1;
		overflow-y: auto;
	}

	.footer {
		min-height: var(--container-height-1-gap);
		margin-bottom: 1rem;
		flex-shrink: 0;
		position: relative;
	}
</style>
