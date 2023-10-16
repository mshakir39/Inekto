<script lang="ts">
	export let homePage: any;
</script>

<main class="mt-12 md:mt-60">
	<div class="flex items-center">
		<hr class="border-t border-black w-full h-1" />

		<span class="px-10 whitespace-nowrap text-xs font-medium">{homePage?.ourAchievements}</span>
		<hr class="border-t border-black w-full h-1" />
	</div>
	<div
		class="flex md:flex-row flex-col bg-[#F5F5F5] rounded-xl h-auto md:h-[300px] p-6 md:p-14 mt-16 text-center md:text-left"
	>
		<div class="md:w-1/3 flex flex-col">
			<span class="text-gray-400 text-xs font-medium">CLIENT</span>
			<span class="py-6">SNCF</span>
			<span class="text-gray-400 text-xs mb-4 font-medium mt-8">MISSION</span>
			<span class="text-sm md:w-80 text-[#787878]">
				{homePage?.achievements[0][0].des}
			</span>
		</div>
		<div class="md:w-1/3 flex flex-col">
			<span class="text-gray-400 text-xs font-medium mt-6 md:mt-0">
				{homePage?.achievements[0][1].title}
			</span>
			<span class="py-4 text-sm text-[#787878]"> {homePage?.achievements[0][1].des} </span>
			<span class="text-gray-400 text-xs mb-4 font-medium md:mt-8 mt-6">
				{homePage?.achievements[0][2].title}
			</span>
			<p class="text-sm md:w-80 text-[#787878]">
				{homePage?.achievements[0][2].des}
			</p>
		</div>
		<div class="md:w-1/3 flex flex-col md:pl-20 pl-0">
			<span class="text-gray-400 text-xs font-medium mt-6 md:mt-0">
				{homePage?.achievements[0][3].title}</span
			>
			<span class="py-4 text-sm text-[#787878]"> {homePage?.achievements[0][3].des}</span>
		</div>
	</div>
	<div
		class="flex md:flex-row flex-col bg-[#F5F5F5] rounded-xl h-auto md:h-[300px] p-6 md:p-14 mt-6 md:mt-16 text-center md:text-left"
	>
		<div class="md:w-1/3 flex flex-col">
			<span class="text-gray-400 text-xs font-medium">CLIENT</span>
			<span class="py-6">FRIDAY</span>
			<span class="text-gray-400 text-xs mb-4 font-medium mt-8">MISSION</span>
			<p class="text-sm md:w-80 text-[#787878]">
				{homePage?.achievements[1][0].des}
			</p>
		</div>
		<div class="md:w-1/3 flex flex-col">
			<span class="text-gray-400 text-xs font-medium mt-6 md:mt-0">
				{homePage?.achievements[1][1].title}
			</span>
			<span class="py-4 text-sm text-[#787878]"> {homePage?.achievements[1][1].des} </span>
			<span class="text-gray-400 text-xs mb-4 font-medium md:mt-8 mt-6">
				{homePage?.achievements[1][2].title}</span
			>
			<p class="text-sm md:w-80 text-[#787878]">
				{homePage?.achievements[1][2].des}
			</p>
		</div>
		<div class="md:w-1/3 flex flex-col md:pl-20 pl-0">
			<span class="text-gray-400 text-xs font-medium mt-6 md:mt-0">
				{homePage?.achievements[1][3].title}</span
			>
			<span class="py-4 text-sm text-[#787878]"> {homePage?.achievements[1][3].title}</span>
		</div>
	</div>
	<div
		class="flex md:flex-row flex-col bg-[#F5F5F5] rounded-xl h-auto md:h-[300px] p-6 md:p-14 mt-6 md:mt-16 text-center md:text-left"
	>
		<div class="md:w-1/3 flex flex-col">
			<span class="text-gray-400 text-xs font-medium">CLIENT</span>
			<span class="py-6">Ministers</span>
			<span class="text-gray-400 text-xs mb-4 font-medium mt-8">MISSION</span>
			<p class="text-sm md:w-80 text-[#787878]">{homePage?.achievements[2][0].des}</p>
		</div>
		<div class="md:w-1/3 flex flex-col">
			<span class="text-gray-400 text-xs font-medium mt-6 md:mt-0">
				{homePage?.achievements[2][1].title}</span
			>
			<span class="py-4 text-sm text-[#787878]"> {homePage?.achievements[2][1].des}</span>
			<span class="text-gray-400 text-xs mb-4 font-medium md:mt-8 mt-6">
				{homePage?.achievements[2][2].title}</span
			>
			<p class="text-sm md:w-80 text-[#787878]">
				{homePage?.achievements[2][2].des}
			</p>
		</div>
		<div class="md:w-1/3 flex flex-col md:pl-20 pl-0">
			<span class="text-gray-400 text-xs font-medium mt-6 md:mt-0">
				{homePage?.achievements[2][3].title}</span
			>
			<span class="py-4 text-sm text-[#787878]"> {homePage?.achievements[2][3].des}</span>
		</div>
	</div>
</main>
