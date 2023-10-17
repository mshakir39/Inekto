<script lang="ts">
	export let homePage: any = {};
</script>

<div
	class="bg-[#1E1E1E] px-6 md:px-16 py-6 md:py-14 rounded-xl flex md:flex-row flex-col-reverse justify-center items-center md:items-start md:justify-between"
>
	<span
		class="md:text-left text-center md:pt-0 pt-6 text-xl md:text-3xl text-[#F5F5F5] leading-relaxed md:w-[728px]"
		>{homePage?.ourValue}</span
	>
	<img
		class="md:w-28 w-16 h-16 md:mt-0 mt-8 md:h-24 mr-4"
		src="/pictos_PNG/Inekto_computer.png"
		alt="Inekto_computer"
		loading="lazy"
	/>
</div>
