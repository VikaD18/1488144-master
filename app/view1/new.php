<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$mail = $_POST['mail'];
	echo $name."<br />".$surname."<br />".$mail."<br />";
} else { 
	header("Location: ../new.php"); 
}
function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value); 
    return $value;
}
function check_length($value = "", $min, $max) {
    $result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
    return !$result;
}
$name = clean($name);
$surname = clean($surname);
$mail = clean($mail);

if(!empty($name) && !empty($surname) && !empty($mail)) {
    $mail_validate = filter_var($mail, FILTER_VALIDATE_EMAIL); 
if(check_length($name, 2, 25) && check_length($surname, 2, 50)  && $mail_validate) {
        echo "Спасибо за регистрацию";
    }
	else { 
        echo "Введенные данные некорректные";
    }
} else { 
    echo "Заполните пустые поля";
}
?>