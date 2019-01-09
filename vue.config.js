// 设置代理的地址
let proxyUrl = ''
const devProxy = {
	target: proxyUrl,
	changeOrigin: true,
	ws: false,
	onProxyReq: function (proxyReq, req, res) {
		proxyReq.setHeader('host', proxyUrl.replace('https://', ''))
		proxyReq.setHeader('referer', proxyUrl)
		proxyReq.setHeader('origin', proxyUrl)
	},
	onProxyRes: function (proxyRes, req, res) {
		if (!res.headers) {
			res.headers = {}
		}
		res.headers['ETag'] = proxyRes.headers['etag']
	},
}
module.exports = {
	baseUrl: './',
	devServer: {
		port: 9000, // 端口号
		open: true, // 是否自动打开
		host: '0.0.0.0',
		disableHostCheck: true,
		proxy: {
			'.*': devProxy,
		},
	},
}