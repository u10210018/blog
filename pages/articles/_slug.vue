<template>
	<article>
		<nuxt-content :document="article" />
	</article>
</template>

<script>
export default {
	async asyncData({ $content, params, error }) {
		const slug = params.slug || "index";
		const article = await $content("articles", slug)
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: "Page not found" });
			});

		return { article };
	},
};
</script>