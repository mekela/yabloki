<?
	
	if (isset($_GET['action']) && $_GET['action']=='send_form'){
		foreach ($_GET as $key => $val) {
			${$key} = $val;
		}
		
		$to  = "contact@fuga-tech.com" ;		
		$from  = "contact@fuga-tech.com" ;		

		
							
		$subject = $form_name." \r\n"; 
		
		if($action_type=='form_feedback'){
		
			$emessage = "
			<html>
				Name:".$uname."<br/>Phone:".$phone."<br/>Email:".$email."<br/>Company:".$company."<br/>Message:".$message."
			</html>";
		}						
			$headers  = "Content-type: text/html; charset=utf-8 \r\n";
			$headers .= "From: ".$from."\r\n";
								
			mail($to, $subject, $emessage, $headers);
			
			echo 'sended';
	}
?>