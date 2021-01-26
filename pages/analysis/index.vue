<template>
	<view class="page">
		<analysis />
		<analysis2 />
	</view>
</template>

<script>
	import analysis from "./analysis.vue";
	import analysis2 from "./analysis2.vue";
	export default {
		components: {
			analysis,
			analysis2,
		},
	}
</script>

<style>
	.page{
		padding-left: 20px; 
	}
</style>
