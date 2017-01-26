console.info('start')
chrome.webRequest.onBeforeRequest.addListener(
	(details) => {
		const uid = Math.floor(Math.random() * 10000000000000)
		if (details.url.indexOf('_g00d') !== -1) return
		const url = details.url.replace(/&uid=\d+/, '&uid=' + uid + '&_g00d')
		return { redirectUrl: url }
	},
	{ urls: ["*://webapi.findface.ru/v2/user/*"] },
	["blocking"]
)
