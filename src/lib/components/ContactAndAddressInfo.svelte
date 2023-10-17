<script lang="ts">
	export let homePage: any = {};
</script>

<div class="flex md:flex-row flex-col mt-16 mb-6 md:h-72 w-full">
	<div class="bg-[#F5F5F5] md:mr-6 w-auto md:w-[825px] rounded-xl relative">
		<div class="flex flex-col py-6 md:pt-16 px-6 md:px-16 text-xl md:text-3xl font-medium">
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
