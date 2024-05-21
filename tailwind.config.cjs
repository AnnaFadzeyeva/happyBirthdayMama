const config = {
	content: ['./src/**/*.{html,js,svelte,ts}','./node_modules/flowbite/**/*.js', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  
	plugins: [require('flowbite/plugin')],
  
	darkMode: 'class',
  
	theme: {
	  extend: {
		colors: {
		  primary: {
			50: 'rgb(239 246 255)',
			100: 'rgb(219 234 254)',
			200: 'rgb(191 219 254)',
			300: 'rgb(147 197 253)',
			400: 'rgb(96 165 250)',
			500: 'rgb(59 130 246)',
			600: 'rgb(37 99 235)',
			700: 'rgb(29 78 216)',
			800: 'rgb(30 58 138)',
			900: 'rgb(20 83 45)',
			950: 'rgb(23 37 84)'
		  },
		},
		backgroundImage: {
		  'bg-teaser': "url('$lib/images/bg.jpg')"
		}
	  }
	}
	
  };
  
  module.exports = config;