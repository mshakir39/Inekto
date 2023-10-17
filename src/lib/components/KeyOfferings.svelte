<script lang="ts">
	export let homePage: any = {};
</script>

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
