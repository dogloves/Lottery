function getRTime(endtime) {
	var dd,
		hh,
		mm,
		ss = null,
		str = ''
	var time = parseInt(endtime) - new Date().getTime()
	function setTime(time) {
		if (time <= 0) {
			return '结束'
		} else {
			dd = Math.floor(time / 60 / 60 / 24)
			hh = Math.floor((time / 60 / 60) % 24)
			mm = Math.floor((time / 60) % 60)
			ss = Math.floor(time % 60)
			str = dd + '天' + hh + '小时' + mm + '分' + ss + '秒'
		}
	}
	setInterval(() => {
		setTime(time)
	}, 1000)
	console.log(str)
	return str
}
export { getRTime }
