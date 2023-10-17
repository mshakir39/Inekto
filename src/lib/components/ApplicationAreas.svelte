<script lang="ts">
	export let homePage: any = {};
</script>

<div
	class="flex flex-col md:items-start items-center px-6 md:px-20 mt-8 md:text-left text-center"
	id="projects"
	style="scroll-margin-top: 60px;"
>
	<img
		src="/pictos_PNG/Inekto_clock.png"
		class="h-11 w-11 text-[#787878] mb-6"
		alt="Inekto_clock"
		loading="lazy"
	/>
	<h1 class="text-xl md:text-3xl md:w-[475px]">{homePage?.specialization}</h1>
</div>

<div class="flex pl-0 md:pl-20 mt-20 mb-10 justify-baseline">
	<div class="text-xs font-semibold whitespace-nowrap">{homePage?.applicationAreas}</div>
	<hr class=" ml-6 w-full border-t border-gray-900 mt-2" />
</div>
<!-- Display supported operating systems, languages, and frameworks -->
<div class="flex md:flex-row flex-col h-auto md:h-[526px] mb-4">
	<div class="bg-[#AFBEDC] md:mr-4 md:w-[757px] rounded-xl">
		<div class="flex flex-col pt-8 pb-8 md:pt-40 px-16 text-xs text-white">
			<span class="mb-4">{homePage?.os}</span>
			<span class="text-base"> IOS, Android, Ubuntu, MACOS, Windows </span>
			<span class="mb-4 mt-8"> LANGUAGES </span>
			<span class="text-base"> Python, Java, Javascript, Web, C/C++, PHP </span>
			<span class="mb-4 mt-8">{homePage?.tools}</span>
			<span class="text-base"> Monday, Altassian </span>
			<span class="mb-4 mt-8"> FRAMEWORKS </span>
			<span class="text-base"> Angular, React, Ruby, Vue, Django, ASP.NET, Node </span>
		</div>
	</div>
	<div class="md:block hidden h-full">
		<img
			src="/Visuels/WEB/Inekto_Visuel02.jpg"
			class=" text-[#787878] h-full mb-6 object-cover w-auto rounded-xl"
			alt="Inekto_Visuel02"
			loading="lazy"
		/>
	</div>
</div>
