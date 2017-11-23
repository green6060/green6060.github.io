// Current Location Scripts
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

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url: 'http://api.wunderground.com/api/8a74efae350873f8/geolookup/conditions/q/'+lat+','+long+'.json',
        type: 'GET',
        data: {
            format: 'json'
        },
        datatype: 'jsonp',

        success: function(data) {
            var fullCity = data.location.city + ', ' + data.location.state;

            $('#cityDisplay').text(fullCity);
            $('title').prepend(fullCity + ' | ');

            $('#currentTemp').text(Math.round(data.current_observation.temp_f) + "\xB0" + "F");

            $('#summary').text(data.current_observation.weather);


            $('#add1').text("Wind: " + data.current_observation.wind_mph + " MPH");
            $('#add2').text(Math.round(data.current_observation.temp_c) + " Celcius")
            $('#add3').text("Humidity: " + data.current_observation.relative_humidity);

            $("#cover").fadeOut(250);
        }

    });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
