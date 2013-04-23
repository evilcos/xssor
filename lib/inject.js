//code by yuxi4n

function injectIframe(s){
	var evilIframe = document.createElement("iframe");
	evilIframe.style.width = 500;
	evilIframe.style.height = 200;
	evilIframe.src = s;
	document.body.appendChild(evilIframe);
}
