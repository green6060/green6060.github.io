<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Greenville Weather | LiveSurfLove.com </title>
    <link rel="stylesheet" type="text/css" href="../cssfiles/flex-box.css">

    <link rel="stylesheet" type="text/css" href="../cssfiles/flex-nav.css">

    <link rel="stylesheet" type="text/css" href="../cssfiles/body.css">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width">
</head>

<body>
    <!--------------------------------------------------------------------------------------------------------------------------------------------=Web Head=--------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <header>
        <?php
            include($_SERVER['DOCUMENT_ROOT'].'/html/modules/header.php');
            ?>
    </header>
    <!--------------------------------------------------------------------------------------------------------------------------------------------=Navigation Bar=--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <nav>
        <?php
            include($_SERVER['DOCUMENT_ROOT'].'/html/modules/weathernav.php');
            ?>
    </nav>
    <!--------------------------------------------------------------------------------------------------------------------------------------------=City Info=--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <main>
        <div class="row">
            <h1 class="flexCity">Greenville, South Carolina</h1>
            <h2 class="flexZip">29601</h2>
            <h2 class="flexSummary">Summary: Afternoon Thunderstorms</h2>
            <div class="center">
                <img class="center" id="thuns" src="../images/thunderstorms.png">
            </div>
        </div>

        <!--------------------------------------------------------------------------------------------------------------------------------------------=Hourly Temp Side Bar=--------------------------------------------------------------------------------------------------------------------------------------------------------------->
        <div class="wrapper">
            <div class="aside aside-1">
                Hourly Temperature
                <ul>
                    <li>12 AM: 67</li>
                    <li>1 AM: 67</li>
                    <li>2 AM: 69</li>
                    <li>3 AM: 69</li>
                    <li>4 AM: 69</li>
                    <li>5 AM: 70</li>
                    <li>6 AM: 69</li>
                    <li>7 AM: 72</li>
                    <li>8 AM: 74</li>
                    <li>9 AM: 77</li>
                    <li>10 AM: 79</li>
                    <li>11 AM: 81</li>
                    <li>12 PM: 84</li>
                    <li>1 PM: 86</li>
                    <li>2 PM: 88</li>
                    <li>3 PM: 90</li>
                    <li>4 PM: 90</li>
                    <li>5 PM: 85</li>
                    <li>6 PM: 83</li>
                    <li>7 PM: 79</li>
                    <li>8 PM: 74</li>
                    <li>9 PM: 70</li>
                    <li>10 PM: 68</li>
                    <li>11 PM: 66</li>
                </ul>
            </div>


            <!--------------------------------------------------------------------------------------------------------------------------------------------=Miscellaneous Weather Info Box=----------------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="main">
                <h3>Precipitation: 70</h3>
                <h3>Wind: 15-20</h3>
                <h3>Direction: West</h3>
                <h3>Longitude: -82.362997 </h3>
                <h3>Latitude: 34.836902 </h3>
                <h3 id="highTemp">84 High</h3>
                <h3 id="lowTemp">Low 55</h3>
            </div>
            <!--------------------------------------------------------------------------------------------------------------------------------------------=Weekly Forecast Box=---------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="aside aside-2">
                Weekly Forecast
                <ul>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                    <li>Sunday</li>
                </ul>
            </div>
        </div>
            <!--------------------------------------------------------------------------------------------------------------------------------------------=Wire Sketches=--------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="flexImgBox">
                <div>
                    <img class="imgsize" alt="iphfra" src="../images/iphonefranklin.jpg">
                </div>
                <div>
                    <img class="imgsize" alt="ipafra" src="../images/ipadfranklin.jpg">
                </div>
                <div>
                    <img class="imgsize" alt="brwfra" src="../images/browserfranklin.jpg">
                </div>
            </div>
            <p class="center">Keeping the Earth Clean, and our Families Happy</p>

    </main>
    <!--------------------------------------------------------------------------------------------------------------------------------------------=Footer Box=------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

    <footer>
        <?php
            include($_SERVER['DOCUMENT_ROOT'].'/html/modules/footer.php');
            ?>
            <script src="../javascript/lastupdate.js"></script>
    </footer>
    <script src="../jsonweather/scripts/jquery-3.0.0.min.js"></script>
</body>

</html>
