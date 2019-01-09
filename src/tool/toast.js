import Vue from 'vue'
// 消息提示
function message(msg, time = 1500) {
	let dom = document.createElement('div')
	dom.classList.add('toast-box')
	dom.innerHTML = `<div class="cont" style="text-align:left;line-height:0.2rem">${msg}</div>`

	document.body.appendChild(dom)
	setTimeout(() => {
		document.body.removeChild(dom)
	}, time)
}

Vue.prototype.$Message = message
