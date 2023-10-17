<script lang="ts">
	import { dict, locale, t } from '../i18n';
	export let homePage: any = {};

	// Define arrays for content blocks
	$: {
		contentBlocks = [
			{
				id: 1,
				symbol: 'A',
				title: homePage?.whatWeHave?.des1
			},
			{
				id: 2,
				symbol: '5',
				title: homePage?.whatWeHave?.des2
			},
			{
				id: 3,
				symbol: '100',
				title: homePage?.whatWeHave?.des3
			}
		];
		contentBlocks2 = [
			{
				id: 1,
				icon: '/pictos_PNG/Inekto_cubes.png',
				alt: 'Boxes',
				title: homePage?.services[0].title,
				description: homePage?.services[0].des
			},
			{
				id: 2,
				icon: '/pictos_PNG/Inekto_squares.png',
				alt: 'Boxes',
				title: homePage.services[1].title,
				description: homePage.services[1].des
			},
			{
				id: 3,
				icon: '/pictos_PNG/Inekto_arrows.png',
				alt: 'Boxes',
				title: homePage.services[2].title,
				description: homePage.services[2].des
			}
		];
	}

	// Define variables to store content blocks
	let contentBlocks: any = [];
	let contentBlocks2: any = [];
</script>

<main class="mt-16 px-6 md:px-20">
	<h1 class="text-xs mb-10 font-semibold" id="whoWeAre" style="scroll-margin-top: 60px;">
		{$t('homePage.whoWeAre.title')}
	</h1>
	<p class="md:text-3xl text-xl md:w-[650px]">
		{$t('homePage.whoWeAre.work')}
	</p>
</main>

<div class="flex flex-col md:flex-row px-8 md:px-20 pt-4 md:mt-28">
	<div class="flex flex-col md:w-2/4 mt-10">
		{#each contentBlocks as block, i (block.id)}
			<div class="flex flex-col md:h-24 items-center mt-8 md:flex-row md:items-center">
				<div
					class="bg-[#B4BEBE] md:h-28 md:w-28 h-16 w-16 rounded-2xl flex justify-center items-center"
				>
					<div class="relative text-white">
						<span class="md:text-5xl text-3xl font-semibold">{block.symbol}</span>
						<span class="absolute text-3xl font-semibold md:top-[-4px] top-[-9px]"
							>{block.symbol !== '100' ? '+' : ''}</span
						>
					</div>
				</div>
				<div class="text-center md:text-left md:pl-8 md:w-72 text-sm mt-6 md:mt-0">
					<h1 class="font-medium">{block.title}</h1>
				</div>
			</div>
		{/each}
	</div>
	<div class="md:w-2/4 md:mt-0 mt-8">
		<div class="flex flex-col items-end">
			{#each contentBlocks2 as block, i (block.id)}
				<div
					class="bg-[#F5F5F5] h-auto md:h-[260px] text-center md:text-left md:w-[477px] w-auto rounded-xl p-4 md:p-10 mt-6"
				>
					<div class="flex flex-col">
						<div class="flex md:justify-end justify-center">
							<img
								src={block.icon}
								alt={block.alt}
								class="h-16 w-16 text-[#787878]"
								loading="lazy"
							/>
						</div>
						<div>
							<h1 class="text-[#787878] font-semibold md:mt-0 mt-4">
								{block.title}
							</h1>
							<p class="mt-6 text-[#787878] text-sm md:w-[333px]">
								{block.description}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
