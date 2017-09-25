<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../cssfiles/body.css">
    <link rel="stylesheet" type="text/css" href="../cssfiles/flex-nav.css">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Design Principle Assessment</title>
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
            <h1>Design Principles in Mobile Sites</h1>
            <!-- ***********************************************
Each design principle needs four items:
1- The principle's name and the team member responsible for it.
2- An image (screenshot) of the mobile browser screen showing the design principle in use.
3- The site name used in the picture
4- A discussion of how the design principle is exemplified in the picture. Be detailed!
************************************************* -->

            <h2>Proximity &mdash; Austin Griggs</h2>
            <img src="../images/Screenshot_20160505-140046.png" hight="150" width="150" alt="LolProximity">
            <p>
                LeagueofLegends.com
            </p>
            <p>
                This Image/Site has excllent Proximity. Starting at the top we have the navigation bar grouped together. Moving down we have a simple veiw of a promotion that is grouped together using the large image and the border on the bottom that creates a nice divide between information. Below that we see different news articles all grouped together creating good proximity.
            </p>

            <h2>Alignment &mdash; Bryce Eberhard</h2>
            <img src="../images/IMG_1258.JPG" alt="facebookalignment">
            <p>
                Facebook.com
            </p>
            <p>
                Facebook is using good use of alignment for their front page. The aligned their left side so their logo in the top left corner aligns withsome of the many benefits of using Facebook down below. On the right side they align the Sign Up with all the info you need to put in to create a new facebook account. Over all this page uses alignment ot its full use to make their page look more appeasing.
            </p>

            <h2>Repetition &mdash; Zerin Hollingshead </h2>
            <img src="../images/imdb.jpg" alt="imdbRepitition">
            <p>
                Imdb.com
            </p>
            <p>
                Repetition is the consistant use of shapes or designs that keep your website organized and pretty much the same throughout. This screenshot shows breifly the design of rectangles. If you keep scrolling through imdb.com it looks similar throughout the entire site. There are rectangular boxes that separate topics and show the newest post or article. Each box is different sized and has different information, but the layout is the same. You can't see much of the reptetion in this screenshot, but if you keep scrolling down the page, you will see the organized look of the page.
            </p>

            <h2>Contrast &mdash; Steve Ellison</h2>
            <img src="../images/Screenshot_2016-05-06-14-06-59.png" height="250" width="200" alt="bkContrast">
            <p>
                BurgerKing.com
            </p>
            <p>
                This exemplifies good contrast with the orange, browns, and whites. It is visually appealing, draws attention to appropriate parts of the page, and reflects the brand it is advertising.
            </p>

            <h2>Typography &mdash; Dallas Parker</h2>
            <img src="../images/typography.png" height="200" width="300" alt="typography">
            <p>
                Fontsinuse.com
            </p>
            <p>
                This website illustrates how different types of typography can be used in many different industries to accomplish different goals. Some fonts vary greatly in useability, defpending on the type of background.
            </p>

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
