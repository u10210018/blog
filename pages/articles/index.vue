<template>
	<div>
		<div>
			<ul>
				<li
					v-for="art in articles"
					:key="`${art.title}-${art.createdAt}`"
				>
					<h4>{{ art.title }}</h4>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "ArticlePage",
	async asyncData({ $content, error }) {
		const articles = await $content("articles")
			.sortBy("createdAt", "desc")
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: "Page not found" });
			});

		return { articles };
	},
};
</script>