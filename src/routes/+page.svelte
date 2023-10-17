<script lang="ts">
	import ProjInfoAndContactInfo from './../lib/components/ProjInfoAndContactInfo.svelte';
	// Import Svelte components
	import Header from '$lib/components/Header.svelte';
	import HeroHeading from '$lib/components/HeroHeading.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import OurAchivements from '$lib/components/OurAchivements.svelte';
	import Testimonial from '$lib/components/Testimonial.svelte';
	import WhoAreWeSection from '$lib/components/WhoAreWeSection.svelte';
	import InektoLogo from '$lib/components/Inekto_Logo.svelte';

	// Import the translation function
	import { t } from '../lib/i18n';
	import Address from '$lib/components/Address.svelte';
	import ContactAndAddressInfo from '$lib/components/ContactAndAddressInfo.svelte';
	import ContactLine from '$lib/components/ContactLine.svelte';
	import KeyOfferings from '$lib/components/KeyOfferings.svelte';
	import ApplicationAreas from '$lib/components/ApplicationAreas.svelte';
	import WhyWorkWithUs from '$lib/components/WhyWorkWithUs.svelte';
	import OurValue from '$lib/components/OurValue.svelte';
	import InektoBrands from '$lib/components/InektoBrands.svelte';

	// Use the t() function to translate the 'homePage' object
	$: homePage = $t('homePage');
</script>

<main class="px-[5%] relative w-auto md:w-[1440px] mx-auto">
	<Header />
	<HeroHeading />
	<HeroSection />
	<WhoAreWeSection {homePage} />
	<ApplicationAreas {homePage} />
	<OurValue {homePage} />
	<WhyWorkWithUs {homePage} />
	<KeyOfferings {homePage} />
	<OurAchivements {homePage} />
	<Testimonial {homePage} />
	<InektoBrands />
	<ContactLine />
	<ContactAndAddressInfo {homePage} />
	<ProjInfoAndContactInfo {homePage} />
	<Address {homePage} />
</main>
