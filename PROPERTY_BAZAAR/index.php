<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="index.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <form action="save_user.php" method="post" onsubmit="checkEntry()">

            <div class="form-input">
                <h1>Your Details</h1>
            </div>

            <div class="form-input error">
            </div>
            
            <div class="form-input">
                <div class="labels">
                    Names:
                </div>
                <div class="inputs">
                    <input type="text" name="txtNames" id="name">
                </div>
            </div>

            <div class="form-input">
                <div class="labels">
                    D.O.B:
                </div>
                <div class="inputs">
                    <input type="date" name="txtDates" id="date">
                </div>
            </div>

            <div class="form-input">
                <div class="labels">
                    E-mail Address:
                </div>
                <div class="inputs">
                    <input type="text" name="txtMail" id="mail" onblur="checkMail(this.value)">
                </div>
            </div>

            <div class="form-input">
                <input type="submit" name="btnSubmit" id="submit">
            </div>
        </form>
    </div>
    <script type="text/javascript" src="index.js"></script>
</body>
</html>