<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Franklin Weather | LiveSurfLove.com </title>
    <link rel="stylesheet" type="text/css" href="../cssfiles/body.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width">
</head>

<body>
    <!--JS to enable menu-icon replacement functionality for responsive shrinking-->
    <script>
        function topNavButton() {
            document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
        }
    </script>
<!--------------------------------------------------------------------------------------------------------------------------------------------=Web Head=--------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <header>
        <?php
        include($_SERVER['DOCUMENT_ROOT'].'/html/modules/header.php');
        ?>
    </header>
<!--------------------------------------------------------------------------------------------------------------------------------------------=Navigation Bar=--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <nav>
        <?php
        include($_SERVER['DOCUMENT_ROOT'].'/html/modules/nav.php');
        ?>
    </nav>
<!--------------------------------------------------------------------------------------------------------------------------------------------=City Info=--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <main>
        <div class="row">
            <h1 class="center">Franklin, Idaho</h1>
            <h2 class="center">83237</h2>
            <h2 class="center">Summary: Sunny</h2>
            <div class="center">
                <img class="center" id="sun" src="../Images/sun.jpg">
            </div>
        </div>

<!--------------------------------------------------------------------------------------------------------------------------------------------=Hourly Temp Side Bar=--------------------------------------------------------------------------------------------------------------------------------------------------------------->

            <div class="col-3 menu">
                <div class="aside">
                    Hourly Temperature
                    <ul id="hourlytemp">
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
            </div>
<!--------------------------------------------------------------------------------------------------------------------------------------------=Miscellaneous Weather Info Box=----------------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="col-6">
                <h3>Precipitation: 0</h3>
                <h3>Wind: 1-5</h3>
                <h3>Direction: Southwest</h3>
                <h3>Longitude: -111.803757 </h3>
                <h3>Latitude: 42.011902 </h3>
                <h3 id="hightemp">90 High</h3>
                <h3 id="lowtemp">Low 66</h3>
            </div>
<!--------------------------------------------------------------------------------------------------------------------------------------------=Weekly Forecast Box=---------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="col-3 menu">
                <div class="aside">
                    Weekly Forecast
                    <ul id="hourlytemp">
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
        <div>
            <div>
                <p>
                    <img class="imgsize" alt="manliness" src="../images/iphonefranklin.jpg">
                </p>
            </div>
            <div>
                <p>
                    <img class="imgsize" alt="manliness" src="../images/ipadfranklin.jpg">
                </p>
            </div>
            <div>
                <p>
                    <img class="imgsize" alt="manliness" src="../images/browserfranklin.jpg">
                </p>
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

</body>

</html>
