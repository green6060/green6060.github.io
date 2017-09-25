$(function () {
    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    function getData(lat, long) {
        // Get the data from the wunderground API
        $.ajax({
            url: 'http://api.wunderground.com/api/8a74efae350873f8/geolookup/conditions/q/' + lat + ',' + long + '.json',
            type: 'GET',
            data: {
                format: 'json'
            },
            datatype: 'json',
            success: function (data) {
                var fullCity = data.location.city + ', ' + data.location.state;
                var fullTitle = fullCity + ' | ' + $('title').text();
                $('#summary').text(data.current_observation.weather);
                $('#currentTemp').text(Math.round(data.current_observation.temp_f) + "\xB0" + "F");
                $('#cityDisplay').text(fullCity);
                $('#add1').text(Math.round(data.current_observation.temp_c) + " Celcius")
                $('#add2').text("Wind: " + data.current_observation.wind_mph + " MPH");
                $('#add3').text("Humidity: " + data.current_observation.relative_humidity);
                //$('currentTemp').text(data.);

                $("#cover").fadeOut(250);
            }
        });
    }

    $("a").click(function(event) {
        event.preventDefault();

        var location = $(this).attr('title');
        var lat = "";
        var long = "";

        $.ajax({
            url: '/jsonweather/scripts/weather.json',
            data: {
                format: 'json'
            },
            datatype: 'json',
            success: function(data) {
                if (location == "Weather in Franklin, ID") {
                    lat = data.Franklin.Latitude;
                    long = data.Franklin.Longitude;
                    getData(lat, long);
                } else if (location == "Weather in Greenville, SC") {
                    lat = data.Greenville.Latitude;
                    long = data.Greenville.Longitude;
                    getData(lat, long);
                } else if (location == "Weather in Springfield, IL") {
                    lat = data.Springfield.Latitude;
                    long = data.Springfield.Longitude;
                    getData(lat, long);
                } else {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            var lat = position.coords.latitude;
                            var long = position.coords.longitude;

                            // Call the getData function, send the lat and long
                            getData(lat, long);
                        });
                    }
                }
            },
            type: 'GET',
            error: function() {
                window.alert('Error 2!!');
            }
        });
    });
                // A function for changing a string to TitleCase
                function toTitleCase(str) {
                    return str.replace(/\w+/g, function (txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                }
            });
