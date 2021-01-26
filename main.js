import Vue from 'vue'
import App from './App'
import {baseUrl} from './config/index.js'
import Skeleton from './components/skeleton/index.vue'

Vue.component('Skeleton',Skeleton);

Vue.config.productionTip = false

Vue.prototype.baseUrl = baseUrl
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
