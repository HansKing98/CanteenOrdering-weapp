import Vue from 'vue'
import App from './App'
import {baseUrl} from './config/index.js'
import {getAvatar, getShitangAvatar} from './utils/index.js'
import Skeleton from './components/skeleton/index.vue'

Vue.component('Skeleton',Skeleton);

Vue.config.productionTip = false

Vue.prototype.baseUrl = baseUrl
Vue.prototype.getAvatar = getAvatar
Vue.prototype.getShitangAvatar = getShitangAvatar

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
