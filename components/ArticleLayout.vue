<template>
	<article>
		<h1 class="text-yellow-600">{{ article.title }}</h1>
		<div class="wrapper">
			<h1>{{ article.title }}</h1>
		</div>
		<nuxt-content :document="article" />
	</article>
</template>

<script>
export default {
	name: "ArticleLayout",
	data() {
		return {
			article: null,
		};
	},
	async fetch() {
		this.article = await this.$content("home", "home").fetch();
	},
};
</script>

<style lang="sass" scoped>
.wrapper
	@apply text-green-600
</style>