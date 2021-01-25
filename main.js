import Vue from 'vue'
import App from './App'
import {baseUrl} from './config/index.js'
Vue.config.productionTip = false


Vue.prototype.baseUrl = baseUrl
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
