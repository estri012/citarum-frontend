<?php
session_start();
$captcha = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, 5); //bikin string acak 5 karakter
$_SESSION['captcha'] = $captcha; //set session namanya captcha, isinya variabel $captcha

$pic = imagecreate(80, 40); //ukuran kotak width,length
$box_color = imagecolorallocate($pic, 61, 108, 83); //warna box
$text_color = imagecolorallocate($pic, 255, 255, 255); //warna tulisan
imagefilledrectangle($pic, 0, 0, 50, 20, $box_color);
imagestring($pic, 10, 3, 3, $captcha, $text_color);
imagejpeg($pic);
?>