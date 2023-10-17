<script lang="ts">
	export let homePage: any = {};
</script>

<div class="flex flex-col md:mt-60 mt-12 mb-12 font-medium text-sm">
	<span>{homePage?.address1}</span>
	<span class="mb-6">{homePage?.address2}</span>
	<span>{homePage?.notice}</span>
	<span>{homePage?.copyRight}</span>
</div>
