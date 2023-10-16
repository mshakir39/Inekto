<script lang="ts">
	export let homePage: any;
</script>

<main class="mt-12 md:mt-24">
	<div class="flex items-center">
		<hr class="border-t border-black w-full h-1" />

		<span class="px-10 whitespace-nowrap text-xs font-semibold">{homePage?.testimonials}</span>
		<hr class="border-t border-black w-full h-1" />
	</div>
	<div class="flex text-xl md:text-3xl justify-center mt-12 md:mt-24 mb-12 md:mb-24">
		{homePage?.trustUs}
	</div>
	<div class="flex md:flex-row flex-col">
		<div
			class="bg-[#B4BEBE] md:h-[350px] md:flex-1 rounded-2xl text-[#F5F5F5] md:mr-4 hidden md:block"
		>
			<img
				src="/Visuels/WEB/Inekto_Visuel05.jpg"
				class="  h-full object-cover w-auto rounded-xl"
				alt="Inekto_Visuel05"
				loading="lazy"
			/>
		</div>
		<div
			class="bg-[#A09BDC] md:px-0 px-4 md:py-0 py-6 relative md:h-[350px] h-[300px] md:flex-1 rounded-2xl text-[#F5F5F5] md:mr-4 mt-0 md:mt-36 overflow-hidden"
		>
			<div class="overflow-wrap">
				<div class="md:mt-16" style="padding-left:25px;padding-right:25px">
					{homePage?.client[0]}
				</div>
			</div>
			<img
				alt="pierre rougier"
				src="/Visuels/pierre rougier.jpeg"
				class="rounded-full h-20 absolute top-[65%] md:top-[70%] left-[65%]"
				loading="lazy"
			/>
			<div class="flex flex-col absolute top-[72%] left-[11%] md:left-[7%] text-sm">
				<span> Pierre ROUGIER, </span>
				<span> EasyKost </span>
			</div>
		</div>
		<div
			class="bg-[#AFBEDC] md:px-0 px-4 md:py-0 py-6 relative md:h-[350px] h-[300px] md:flex-1 rounded-2xl text-[#F5F5F5] md:mr-4 md:mt-0 mt-12"
		>
			<div class="overflow-wrap">
				<div class="md:mt-16" style="padding-left:25px;padding-right:25px">
					{homePage?.client[1]}
				</div>
			</div>
			<img
				alt="pierre rougier"
				src="/Visuels/lancelot.png"
				class="rounded-full h-20 absolute top-[65%] md:top-[70%] left-[65%]"
				loading="lazy"
			/>
			<div class="flex flex-col absolute top-[72%] left-[11%] md:left-[7%] text-sm">
				<span> Lancelot DE BOISJOLLY, </span>
				<span> Surfmetrics </span>
			</div>
		</div>
		<div
			class="bg-[#A09BDC] md:px-0 px-4 md:py-0 py-6 relative md:h-[350px] h-[300px] md:flex-1 rounded-2xl text-[#F5F5F5] md:mr-4 mt-12 md:mt-36"
		>
			<div class="overflow-wrap">
				<div class="md:mt-16" style="padding-left:25px;padding-right:25px">
					{homePage?.client[2]}
				</div>
			</div>
			<img
				alt="pierre rougier"
				src="/Visuels/Aurélien rousseau.png"
				class="rounded-full h-20 absolute top-[65%] md:top-[70%] left-[65%]"
				loading="lazy"
			/>
			<div class="flex flex-col absolute top-[72%] left-[11%] md:left-[7%] text-sm">
				<span> Aurélien ROUSSEAU, </span>
				<span> ARS Ile de France </span>
			</div>
		</div>
	</div>
</main>
