import Vue from 'vue'
import axios from 'axios'
import router from '@/router.js'

// 添加响应拦截器
let vm = new Vue()
axios.interceptors.response.use(
	(response) => {
		if (0) {
			router.push('/')
		}
		return response
	},
	function(error) {
		// 对响应错误做点什么
		return Promise.reject(error)
	},
)

//token设置
axios.interceptors.request.use(
	(config) => {
		if (localStorage.xiaToken) {
			config.headers.token = 'IOS' + localStorage.xiaToken
		} else {
			config.headers.token = 'IOS'
		}
		return config
	},
	(err) => {
		return Promise.reject(err)
	},
)
