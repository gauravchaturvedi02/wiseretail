<?php

if($_POST["submit"]) {
    $recipient="hello@wiseretail.com";
    $subject="Wiseretail email message";
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["message"];
    $mobile=$_POST['mobile'];

    $mailBody="Name: $sender\nEmail: $senderEmail\nMobile: $mobile\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}
?>
<

  