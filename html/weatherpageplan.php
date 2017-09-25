<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Weather Page | LiveSurfLove.com </title>
    <link rel="stylesheet" type="text/css" href="../cssfiles/body.css">
    <link rel="stylesheet" type="text/css" href="../cssfiles/flex-nav.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width">
</head>



<body>
    <script>
        function topNavButton() {
            document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
        }
    </script>
    <div class="center" id="wrapper">
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
            <div id="container">
                <div id="webbanner">
                    <h1>Weather Page</h1>
                </div>
                <!-- Page Content -->

                <p class="font">1 Create a web page for all components of this assessment.</p>
                <p class="font">2 Name the file following the web naming rules and store it in your web site.</p>
                <p class="font">3 Include meaningful headings for each of the sections: Purpose Statement, Audience Description, Persona, Sketches (wireframes) and Peer Review.</p>
                <p class="font">4 Add the appropriate content directly beneath the related heading.</p>
                <p class="font">5 Post the web page to your web site.</p>
                <p class="font">6 Place a link to the planning page in your temporary home page.</p>
                <p class="font">7 Test the link from your home page to the planning page in the browser from your web site to insure everything works.</p>


                <h2>Purpose Statement</h2>
                <p class="font">To provide meaningful, localized, weather information to the user.</p>
                <h2>Audience Description</h2>
                <p class="font">This site can be used by a variety of age groups, although especially for those of an older age group, specifically the middle age working class. Although it wouldn't detract from a younger age group by design, the younger generation would rely more on phone apps, espcially on an IOS device or an android. This is a web based application, without mobile application, for now. Typcially a target audience for this site would be at home, possibly alone, laying in bed at night checking the weather for the next day's commute to work or otherwise. The visitor expects the service to inform them accurately of the coming day's weather forecast, in their area.</p>
                <h2>Persona</h2>
                <p class="font">The typical middle age working class is not as technologically savvy, and at times is not as familiar with IOS devices or their applications. The compatibility of the web-application will be more desireable, considering the older generation is more familiar with a browser-based experience. Examples include weather based applications attatched to familiar websites like Yahoo or Google.</p>
                <h2>Sketches (Wireframes)</h2>
                <p class="font">
                    <img alt="ipafra" src="../images/ipadfranklin.jpg">
                </p>
                <p class="font">
                    <img alt="iphfra" src="../images/iphonefranklin.jpg">
                </p>
                <p class="font">
                    <img alt="brwfra" src="../images/browserfranklin.jpg">
                </p>
                <br>
                <h2>Peer Review</h2>
                <p class="font">
                    The peer review I recieved from my classmates mainly focused on the images (which I've since corrected). During my first draft of the site, I had trouble making the images centered and rotated properly, and one of my images wasn't showing itself properly (due to pathway issues). On a positive note, the main content of the page was well recieved. After cleanup of the images was completed, the website was complimented by my peers and given the thumb of approval!
                </p>

                <p>
                    <center>Keeping the Earth Clean, and our Families Happy</center>
                </p>
            </div>
        </main>

        <footer>
            <?php
include($_SERVER['DOCUMENT_ROOT'].'/html/modules/footer.php');
?>
                <script src="../javascript/lastupdate.js"></script>
        </footer>
    </div>
    <script src="../jsonweather/scripts/jquery-3.0.0.min.js"></script>
</body>

</html>
