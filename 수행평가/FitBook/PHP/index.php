<?php 
    include("connection.php");
    include("login.php")
    ?>
<html>
    <head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../CSS/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet">
    </head>
    <body>
        
        <div id="form">
            <h1><i>Login</i></h1>
            <form method="post" name="form" action="login.php" onsubmit="return isvalid()" method="POST">
                <label>Username: </label>
                <input type="text" id="user" name="user"></br></br>
                <label>Password: </label>
                <input type="password" id="pass" name="pass"></br></br>
                <input type="submit" id="btn" value="Login" name = "submit"/>
            </form>
        </div>
        <script>
            $(function(){
                if("")
            });
        </script>
    </body>
</html>