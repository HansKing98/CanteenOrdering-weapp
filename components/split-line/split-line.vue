<template>
	<view class="split-line-main">
		<div class="title-flex">{{title}}</div>

	</view>
</template>

<script>
	export default {
		name: 'split-line',
		props: {
			title: {
				type: String,
				default: '',
			}
		},
	}
</script>

<style scoped>
	.split-line-main {
		/* display: inline-flex; */
	}

	.title-flex {
		display: flex;
		align-items: center;
		/* font-size: 1rem; */
		color: #b3b3b3;
	}

	.title-flex::before,
	.title-flex::after {
		content: '';
		flex: 1;
		height: 1px;
		background: #b3b3b3;
	}

	.title-flex::before {
		margin-right: 0.25rem;
	}

	.title-flex::after {
		margin-left: 0.25rem;
	}
</style>
