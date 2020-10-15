<?php
header("Content-Type: text/html; charset=utf-8");
$type = htmlspecialchars($_POST["type"]);
$size = htmlspecialchars($_POST["size"]);
$region = htmlspecialchars($_POST["region"]);
$floor = htmlspecialchars($_POST["floor"]);
$budget = htmlspecialchars($_POST["budget"]);
$how = htmlspecialchars($_POST["how"]);
$tel = htmlspecialchars($_POST["phone"]);

$check = is_array($_POST['check']) ? $_POST['check'] : array();
$check = implode (', ', $check );

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "anife.om@gmail.com, " ;
$myemail .= "Olga.kap@mail.ru";

$tema = "Тема письма админу";
$message_to_myemail = "Текст письма:
<br><br>
Форма калькулятора Dubai<br>
тип недвижимости: $type<br>
размер: $size<br>
район: $region<br>
этаж: $floor<br>
бюджет: $budget<br>
Какая оплата: $how<br>
Номер телефона: $tel<br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: Dubai <dubai-apartments.ru> \r\n Reply-To: Dubai \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

$myemail = $email;
$token = "1381594311:AAGJbll-tIiOOuBK7Ksbcnag-MQEO8S3jK0";
$chat_id = "-358707085";

$arr = array(
'Форма' => 'Калькулятор',
'тип недвижимости' =>$type,
'размер' => $size,
'район' => $region,
'этаж' => $floor,
'бюджет' => $budget,
'Какая оплата' => $how,
'Номер телефона' => $tel,
'Источник (ссылка)' => $refferer
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

mail($myemail, $tema, $message_to_myemail, "From: Dubai <dubai-apartments.ru> \r\n Reply-To: Dubai \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);


?>
