<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../cssfiles/body.css">
    <link rel="stylesheet" type="text/css" href="../cssfiles/flex-nav.css">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Visitor Analysis and Persona</title>
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
            <h1>Visitor Analysis and Persona</h1>
            <!-- ***********************************************
Use the web site you think did the best job of meeting visitor needs during your 24 hour mobile browsing experience.
************************************************* -->
            <h2>Apothecary87</h2>

            <p>URL: www.apothecary87.co.uk
            </p>

            <section id="analysis">

                <h2>Visitor Analysis</h2>
                <!--
                -Who is using the site? (age, education, income, family status, experience on the topic)
                -What is he or she doing when they visit the website?(Sitting at home, commuting, eating, at library)
                -What actions or content is the visitor wanting?(Billions of wanted menial tasks.)
                -Where is the visitor located? (Driving, need hospital. How far is local airport/hotel... etc)
                -When is the site being visited? (It's 9 PM and I just broe my leg, Its 1AM, the pizza guy is here and I don't have Cash, etc.)
                -Persona, Audience Breakdown, Purpose of the site.
                -->
                <p>After observing the site, it is clear that this site is primarily being used by millinals, that is, to focus on anyone between the ages of 18 to 30. The style of product is focused on style more popular amoung that age group. Often those who would be considered an appropriate audience for this site would range anywhere from senior high school students, to college, to middle aged men. Typcially a target audience for this site would be at home, possibly alone, laying in bed at night or simply bored, cruzing the website for something to boost their social status. The visitor expects products that make them more socially accepted or even desired. The visitor wants the easiest access to the nicest products at the cheapest price.</p>

                <!--Put the screenshot in the img element below-->
                <figure>
                    <img alt="manliness2" src="../images/manliness2.png" width="300" height="500">
                </figure>
            </section>
            <section id="persona">
                <h2>Persona</h2>
                <!--Add paragraphs to address the items in the persona reading to build a persona for this site
What is the purpose of the site?
What are the goals of the site?

Personal
What is the age of your person?
What is the gender of your person?
What is the highest level of education this person has received?
Professional

How much work experience does your person have?
What is your person’s professional background?
Why will they come to the site? (User needs, interests, and goals)
Where (or from whom) else is this person getting information about your issue or similar programs or services?
When and where will users access the site? (User environment and context)
Technical

What technological devices does your person use on a regular basis?
What software and/or applications does your person use on a regular basis?
Through what technological device does your user primarily access the web for information?
How much time does your person spend browsing the web every day?

What is your person motivated by?
What are they looking for?
What is your person looking to do?
What are his needs?-->
                <p>The typical Millenial is technology savvy, and very familiar with social media. The sleek design of this particular website is reminesent of the designs of sites such as twitter, pintrest, and others like them. More importantly, the style of the design is especially appealing to the large following of people who are becoming more interested in old-fashion style. Hipsters, Indy's, Granolas, etc are all groups that would appeal to this kind of product and design. The pictures on the website appeal to a sense of pride, held by those groups, in appearance, specifically of the unique and the original, the old-fashioned and the refined.</p>

                <!--Put the image of the persona in the img element below-->
                <figure>
                    <img alt="manliness3" src="../images/manliness3.PNG" width="300" height="500">
                </figure>
            </section>

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
