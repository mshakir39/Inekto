<script lang="ts">
	import Button from './Button.svelte';
	import translations from '../translations';

	import { dict, locale, t } from '../i18n';

	$: languages = Object.keys(translations);

	$: dict.set(translations);
</script>

<nav class="bg-white border-gray-200">
	<div class=" flex flex-wrap items-center justify-between mt-8 py-4">
		<a href="https://flowbite.com/" class="flex items-center">
			<img
				src="/pictos_PNG/Inekto_logo.png"
				class="h-5 mr-3"
				alt="Inekto Logo"
				loading="lazy"
			/>
		</a>
		<button
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-default"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="font-medium text-xs flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
			>
				<li>
					<a
						href="#"
						class="block py-2 mr-10 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Services</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 mr-10 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Projects</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 mr-10 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>A propos</a
					>
				</li>

				<li>
					<a
						href="#"
						class="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						><Button
							title="Contact"
							className="bg-[#B4BEBE] text-white w-24 h-7 rounded-md text-xs"
						></Button></a
					>
				</li>
				<li>
					<select bind:value={$locale}>
						{#each languages as lang}
							<option value={lang}>
								{lang}
							</option>
						{/each}
					</select>
				</li>
			</ul>
		</div>
	</div>
	<hr class="" />
</nav>
