import Vue from 'vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App/App.vue'
import router from './router'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
