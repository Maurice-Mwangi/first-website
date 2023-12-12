<?php
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

        $sqlFetch = "SELECT * FROM people";

        $sql = $pdo->prepare($sqlFetch);
        $sql->execute();

        ;
    ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="index.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View</title>
</head>
<body>
    <table style="border: 1; background-color: rgb(232, 255, 232);">
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>E-mail</th>
        </thead>
        <tbody>
            <?php
                while($row = $sql->fetch(PDO::FETCH_ASSOC)){            
            ?>
                <tr>
                    <td><?= $row['people_id'] ?></td>
                    <td><?= $row['people_name'] ?></td>
                    <td><?= $row['birth_date'] ?></td>
                    <td><?= $row['email_address'] ?></td>
                </tr>
            <?php
                }
            ?>
        </tbody>
    </table>
</body>
</html>