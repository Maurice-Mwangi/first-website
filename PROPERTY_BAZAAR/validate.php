<?php

    // echo "Hello";

    //connect to the database

    $dbServername = "127.0.0.1:3308";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "ajax-tutorial_db";

    try{
        $dsn = "mysql:host=".$dbServername.";dbname=".$dbName;
        $pdo = new PDO($dsn, $dbUsername, $dbPassword);
    }catch(Exception $e){
        echo $e->getMessage();
    }

    
    if(!empty($_GET['mail'])){
        $mail = htmlspecialchars($_GET['mail']);
        if(filter_var($mail, FILTER_VALIDATE_EMAIL)){
            $sqlState = "SELECT * FROM people WHERE email_address = :mail";
            $sql = $pdo->prepare($sqlState);
            $sql->bindParam(":mail", $mail);
            $sql->execute();
            if($sql->fetch(PDO::FETCH_ASSOC) > 0){
                echo "the email already exists";
            }else{
                echo null;
            }
        } else {
            echo "email format incorrect";
        }
        
    }