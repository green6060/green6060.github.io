<?php
$json_string = file_get_contents("http://api.wunderground.com/api/8a74efae350873f8/geolookup/conditions/q/39.763908,-89.670832.json");
$parsed_json = json_decode($json_string);
$city = $parsed_json->{'location'}->{'city'};
$state = $parsed_json->{'location'}->{'state'};
$weather = $parsed_json->{'current_observation'}->{'weather'};
$temp_f = $parsed_json->{'current_observation'}->{'temp_f'};
$temp_c = $parsed_json->{'current_observation'}->{'temp_c'};
$wind_mph = $parsed_json->{'current_observation'}->{'wind_mph'};
$relative_humidity = $parsed_json->{'current_observation'}->{'relative_humidity'};
?>


<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title><?php  echo $city; ?>, <?php  echo $state; ?> | Weather Center</title>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="/jsonweather/css/weather-style.css" type="text/css" media="screen">
    <link rel="stylesheet" href="/jsonweather/css/user-style.css" type="text/css" media="screen">
</head>

    <body id="springfield">
        <div id="wrapper">
            <header id="page-header">
                <?php include '../modules/header.php'; ?>
            </header>
            <nav id="page-nav">
                <?php include '../modules/navigation.php'; ?>
            </nav>
            <main id="page-main">
                <section class="weather-container">
                    <div id="cover">
                        <div id="status">Loading...</div>
                    </div>
                    <h1 id="cityDisplay"><?php  echo $city; ?>, <?php  echo $state; ?></h1>
                    <h2>Current Conditions</h2>
                    <ul id="current_conditions">
                        <li id="currentTemp"><?php  echo $temp_f; ?>&deg; F</li>
                        <li id="summary"><?php  echo $weather; ?></li>
                        <li id="add1"><?php  echo $temp_c; ?> &deg; C</li>
                        <li id="add2">Wind: <?php  echo $wind_mph; ?> MPH</li>
                        <li id="add3">Humidity: <?php  echo $relative_humidity; ?></li>

                    </ul>
                </section>
            </main>
            <footer id="page-footer">
                <?php include '../modules/footer.php'; ?>
                <small>Last updated: <?php echo date('j F, Y', getlastmod()); ?></small>
            </footer>
            <script src="/jsonweather/scripts/jquery-3.0.0.min.js"></script>
            <script src=""></script>
        </div>
    </body>
</html>
