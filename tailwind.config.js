/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Inter_Regular: ['Inter-Regular', 'sans-serif'],
				inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
};
