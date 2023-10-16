<script>
	import { dict, locale, t } from '../i18n';
</script>

<main class="mt-16 h-[350px] md:h-[700px] relative">
	<img
		src="/Visuels/WEB/Inekto_Visuel01.jpg"
		class="object-cover mr-3 w-full h-[350px] md:h-[700px] rounded-2xl"
		alt="Heroimage"
		loading="lazy"
	/>
	<div
		class="bg-[#A09BDC] md:pt-24 text-sm md:text-lg md:h-[350px] h-[175px] absolute z-10 top-1/2 md:left-1/2 w-full md:w-1/2 rounded-xl p-4 md:p-12 text-[#F5F5F5]"
	>
		{$t('homePage.heroTitle')}
		<br />
		<div class="md:mt-12 mt-4">
			<span class="text-sm md:text-base"> Lucas Delcros </span>
			<br />
			<span class="text-xs">
				{$t('homePage.heroSectionDesignation')}
			</span>
		</div>

		<img
			src="/pictos_PNG/Inekto_picto2.png"
			class="h-6 w-8 absolute left-[83%] md:left-[89%] top-[73%] md:top-[12%]"
			alt="inekto picto"
			loading="lazy"
		/>
	</div>
</main>
