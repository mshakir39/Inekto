<script lang="ts">
	// Import Svelte components
	import Header from '$lib/components/Header.svelte';
	import HeroHeading from '$lib/components/HeroHeading.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import OurAchivements from '$lib/components/OurAchivements.svelte';
	import Testimonial from '$lib/components/Testimonial.svelte';
	import WhoAreWeSection from '$lib/components/WhoAreWeSection.svelte';
	import InektoLogo from '$lib/components/Inekto_Logo.svelte';
	import Button from '$lib/components/Button.svelte';

	// Import the translation function
	import { t } from '../lib/i18n';

	// Use the t() function to translate the 'homePage' object
	$: homePage = $t('homePage');

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
				title: homePage.services[0].title,
				description: homePage.services[0].des
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

<main class="px-[5%] relative w-auto md:w-[1440px] mx-auto">
	<div>
		<!-- Include Svelte components -->
		<Header />
		<HeroHeading />
		<HeroSection />
		<WhoAreWeSection />

		<!-- Display content blocks with information -->
		<div class="flex flex-col md:flex-row px-8 md:px-20 pt-4 md:mt-28">
			<div class="flex flex-col md:w-2/4 mt-10">
				{#each contentBlocks as block, i (block.id)}
					<div
						class="flex flex-col md:h-24 items-center mt-8 md:flex-row md:items-center"
					>
						<div
							class="bg-[#B4BEBE] md:h-28 md:w-28 h-16 w-16 rounded-2xl flex justify-center items-center"
						>
							<div class="relative text-white">
								<span class="md:text-5xl text-3xl font-semibold"
									>{block.symbol}</span
								>
								<span
									class="absolute text-3xl font-semibold md:top-[-4px] top-[-9px]"
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

		<!-- Display specialization and application areas -->
		<div
			class="flex flex-col md:items-start items-center px-6 md:px-20 mt-8 md:text-left text-center"
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
					<span class="text-base">
						Angular, React, Ruby, Vue, Django, ASP.NET, Node
					</span>
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
		<!-- Display our value and why work with us -->
		<div
			class="bg-[#1E1E1E] px-6 md:px-16 py-6 md:py-14 rounded-xl flex md:flex-row flex-col items-start justify-between"
		>
			<span
				class="md:text-left text-center md:pt-0 pt-6 text-xl md:text-3xl text-[#F5F5F5] leading-relaxed md:w-[728px]"
				>{homePage?.ourValue}</span
			>
			<img
				class="w-28 h-24 mr-4"
				src="/pictos_PNG/Inekto_computer.png"
				alt="Inekto_computer"
				loading="lazy"
			/>
		</div>

		<div class="mt-20 px-6 md:px-20">
			<h1 class="md:text-left text-center text-sm mb-10 font-semibold">
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

		<div class="mt-20 flex px-6 md:px-20 mb-6 md:mb-10">
			<div class="  md:block hidden h-[250px] w-60 rounded-2xl px-6 text-[#F5F5F5] mr-4" />
			<div class="  md:block hidden h-[250px] w-60 rounded-2xl px-6 text-[#F5F5F5]" />
			<div class=" px-6 flex flex-col md:text-lg text-sm">
				<span class="font-medium">{homePage?.keyOfferings[0]}</span>
				<hr class="mt-4 border-t border-black" />
				<span class="font-medium mt-4">{homePage?.keyOfferings[1]}</span>
				<hr class="mt-2 border-t border-black" />
				<span class="font-medium mt-4">{homePage?.keyOfferings[2]}</span>
				<hr class="mt-2 border-t border-black" />
				<span class="font-medium mt-4">{homePage?.keyOfferings[3]}</span>
				<hr class="mt-2 border-t border-black" />
				<span class="font-medium mt-4">{homePage?.keyOfferings[4]}</span>
			</div>
		</div>
		<!-- Display our achievements and testimonials -->
		<OurAchivements {homePage} />
		<Testimonial {homePage} />
		<div class=" flex md:px-28 px-6 md:mt-32 mt-12 justify-between">
			<InektoLogo />
			<InektoLogo />
			<InektoLogo />
			<InektoLogo />
			<InektoLogo />
			<InektoLogo />
		</div>
		<div class="flex md:pl-16 md:mt-32 mt-12 justify-baseline">
			<div class="text-xs font-semibold whitespace-nowrap">CONTACT</div>
			<hr class=" ml-6 w-full border-t border-gray-900 mt-2" />
		</div>
		<!-- Contact and address information -->
		<div class="flex md:flex-row flex-col mt-16 mb-6 md:h-72 w-full">
			<div class="bg-[#F5F5F5] md:mr-6 w-auto md:w-[825px] rounded-xl relative">
				<div
					class="flex flex-col py-6 md:pt-16 px-6 md:px-16 text-xl md:text-3xl font-medium"
				>
					{homePage?.getInTouch}
					<div class="flex mt-8">
						<img
							src="/pictos_PNG/Inekto_phone.png"
							class="h-4 w-4"
							alt="inekto number"
							loading="lazy"
						/>
						<span class="text-sm pl-4">07 xx xx xx xx</span>
					</div>
					<div class="flex mt-3">
						<img
							src="/pictos_PNG/Inekto_mail.png"
							class="h-4 w-4"
							alt="inekto mail"
							loading="lazy"
						/>
						<span class="text-sm pl-4">contact@inekto.fr</span>
					</div>
				</div>
				<img
					src="/pictos_PNG/Inekto_picto.png"
					class="h-6 w-8 absolute left-[83%] md:left-[87%] top-[73%] md:top-[82%]"
					alt="inekto picto"
					loading="lazy"
				/>
			</div>
			<img
				src="/Visuels/WEB/Inekto_Visuel04.jpg"
				class=" text-[#787878] h-full w-full md:mt-0 mt-6 mb-6 object-cover rounded-xl"
				alt="Inekto_Visuel02"
				loading="lazy"
			/>
		</div>
	</div>
	<!-- Project information request and contact information -->
	<div
		class="bg-[#1E1E1E] px-6 md:px-16 py-6 md:py-14 rounded-xl flex md:flex-row flex-col items-start justify-between"
	>
		<span class=" text-xl md:text-3xl text-[#F5F5F5] leading-relaxed md:w-[600px]"
			>{homePage?.projInfoRequest}</span
		>
		<div class="flex flex-col mt-4">
			<input
				class="mb-4 w-72 h-8 text-xs pl-4 bg-[#404040] text-white"
				type="email"
				placeholder={homePage?.contactEmailPlaceholder}
			/>
			<Button
				title={homePage?.register}
				className="bg-[#AFBEDC] text-white w-32 h-9 rounded-md text-xs"
			/>
		</div>
	</div>
	<!-- Address and copyright information -->
	<div class="flex flex-col md:mt-60 mt-12 mb-12 font-medium text-sm">
		<span>{homePage?.address1}</span>
		<span class="mb-6">{homePage?.address2}</span>
		<span>{homePage?.notice}</span>
		<span>{homePage?.copyRight}</span>
	</div>
</main>
