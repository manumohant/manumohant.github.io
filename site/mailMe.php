<?php 
if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') 
{
session_start();
	if(isset($_SESSION['ips']))
	{
		echo "Only One Message during a session";
	}
	else
	{
	$name=$_POST['name'];
	$message=$_POST['message'];
	$email=$_POST['email'];
	$subject=$_POST['subject'];
	list($username, $domain) = explode('@', $email);
	if(filter_var(gethostbyname($domain), FILTER_VALIDATE_IP))
	{
				if((strlen($name)>=3)&&(strlen($message)>=5))
				{
				$subject=$_POST['subject']." From " . $name;
				$to  = 'manumohantkd@gmail.com' . ', '; // note the comma
				$to .= 'manu@manumohant.com';
				$headers = 'From: info@manumohant.com' . "\r\n" .
					'Reply-To:'.$email. "\r\n" .
					'X-Mailer: PHP/' . phpversion();
				
				$x=mail($to, $subject, $message, $headers);
				$_SESSION['ips']=$_SERVER['REMOTE_ADDR'];
				echo "Message sent";
				}
				else
				{
					echo "No genuine Message Found";
				}
	}
	else
	{
		echo "Email ID Validation Failed";
	}
	}
}
else 
{
  die('You do not have permission to access this page directly. Contact Manu Mohan. If you think it is an error, send a mail to manumohantkd@gmail.com manually');
}

?>