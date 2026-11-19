<?php
$host='mysql.hostinger.in';
$username='u370352569_manu';
$password='l4YZTW552h';
$db_name="u370352569_ldb"; //replace with database name
 
$con=mysql_connect("$host", "$username", "$password")or die("Sorry..cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");
$sql = "select * from emp_info";
$result = mysql_query($sql);
$json = array();
 
if(mysql_num_rows($result)){
while($row=mysql_fetch_assoc($result)){
$json['emp_info'][]=$row;
}
}
mysql_close($con);
echo json_encode($json);
?> 