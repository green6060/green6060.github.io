<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Home Page | LiveSurfLove.com </title>
    <link rel="stylesheet" type="text/css" href="cssfiles/projectstyling.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width">
</head>


<body>

    <header id="flexhead">
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

            <h1 id="title">Home Page</h1>
        </div>
        <div id="flex-video">
            <div class="aside"></div>
            <iframe src="https://www.youtube-nocookie.com/embed/KFYDlTr3Lws" frameborder="0" allowfullscreen>
            </iframe>
            <div class="aside"></div>
        </div>
        <!-- News Articles -->

        <div id="titlestuff">
            <img id="newsimg" src="../images/navbackground.png" alt="navback" height="75" width="100%">

            <h1 id="newstitle">News Articles</h1>
        </div>

        <ul id="newsbox1">

            <li>
                <a id="article1" href="http://www.channel3000.com/news/new-program-helps-wisconsin-dairy-farms-be-more-environmentally-friendly/40439252">
                    <img src="/images/article1.jpg" alt="Article 1">
                </a>
            </li>

            <li>
                <a id="article2" href="http://news.xinhuanet.com/english/2016-07/09/c_135499602.htm">
                    <img src="/images/article2.jpg" alt="Article 2">
                </a>
            </li>

            <li>
                <a id="article3" href="https://tech.co/top-25-environmentally-friendly-countries-2016-06">
                    <img src="/images/article3.jpg" alt="Article 3">
                </a>
            </li>
        </ul>
        <ul id="newsbox2">
            <li>
                <a id="article4" href="http://www.huffingtonpost.com/lisa-kaas-boyle/jack-johnson-takes-out-th_b_7554806.html">
                    <img src="/images/article4.jpg">
                </a>
            </li>

            <li>
                <a id="article5" href="http://www.reviewjournal.com/life/home-and-garden/chalk-based-paints-are-easy-use-and-environmentally-friendly">
                    <img src="/images/article5.jpg" alt="Article 5">
                </a>
            </li>

            <li>
                <a id="article6" href="http://www.therapidian.org/placematters-local-food-important">
                    <img src="/images/article6.jpg" alt="Article 6">
                </a>
            </li>
        </ul>
    </main>

    <footer>

        <?php
        include($_SERVER['DOCUMENT_ROOT'].'/html/modules/footer.php');
        ?>

            <script src="javascript/lastupdate.js"></script>

    </footer>

    <script src="/jsonweather/scripts/jquery-3.0.0.min.js"></script>

    <script src="/javascript/preventDefault.js"></script>



</body>

</html>
