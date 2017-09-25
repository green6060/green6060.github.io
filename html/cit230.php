<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CIT 230 | LiveSurfLove.com </title>
    <link rel="stylesheet" type="text/css" href="../cssfiles/body.css">
    <link rel="stylesheet" type="text/css" href="../cssfiles/flex-nav.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width">
    <script>
        $(document).ready(function(){
            //jQuery code goes here
        })
    </script>
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
            <h1 class="center">CIT 230</h1>
            <div>
                <div class="dropdown">
                    <button class="dropbtn">Homework Assignments</button>
                    <div class="dropdown-content">
                        <a href="/html/teachingpresentationux.php">Teaching Presentation</a>
                        <a href="/html/designprinciplesasm.php">Design Principles and Assesment</a>
                        <a href="/html/mobile_compare.php">Mobile Website Comparison</a>
                        <a href="/html/visitor_analysis_persona.php">Visitor Analysis Persona</a>
                        <a href="/html/weatherpageplan.php">Weather Page Planning Doc</a>
                        <a href="/html/franklinweatherpage.php">Franklin Weather Page</a>
                        <a href="/responsive_media/index.html">National Park Home Page</a>
                        <a href="/jsonweather/index.php">Weather Page Current Location</a>
                    </div>
                </div>
            </div>
            <!-- Page Content -->
            <p class="center">Keeping the Earth Clean, and our Families Happy</p>
        </main>

        <footer id="foot" style="list-style-type:none;">
            <?php
include($_SERVER['DOCUMENT_ROOT'].'/html/modules/footer.php');
?>
                <script src="../javascript/lastupdate.js"></script>
        </footer>
    </div>
    <script src="../jsonweather/scripts/jquery-3.0.0.min.js"></script>
</body>

</html>
