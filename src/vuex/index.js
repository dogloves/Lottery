import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let modules = {}
const requireAllModules = require.context('./', true, /\.js$/)
requireAllModules.keys().forEach((key) => {
	let module = requireAllModules(key).default
	if (module && module.name && module.namespaced) {
		modules[module.name] = module
	}
})
export default new Vuex.Store({
	modules: modules,
	strict: process.env.NODE_ENV !== 'production',
})
