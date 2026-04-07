<script lang="ts">
</script>

<div class="chatRightContainer">
	<div class="header">header</div>
	<div
		class="chatContainer
    "
	>
		{#each { length: 10 } as _, i}
			<div style="height: 100%; background: linear-gradient(blue, #fff);"></div>
			<div style="height: 100%; background: linear-gradient(red, #fff);"></div>
		{/each}
	</div>
	<div class="footer">
		<div class="textareaContainer">
			<textarea></textarea>
		</div>
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

	.textareaContainer {
		margin: auto;
		padding: 1rem;
		max-width: var(--container-width-max);
		min-height: var(--container-height-2);
		border-radius: 0.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	textarea {
		width: 100%;
		max-height: 20rem;
		overflow-y: auto;
		resize: none;
		field-sizing: content;
	}
</style>
