<script lang="ts">
	const syncHeight = (el: HTMLElement): void => {
		el.style.setProperty('height', 'auto');
		el.style.setProperty('height', `${el.scrollHeight}px`);
	};
</script>

<div class="chatTextAreaContainer">
	<textarea class="chatInputTextarea" oninput={(e) => syncHeight(e.currentTarget)}></textarea>
</div>

<style>
	.chatTextAreaContainer {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		padding: 1rem;
		width: var(--container-width-max);
		min-height: var(--container-height-2);
		border-radius: 0.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
		background-color: white;
	}

	.chatInputTextarea {
		width: 100%;
		max-height: 20rem;
		min-height: var(--container-height-1);
		overflow-y: auto;
		resize: none;
		field-sizing: content;
	}
</style>
