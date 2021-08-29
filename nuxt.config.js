const { resolve } = require('path');

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'blog',
		htmlAttrs: {
			lang: 'zh-tw'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/sass/tailwind.sass',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/style-resources',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/i18n',
		'@nuxt/content',
	],

	//doc: https://i18n.nuxtjs.org/options-reference
	i18n: {
		locales: [
			{
				code: 'zh-tw',
				iso: 'zh-tw',
				name: '繁中',
				file: 'zh-tw.js'
			},
			{
				code: 'en',
				iso: 'en',
				name: 'En',
				file: 'en.js'
			}
		],
		langDir: resolve(__dirname, 'lang/'),
		defaultLocale: 'zh-tw',
		vueI18n: {
			fallbackLocale: 'zh-tw',
			silentTranslationWarn: true,
		}
	},
	//doc: https://tailwindcss.nuxtjs.org/options
	tailwindcss: {
		jit: true,
		exposeConfig: true,
		cssPath: '~/assets/sass/tailwind.sass',
	},
	router: {
		base: '/blog/'
	},
	styleResources: {
		sass: [
			'./assets/sass/_base.sass',
		]
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		publicPath: 'https://u10210018.github.io/blog',
		extractCSS: true,
	},
}
