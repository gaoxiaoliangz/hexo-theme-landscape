const utils = {}

utils.isIE = function (ver) {
	var b = document.createElement('b')
	b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
	return b.getElementsByTagName('i').length === 1
}

utils.sealScroll = function () {
	$("body").css({ "overflow": "hidden" });
};

utils.unlockScroll = function () {
	$("body").css({ "overflow": "visible" });
}

utils.excAndExcOnResizing = function (func, args) {
	if (!args) {
		args = [];
	}
	func.apply([], args);
	$(window).resize(function () {
		func.apply(null, args);
	})
}

utils.addScriptToHead = function (url) {
	$("head").append("<script src='" + url + "'></script>")
}

utils.addScriptInBody = function (url) {
	$("body").append("<script src='" + url + "'></script>")
}

export default utils
