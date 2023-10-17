<script lang="ts">
	import Button from './Button.svelte';

	export let homePage: any = {};
</script>

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
