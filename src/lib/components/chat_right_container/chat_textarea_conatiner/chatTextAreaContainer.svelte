<script lang="ts">
	const syncHeight = (el: HTMLElement): void => {
		el.style.setProperty('height', 'auto');
		el.style.setProperty('height', `${el.scrollHeight}px`);
	};
</script>

<div class="chatTextAreaContainer">
	<textarea class="chatInputTextarea" oninput={(e) => syncHeight(e.currentTarget)}></textarea>
	<div class="chatTextAreaActionContainer">action</div>
</div>

<style>
	.chatTextAreaContainer {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		width: var(--container-width-max);
		min-height: var(--container-height-1);
		padding: 0.5rem;
		border-radius: 0.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
		background-color: white;
	}

	.chatInputTextarea {
		width: 100%;
		max-height: 20rem;
		min-height: var(--container-height-0);
		overflow-y: auto;
		resize: none;
	}

	.chatTextAreaActionContainer {
		display: flex;
		height: var(--container-height-0);
		line-height: var(--container-height-0);
	}
</style>
