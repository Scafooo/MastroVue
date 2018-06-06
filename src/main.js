import Vue from 'vue'
import Antd from 'vue-antd-ui'
import 'vue-antd-ui/dist/antd.css'
import App from './App/App.vue'
import router from './router'

Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
