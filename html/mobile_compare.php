<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../cssfiles/body.css">
    <link rel="stylesheet" type="text/css" href="../cssfiles/flex-nav.css">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Mobile Site Comparison</title>
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
            <h1>Mobile Site Comparison</h1>
            <!-- ***********************************************
Refer to the Mobile Compare and Contrast Assessment for details of what should be included in this page.

Add your textual explanations to the paragraphs. Add more if needed.
************************************************* -->

            <section id="good_site">
                <h2>Apothecary87</h2>

                <p>URL: www.apothecary87.co.uk
                </p>
                <h3>Finding Content</h3>
                <p>I found that finding content in the site was a breeze. The developers provided a simple, clean, menu organizing different hair care products and accesories they were selling.</p>
                <h3>Clarity of text, images and media</h3>
                <p>Text, images, and media all pointed back simply to the purpose of the website, making it clear, crisp surfing. Everything was done simply and cleanly.</p>
                <h3>Navigation</h3>
                <p>As I navigated through the different product categories, each menu item/link took me to exactly what I was expecting, and provided for easy navigation back.</p>
                <h3>Colors and Layout</h3>
                <p>Products were laid out beautifully within the limited space on the screen, typically in a linear fashion, allowing for easy scrolling.</p>
                <h3>Likes and Dislikes</h3>
                <p>I very much enjoyed the site as a whole, particularly because they appealed to the male audience very well, with phrases like "Be the Maliest Man You Can Be" and other similar repititions of percieved "Manliness". </p>
                <!--Put the screenshot in the img element below-->
                <figure>
                    <img alt="manliness" src="../images/Manliness.PNG" width="300" height="500">
                </figure>
            </section>
            <section id="bad_site">
                <h2>Mile High Comics</h2>

                <p>URL: www.milehighcomics.com
                </p>
                <h3>Finding Content</h3>
                <p>Finding Content was a nightmare... The page was built around 5 input boxes, all misaligned. Below that was an attempt to display book cover images, all crammed together side by side, with no padding.</p>
                <h3>Clarity of text, images and media</h3>
                <p>Clarity was next to zero. It was like driving along a foggy river bank, trying to find a local gas station. The page was crammed with so many buttons and tiny text, I could hardly see anything.</p>
                <h3>Navigation</h3>
                <p>They had multiple systems of organization, all crammed on the home page. On the left, they featured a long bar of links branching off anywhere from shopping to random search bars. On the left, they attempted to organize books in a system they named the "Bronze, Silver, Golden Age system", catagorizing things by year of production... horrible.</p>
                <h3>Colors and Layout</h3>
                <p>Bright light blue buttons, yellow and red text and links, and an HTML generic light magenta main block, all plotted against a black background. I seriously don't think these guys colored anything outside of HTML generic color calls.</p>
                <h3>Likes and Dislikes</h3>
                <p>A part of me hopes this site was made as a joke. The other part of me knows better. Just look below.</p>
                <!--Put the screenshot in the img element below-->
                <figure>
                    <img alt="horrible" src="../images/horrible.PNG">
                </figure>
            </section>

        </main>
        <footer>
            <?php
include($_SERVER['DOCUMENT_ROOT'].'/html/modules/header.php');
?>
                <script src="../javascript/lastupdate.js"></script>
        </footer>
    </div>
    <script src="../jsonweather/scripts/jquery-3.0.0.min.js"></script>
</body>

</html>
