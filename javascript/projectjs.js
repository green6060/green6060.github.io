
    $(document).on("load", function () {
        $.ajax({
            //Request JSON file
            url: '/javascript/productjson.json',

            //Store JSON file in an object "data"

            data: {
                format: 'json'
            },

            //Specify "data" object type
            datatype: 'json',


            success: function (data) {
                var webUrl = data.Products.weburl;
                var title = data.Products.itemtitle;
                var price = data.Products.price;
                var webreference = data.Products.webreference;
                var description = data.Products.description;
              //$('#summary').text(data.current_observation.weather);
                $('#imgurl1').attr("src", webUrl[0]);
                $('#itemtitle1').text(data.Products.itemtitle);
                $('#price1').text(price[0]);
                $('#webreference1').text(webreference[0]);
                $('#description1').text(description[0]);

                $('#imgurl2').attr("src", data.Products.weburl);
                $('#itemtitle2').text(data.Products.title);
                $('#price2').text(data.Products.price);
                $('#webreference2').text(data.Products.webreference);
                $('#description2').text(data.Products.description);

                $('#imgurl3').attr("src", data.Products.weburl[2]);
                $('#itemtitle3').text(data.Products.title[2]);
                $('#price3').text(data.Products.price[2]);
                $('#webreference3').text(data.Products.webreference[2]);
                $('#description3').text(data.Products.description[2]);

                $('#imgurl4').attr("src", data.Products.weburl[3]);
                $('#itemtitle4').text(data.Products.title[3]);
                $('#price4').text(data.Products.price[3]);
                $('#webreference4').text(data.Products.webreference[3]);
                $('#description4').text(data.Products.description[3]);

                $('#imgurl5').attr("src", data.Products.weburl[4]);
                $('#itemtitle5').text(data.Products.title[4]);
                $('#price5').text(data.Products.price[4]);
                $('#webreference5').text(data.Products.webreference[4]);
                $('#description5').text(data.Products.description[4]);

                $('#imgurl6').attr("src", data.Products.weburl[5]);
                $('#itemtitle6').text(data.Products.title[5]);
                $('#price6').text(data.Products.price[5]);
                $('#webreference6').text(data.Products.webreference[5]);
                $('#description6').text(data.Products.description[5]);

                $('#imgurl7').attr("src", data.Products.weburl[6]);
                $('#itemtitle7').text(data.Products.title[6]);
                $('#price7').text(data.Products.price[6]);
                $('#webreference7').text(data.Products.webreference[6]);
                $('#description7').text(data.Products.description[6]);

                $('#imgurl8').attr("src", data.Products.weburl[7]);
                $('#itemtitle8').text(data.Products.title[7]);
                $('#price8').text(data.Products.price[7]);
                $('#webreference8').text(data.Products.webreference[7]);
                $('#description8').text(data.Products.description[7]);

                $('#imgurl9').attr("src", data.Products.weburl[8]);
                $('#itemtitle9').text(data.Products.title[8]);
                $('#price9').text(data.Products.price[8]);
                $('#webreference9').text(data.Products.webreference[8]);
                $('#description9').text(data.Products.description[8]);

                $('#imgurl10').attr("src", data.Products.weburl[9]);
                $('#itemtitle10').text(data.Products.title[9]);
                $('#price10').text(data.Products.price[9]);
                $('#webreference10').text(data.Products.webreference[9]);
                $('#description10').text(data.Products.description[9]);

                $('#imgurl11').attr("src", data.Products.weburl[10]);
                $('#itemtitle11').text(data.Products.title[10]);
                $('#price11').text(data.Products.price[10]);
                $('#webreference11').text(data.Products.webreference[10]);
                $('#description11').text(data.Products.description[10]);

                $('#imgurl12').attr("src", data.Products.weburl[11]);
                $('#itemtitle12').text(data.Products.title[11]);
                $('#price12').text(data.Products.price[11]);
                $('#webreference12').text(data.Products.webreference[11]);
                $('#description12').text(data.Products.description[11]);
            }

        })
    });
