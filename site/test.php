<?php
	$host='mysql.hostinger.in';
	$uname='u370352569_manu';
	$pwd='nWqYxa1vfe';
	$db="u370352569_ldb";

	$con = mysql_connect($host,$uname,$pwd) or die("connection failed");
	mysql_select_db($db,$con) or die("db selection failed");
	 
	$id=$_REQUEST['id'];
        $name=$_REQUEST['name'];
	 
	$r=mysql_query("insert into logintab (name) values ('$id')");

	while($row=mysql_fetch_array($r))
	{
		$flag[name]=$row[name];
	}
	 
	print(json_encode($flag));
	mysql_close($con);
?>