<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../cssfiles/body.css">
    <link rel="stylesheet" type="text/css" href="../cssfiles/flex-nav.css">
    <title>Teaching Presentations UX | LiveSurfLove.com </title>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width">
</head>



<body>
    <script>
        function topNavButton() {
            document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
        }
    </script>
    <div id="wrapper">

        <header id="webBanner">
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
            <br>
            <h1 id="teachpreshead">Teaching Presentations UX</h1>
            <div class="container">
                <h2>User Experience in the IT Industry</h2> “User experience (UX) refers to a person's total experience using a particular product, system or service.” -Wikipedia
                <img id="uximg" src="../images/ux.png" width="400" hight="400">
            </div>
            <p>Keeping the Earth Clean, and our Families Happy</p>
        </main>
        <footer id="foot" style="list-style-type:none;">
            <?php
include($_SERVER['DOCUMENT_ROOT'].'/html/modules/footer.php');
?>
        </footer>
    </div>
    <script src="../jsonweather/scripts/jquery-3.0.0.min.js"></script>
</body>

</html>
