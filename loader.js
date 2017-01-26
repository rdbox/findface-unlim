const script = document.createElement('script')
script.src = chrome.extension.getURL('content.js')
document.getElementsByTagName("head")[0].appendChild(script)
