﻿<?php
	$host='mysql.hostinger.in';
	$uname='u370352569_manu';
	$pwd='qdl7ZoQH0E';
	$db="u370352569_ldb";

	$con = mysql_connect($host,$uname,$pwd) or die("connection failed");
	mysql_select_db($db,$con) or die("db selection failed");
	 
	$id=$_REQUEST['id'];
	$name=$_REQUEST['name'];

 $query = "SELECT * FROM blood_donation_user_data WHERE `name` = '{$id}'";
 
$result = mysql_query($query);
 
if ( mysql_num_rows ( $result ) > 1 )
{
    print " ==== POST DATA =====
       Name  : $name";

/* Username already exists */
    echo 'Username already exists';
}
else
{

	$flag['code']=0;

	if($r=mysql_query("insert into blood_donation_user_data(name,place) values('$id','$name') ",$con))
	{
		$flag['code']=1;
		echo"hi";
	}

	print(json_encode($flag));
	mysql_close($con);
}
?>