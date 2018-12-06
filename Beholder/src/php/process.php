<?php
$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST["email"];
 
$EmailTo = "dima.zip.golinko@gmail.com";
$Subject = "Новая заявка";
 
// prepare email body text
$Body .= "Имя: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Телефон: ";
$Body .= $phone;
$Body .= "\n";
 
$Body .= "Почта: ";
$Body .= $email;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "От:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>