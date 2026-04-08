import { writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

interface StatusBarContext {
	visible: any;
	show: () => void;
	hide: () => void;
}

const STATUS_BAR_CONTEXT_KEY = 'statusBar';

export function createStatusBarContext(): StatusBarContext {
	const visible = writable(false);

	const context: StatusBarContext = {
		visible,
		show: () => visible.set(true),
		hide: () => visible.set(false)
	};

	setContext(STATUS_BAR_CONTEXT_KEY, context);
	return context;
}

export function getStatusBarContext(): StatusBarContext {
	return getContext(STATUS_BAR_CONTEXT_KEY);
}
