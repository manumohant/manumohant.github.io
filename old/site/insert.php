<?php
	$host='mysql.hostinger.in';
	$uname='u370352569_manu';
	$pwd='UyvRosAqa3';
	$db="u370352569_ldb";

	$con = mysql_connect($host,$uname,$pwd) or die("connection failed");
	mysql_select_db($db,$con) or die("db selection failed");
	 
	$id=$_REQUEST['id'];
	$name=$_REQUEST['name'];

	$flag['code']=0;

	if($r=mysql_query("insert into sample values('$id','$name') ",$con))
	{
		$flag['code']=1;
		echo"hi";
	}

	print(json_encode($flag));
	mysql_close($con);
?>