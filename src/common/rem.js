;(function remSupport() {
	// 对手机端进行rem计算初始化
	var domBody = document.querySelector('body')
	var docEl = document.documentElement
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
	var recalc = function recalc() {
		var clientWidth = docEl.clientWidth
		if (!clientWidth) return
		if (clientWidth >= 375) {
			docEl.style.fontSize = '100px'
		} else {
			docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
		}
	}
	if (!document.addEventListener) {
	} else {
		window.addEventListener(resizeEvt, recalc, false)
		document.addEventListener('DOMContentLoaded', recalc, false)
	}
})()
