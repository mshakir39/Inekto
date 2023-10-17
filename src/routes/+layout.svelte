<script>
	import '../app.css';
	import { dict, t } from '$lib/i18n';
	import translations from '../lib/translations';

	// Set up the 'dict' store with your translation data
	dict.set(translations);
	$: t;
</script>

<div>
	<slot />
</div>
