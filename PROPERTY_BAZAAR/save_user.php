<?php

$dbServername = "127.0.0.1:3308";
$dbUsername = "root";
$dbPassword = "";
$dbName = "ajax-tutorial_db";

try{

    $dsn = "mysql:host=".$dbServername.";dbname=".$dbName;
    $pdo = new PDO($dsn, $dbUsername, $dbPassword);

}catch(PDOException $e){

    echo $e->getMessage();
    die();

}

    if($_SERVER['REQUEST_METHOD'] == "POST"){

        if(isset($_POST['txtNames']) && isset($_POST['txtDates']) && $_POST['txtMail']){

            $names = htmlspecialchars($_POST['txtNames']);
            $date = htmlspecialchars($_POST['txtDates']);
            $mail = htmlspecialchars($_POST['txtMail']);

            $sqlSave = "INSERT INTO people(people_name, birth_date, email_address) 
                        VALUES(:names, :bday, :mail)";
        
            $sql = $pdo->prepare($sqlSave);

            $sql->execute([":names"=>$names, ":bday"=>$date, ":mail"=>$mail]);

            header("Location: view.php");
        }else{

            header("Location: view.php");
        }

        
    }


    