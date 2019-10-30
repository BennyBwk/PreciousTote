<?php
if (isset($_POST['email']) && $_POST['email'] == '') {
    $to = "benny@alpsoft-tech.com";

    $name = $_POST['nameTB'];
    $email = $_POST['emailTB'];
    $enquiryType = $_POST['enquiryType'];
    $messageText = $_POST['messageTB'];

    $subject = "[The 卡 Artistry] New Enquiry - ". $enquiryType;

    $body = "Enquiry from ".$name."\r\nEmail Address: ".$email."\r\n\r\nMessage:\r\n".$messageText;

    if ($_POST['nameTB'] == '' || $_POST['emailTB'] == '' || $_POST['enquiryType'] == '' || $_POST['messageTB'] == '') {
        echo "<script type='text/javascript'>alert('We need your information to contact you! Please fill up the form!');window.location.href='contactus.html';</script>";
    } else {
        if (mail($to, $subject, $body)) {
            echo "<script type='text/javascript'>alert('We have received your enquiry and we will get back to you shortly!');window.location.href='gallery.html';</script>";
        } else {
            echo "<script type='text/javascript'>alert('Submission failed! Please try again later!');window.location.href='contactus.html';</script>";
        }
    }
}
?>