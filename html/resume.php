<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>My Resume | LiveSurfLove.com </title>
    <link rel="stylesheet" type="text/css" href="../cssfiles/resumebody.css">
    <link rel="stylesheet" type="text/css" href="../cssfiles/flex-nav.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width">
</head>


<body>


    <main>

        <div class="wrapperout">

            <nav>
                <?php
                include($_SERVER['DOCUMENT_ROOT'].'/html/modules/nav.php');
                ?>
            </nav>

            <div class="wrapresume">

                <div class="myresumebox">

                    <h2>Dallas James Parker</h2>
                    <p>175 west 5th South, Rexburg ID, Apt #308</p>
                    <p>(909) 247 8179</p>
                </div>

                    <div class="responcompatinfo">
                        <h1>Experience</h1>
                        <p>RESPONSIVE CODING: Flexbox Implimentation, CSS Grid Systems, Media Queries</p>
                        <p> COMPATIBLE CODING: Cross-Browser compatability</p>
                    </div>

                    <div class="mobilefirstinfo">
                        <p> Designed With Mobile-First Practices</p>
                    </div>

                    <div class="languageinfo">
                        <h2> Languages:</h2>
                        <p> Experienced in HTML, CSS, and Javascript.</p>
                        <h2> Practice: </h2><p>Clean Code Practice, Modularized, Commented.</p>
                    </div>

            </div>
        </div>

    </main>

    <footer>
        <?php
                include($_SERVER['DOCUMENT_ROOT'].'..//html/modules/footer.php');
                ?>
            <script src="javascript/lastupdate.js"></script>
    </footer>

</body>

</html>
