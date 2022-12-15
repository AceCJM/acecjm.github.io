<?php

$email = $_POST["email"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "c.miller35@share.epsb.ca";
$mail->Password = "oehrkovdvflhzayt";

$mail->setFrom($email, $name);
$mail->addAddress("dave@example.com", "Dave");

$mail->Subject = 'Thank you for submiting a contact request';
$mail->Body = 'You request has been added to the queue and will be be proccessed soon. Thank you for consdering our service';

$mail->send();

header("Location: sent.html");