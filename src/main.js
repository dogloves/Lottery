import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/vuex'
import axios from 'axios'
import comStyle from '@/common/common.css'
import toastCss from '@/common/toast.css'
import loadCss from '@/common/loading.css'
import myMode from '@/components/mode'
import myConfirm from '@/components/confirm'
import myToast from '@/components/toast'

import Api from '@/api/api'
import Toast from '@/tool/toast'
import Loading from '@/tool/loading'

Vue.config.productionTip = false
Vue.component('myMode', myMode)
Vue.component('myToast', myToast)
Vue.component('myConfirm', myConfirm)

Vue.prototype.$axios = axios
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')