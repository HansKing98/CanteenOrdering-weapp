import Vue from 'vue'
import App from './App'
import {
	baseUrl
} from './config/index.js'
import {
	getAvatar,
	getShitangAvatar
} from './utils/index.js'
import Skeleton from './components/skeleton/index.vue'
import htzRate from '@/components/htz-rate/htz-rate.vue'
import uView from "uview-ui";
Vue.use(uView);

Vue.component('Skeleton', Skeleton);
Vue.component('htzRate', htzRate);

Vue.config.productionTip = false

Vue.prototype.baseUrl = baseUrl
Vue.prototype.getAvatar = getAvatar
Vue.prototype.getShitangAvatar = getShitangAvatar

Vue.prototype.navigeteTo = function(url) {
	console.log(url)
	uni.navigateTo({
		url
	});
}
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
