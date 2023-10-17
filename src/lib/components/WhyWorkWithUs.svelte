<script lang="ts">
	export let homePage: any = {};
</script>

<div class="mt-20 px-6 md:px-20">
	<h1
		class="md:text-left text-center text-sm mb-10 font-semibold"
		id="whyWorkWithUs"
		style="scroll-margin-top: 60px;"
	>
		{homePage?.whyWorkWithUs}
	</h1>
	<p class="text-xl md:text-3xl md:text-left text-center md:w-[558px]">
		{homePage?.whyWorkWithUsReason}
	</p>
</div>

<div class="mt-20 flex md:flex-row flex-col px-6 md:px-20 mb-10">
	<div
		class="bg-[#B4BEBE] md:pb-0 pb-4 h-auto md:h-[250px] md:w-60 rounded-2xl px-6 text-[#F5F5F5] md:mr-4 mb-6 md:mb-0"
	>
		<h1 class="text-base md:text-xl mt-4 md:mt-10 font-normal">
			{homePage?.freeMockup}
		</h1>
		<p class="mt-6 md:mt-10 text-xs md:text-sm font-normal">
			{homePage?.freeMockUpDes}
		</p>
	</div>

	<div
		class="bg-[#B4BEBE] md:pb-0 pb-4 h-auto md:h-[250px] md:w-60 rounded-2xl px-6 text-[#F5F5F5]"
	>
		<h1 class="text-base md:text-xl mt-4 md:mt-10 font-normal">
			{homePage?.pointTech}
		</h1>
		<p class="mt-6 md:mt-16 text-xs md:text-sm font-normal">{homePage?.pointTechDes}</p>
	</div>

	<div class=" rounded-2xl md:px-6 px-0 mt-6 md:mt-0 md:block hidden">
		<img
			src="/Visuels/WEB/Inekto_Visuel03.jpg"
			class="h-[250px] md:w-60 rounded-2xl object-cover"
			alt="Inekto_Visuel03"
			loading="lazy"
		/>
	</div>
</div>
