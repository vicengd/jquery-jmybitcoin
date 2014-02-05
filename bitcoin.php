<?php
$currency = $_REQUEST['currency'];
$filename = 'cache/.'.$currency.'btc';
$timecache = 900; //Length of time to cache, 15min.

if(file_exists($filename) && (filemtime($filename) + $timecache >= time()))
{
	echo file_get_contents($filename);
}
else
{
	$return = file_get_contents('https://blockchain.info/tobtc?currency='.$currency.'&value=1');
	$value = number_format (1/$return, 2, ',', '.');
	file_put_contents($filename, $value);
	echo $value;
}

?>