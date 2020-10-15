<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$mes = htmlspecialchars($_POST["message"]);

$check = is_array($_POST['check']) ? $_POST['check'] : array();
$check = implode (', ', $check );

$radio = htmlspecialchars($_POST["messanger"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "anife.om@gmail.com, " ;
$myemail .= "Olga.kap@mail.ru";

$tema = "Тема письма админу";
$message_to_myemail = "Текст письма:
<br><br>
Имя: $name<br>
Телефон: $tel<br>
Мессенджер: $radio<br>
Email: $email<br>
Текст сообщения: $mes<br>
";




mail($myemail, $tema, $message_to_myemail, "From: Sitename <dubai-apartments.ru> \r\n Reply-To: Restad \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$myemail = $email;


$token = "1381594311:AAGJbll-tIiOOuBK7Ksbcnag-MQEO8S3jK0";
$chat_id = "-358707085";


$arr = array(
  'Имя' => $name,
  'Телефон' => $tel,
'Мессенджер' => $radio,
'Email' => $email,
'Текст сообщения' => $mes
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");



mail($myemail, $tema, $message_to_myemail, "From: WAYUP <dubai-apartments.ru> \r\n Reply-To: WAYUP \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);


?>
