<script>
	import '../app.css';
	import { dict, locale, t } from '$lib/i18n';
	import translations from '../lib/translations.ts';

	// Set up the 'dict' store with your translation data
	dict.set(translations);

	// Handle user's language selection
	$: languages = Object.keys(translations);

	function setLocale(newLocale) {
		locale.set(newLocale);
	}
	$: t;
</script>

<div>
	<slot getValue={t} />
</div>
