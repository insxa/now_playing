<?php
/***
COPYRIGHT THE SKYLETER LTD. COMPANY
DEVELOPED BY SKYLETER
  -- PLEASE DONT REMOVE ANY CREDIT IF YOU ARE GOING TO USE OR SHARE OUR CODE, IF SO, YOU CAN BE IN PROBLEMS. --
ONLY COMPATIBLE WITH SHOUTCAST.
***/
<?php require('config.php'); 

header('Content-Type:text/plain');
$a = file_get_contents('http://'.$np['url'].':'.$np['port'].'/currentsong?sid='.$np['sid'].'') or die('Error.');
echo ($a);
// That's it! Easy, no? 
?>
