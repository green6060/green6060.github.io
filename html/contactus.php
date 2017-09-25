<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Contact Us | LiveSurfLove.com </title>
    <link rel="stylesheet" type="text/css" href="../cssfiles/projectstyling.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width">
</head>



<body>
        <header>
            <?php
            include($_SERVER['DOCUMENT_ROOT'].'/html/modules/header.php');
            ?>
        </header>

        <nav>
            <?php
            include($_SERVER['DOCUMENT_ROOT'].'/html/modules/nav.php');
            ?>
        </nav>

        <main>

            <div id="titlestuff">
                <img id="titleimg" src="../images/navbackground.png" alt="navback" height="75" width="100%">

                <h1 id="title">Contact Us</h1>

            </div>
            <ul id="contactus">
                <li>Please feel free to contact us about anyting you'd like, at randomemail@byui.edu</li>
                <li>Or by phone at 909 123 4567</li>
                <li>You can also bring your questions, concerns, and otherwise in person, to our headquarters, located in 1234 address ave. </li>
            </ul>

        </main>
        <footer>
            <?php
include($_SERVER['DOCUMENT_ROOT'].'/html/modules/footer.php');
?>
                <script src="../javascript/lastupdate.js"></script>
        </footer>
    <script src="../jsonweather/scripts/jquery-3.0.0.min.js"></script>
</body>

</html>
