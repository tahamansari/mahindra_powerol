var base_url = 'http://kreaserv-tech.com/mahindra_admin/index.php/api';
var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var token = {};
var list_data = {};



var myApp = new Framework7({

    // pushState: true,
    // swipePanel: 'right',
    swipeBackPage: false,
    preloadPreviousPage: true,
    uniqueHistory: true,
    // uniqueHistoryIgnoreGetParameters: true,
    modalTitle: 'Powerol',
    imagesLazyLoadPlaceholder: 'img/lazyload.jpg',
    imagesLazyLoadThreshold: 50,

    // Hide and show indicator during ajax requests
    onAjaxStart: function(xhr) {

        console.log("show indicator");
        myApp.showIndicator();
    },
    onAjaxComplete: function(xhr) {

        console.log("hide indicator");
        myApp.hideIndicator();
    }

});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;


// Add view
var mainView = myApp.addView('.view-main', {
    // dynamicNavbar: true
});

mainView.hideNavbar();

//We can also add callback for all pages:
myApp.onPageInit('*', function (page) {
  console.log(page.name + ' initialized'); 
});




myApp.onPageInit('cba', function(page) {


    console.log('5ka page called');

    $('.backbutton').on('click', function() {
        mainView.router.back();
    });
    $("#p_rating").change(function() {
        console.log(this.value);
        if (this.value == '7.5kVA') {
            $('#p_price_of_brand').val('527500');
            $("#p_fuel_consumption").val('2.0');
        } else if (this.value == '10kVA') {
            $("#p_fuel_consumption").val('2.4');
            //dummy
            $('#p_price_of_brand').val('510000');
        } else if (this.value == '12.5kVA') {
            $("#p_fuel_consumption").val('2.7');
            $('#p_price_of_brand').val('510000');
        } else if (this.value == '15kVA') {
            $("#p_fuel_consumption").val('3.0');
            $('#p_price_of_brand').val('520000');
        } else if (this.value == '20kVA') {
            $("#p_fuel_consumption").val('3.9');
            $('#p_price_of_brand').val('540000');
        } else if (this.value == '25kVA') {
            $("#p_fuel_consumption").val('4.7');
            $('#p_price_of_brand').val('630000');
        } else if (this.value == '30kVA') {
            $("#p_fuel_consumption").val('6.0');
            $('#p_price_of_brand').val('650000');
        } else if (this.value == '40kVA') {
            $("#p_fuel_consumption").val('8.0');
            $('#p_price_of_brand').val('725000');
        } else if (this.value == '50kVA') {
            $("#p_fuel_consumption").val('10.0');
            $('#p_price_of_brand').val('880000');
        } else if (this.value == '62.5kVA') {
            $("#p_fuel_consumption").val('11.4');
            $('#p_price_of_brand').val('930000');
        } else if (this.value == '75kVA') {
            $("#p_fuel_consumption").val('14.5');
            $('#p_price_of_brand').val('1020000');
        } else if (this.value == '82.5kVA') {
            $("#p_fuel_consumption").val('13.9');
            $('#p_price_of_brand').val('1225000');
        } else if (this.value == '100kVA') {
            $("#p_fuel_consumption").val('17.3');
            $('#p_price_of_brand').val('1300000');
        } else if (this.value == '125kVA') {
            $("#p_fuel_consumption").val('21.4');
            $('#p_price_of_brand').val('1390000');
        } else if (this.value == '160kVA') {
            $("#p_fuel_consumption").val('27.8');
            $('#p_price_of_brand').val('2035500');
        } else if (this.value == '180kVA') {
            $("#p_fuel_consumption").val('28.7');
            //dummy
            $('#p_price_of_brand').val('2035500');
        } else if (this.value == '200kVA') {
            $("#p_fuel_consumption").val('33.3');
            $('#p_price_of_brand').val('2l50000');
        }
    });

});

myApp.onPageInit('findus_map', function(page) {

    var element = document.getElementById("map");
    var mapTypeIds = [];
    for (var type in google.maps.MapTypeId) {
        mapTypeIds.push(google.maps.MapTypeId[type]);
    }

    mapTypeIds.push("OSM");
    mapTypeIds.push("MyGmap");
    mapTypeIds.push("LocalGmap");
    mapTypeIds.push("WebStorageGmap");
    mapTypeIds.push("LocalMyGmap");
    mapTypeIds.push("WebStorageMyGmap");

    var map = new google.maps.Map(element, {

        center: new google.maps.LatLng(28.394857, 84.124008),
        zoom: 8,
        mapTypeId: "MyGmap",
        mapTypeControlOptions: {
            mapTypeIds: mapTypeIds,
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    });

    map.mapTypes.set("OSM", new google.maps.ImageMapType({
        getTileUrl: getOsmTileImgSrc,
        tileSize: new google.maps.Size(256, 256),
        name: "OSM",
        maxZoom: 15
    }));

    map.mapTypes.set("MyGmap", new google.maps.ImageMapType({
        getTileUrl: getGmapTileImgSrc,
        tileSize: new google.maps.Size(256, 256),
        name: "MyGmap",
        maxZoom: 15
    }));

    map.mapTypes.set("LocalGmap", new google.maps.ImageMapType({
        getTileUrl: getLocalTileImgSrc,
        tileSize: new google.maps.Size(256, 256),
        name: "LocalGmap",
        maxZoom: 15
    }));

    map.mapTypes.set("WebStorageGmap", new google.maps.ImageMapType({
        getTileUrl: getWebStorageTileImgSrc,
        tileSize: new google.maps.Size(256, 256),
        name: "WebStorageGmap",
        maxZoom: 15
    }));

    map.mapTypes.set("LocalMyGmap", new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
            return checkTileInSprites(coord, zoom) ?
                getLocalTileImgSrc(coord, zoom) :
                getGmapTileImgSrc(coord, zoom);
        },
        tileSize: new google.maps.Size(256, 256),
        name: "LocalMyGmap",
        maxZoom: 15
    }));

    map.mapTypes.set("WebStorageMyGmap", new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
            var image = getWebStorageTileImgSrc(coord, zoom);
            return image ? image : getGmapTileImgSrc(coord, zoom);
        },
        tileSize: new google.maps.Size(256, 256),
        name: "WebStorageMyGmap",
        maxZoom: 15
    }));


     var locations = [
      ['Dhaulagiri',28.698465, 83.487350, 3],
      ['Manaslu', 28.549711, 84.559677, 2],
      ['Bharatpur', 27.216981,  77.489515, 1],
      ['Kathmandu', 27.717245,  85.323960, 4],

    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: new google.maps.LatLng(28.394857, 84.124008),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel:  false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }


    google.maps.event.addListener(map, 'click', function(point) {
        var marker = new google.maps.Marker({
            position: point.latLng,
            map: map
        });
        google.maps.event.addListener(marker, 'dblclick', function() {
            marker.setMap(null);
        });
        google.maps.event.addListener(marker, 'click', function() {
            new google.maps.InfoWindow({
                content: 'lat: ' + point.latLng.lat() + '<br>lng:' + point.latLng.lng()
            }).open(map, marker);
        });
    });

    function CustomControl(controlDiv, map, title, handler) {
        controlDiv.style.padding = '5px';

        var controlUI = document.createElement('DIV');
        controlUI.style.backgroundColor = 'white';
        controlUI.style.borderStyle = 'solid';
        controlUI.style.borderWidth = '2px';
        controlUI.style.cursor = 'pointer';
        controlUI.style.textAlign = 'center';
        controlUI.title = title;
        controlDiv.appendChild(controlUI);

        var controlText = document.createElement('DIV');
        controlText.style.fontFamily = 'Arial,sans-serif';
        controlText.style.fontSize = '12px';
        controlText.style.paddingLeft = '4px';
        controlText.style.paddingRight = '4px';
        controlText.innerHTML = title;
        controlUI.appendChild(controlText);

        google.maps.event.addDomListener(controlUI, 'click', handler);
    }

    var clearWebStorageDiv = document.createElement('DIV');

    var clearWebStorageButton = new CustomControl(clearWebStorageDiv, map,
        '', clearWebStorage);

    var prepareWebStorageDiv = document.createElement('DIV');

    var prepareWebStorageButton = new CustomControl(prepareWebStorageDiv, map,
        '', prepareWebStorage);

    clearWebStorageDiv.index = 1;
    prepareWebStorageDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(clearWebStorageDiv);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(prepareWebStorageDiv);


    $('.mapcontainer').css('visibility','visible');
    $('.backbutton').on('click', function() {
        mainView.router.back();
    });

});

// myApp.onPageInit('findus_dealer', function(page) {
//     $('.backbutton').on('click', function() {
//         mainView.router.back();
//     });

// });

myApp.onPageInit('product_listing', function(page) {

    console.log('product listing called');


    mainView.router.refreshPage();


    $('.showpdf1').on('click', function() {

        // alert('showpdf clicked');
        // onSuccess Callback
        // This method accepts a JSON object, which contains the
        // message response

        var onSuccess = function(data) {
            // alert('message: ' + data.message);
        };
        // onError Callback receives a json object
        function onError(error) {
            alert('message error: ' + error.message);
        }

        // window.cordova.plugins.FileOpener.openFile("files/Download/NEPAL-BANGLADESH-BROCHURE.pdf", onSuccess, onError);

        window.cordova.plugins.FileOpener.openFile("file:///android_asset/www/NEPAL-BANGLADESH-BROCHURE.pdf", onSuccess, onError);


        // window.cordova.plugins.FileOpener.openFile(window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www/assets/NEPAL-BANGLADESH-BROCHURE.pdf"), onSuccess, onError);

    })

    $('.showpdf2').on('click', function() {

        // alert('showpdf clicked');
        // onSuccess Callback
        // This method accepts a JSON object, which contains the
        // message response
        var onSuccess = function(data) {
            // alert('message: ' + data.message);
        };
        // onError Callback receives a json object
        function onError(error) {
            alert('message error: ' + error.message);
        }

        window.cordova.plugins.FileOpener.openFile("files/Download/REST-OF-THE-WORLD-BROCHURE.pdf", onSuccess, onError);

        // window.cordova.plugins.FileOpener.openFile(window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www/assets/REST-OF-THE-WORLD-BROCHURE.pdf"), onSuccess, onError);

    })

    $('.listing_input_red').css('background-color', 'transparent');
    $('.listing_input_blue').css('background-color', 'transparent');

    $('.backbutton').on('click', function() {
        mainView.router.back();
    });


});

myApp.onPageInit('product_specification', function(page) {


    if(!page.query){
        alert('no object found');
    }

    $('.backbutton').on('click', function() {
        mainView.router.loadPage('home.html');
    });

    var title = page.query.title;
    $('#product_specification_h1').text('PRODUCT LISTING /' + title);


    // $('#product_specification_title').append(title);
    // $('#product_specification_title').append('<hr class="cust-line hvr-underline-from-left">');

    // $(".hvr-underline-from-left").animate({right: '0'}, 500);

    if(title == '7.5 kVA'){

                var html  = "<div class='book_content'>"+
                "<h2 class='book_heading' class='product_specification_title'>7.5 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                "<div class='outzoom'></div>"+
                "<a href='#' onclick='redirect_book_now(\"7.5 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                "<div class='row no-gutter'>"+
                "<div class='col-10 listzoom height'>"+
                "<p class='table-conntent'>Rated</p>"+
                "<p class='table-conntent-number'>4</p>"+
                "</div>"+
                "<div class='col-30 listzoom height'>"+
                "<p class='table-conntent'>Engine Model</p>"+
                "<p class='table-conntent-number' style='margin-top: -4% !important;'>15LD440-GS12</p>"+
                "</div>"+
                "<div class='col-20 listzoom height'>"+
                "<p class='table-conntent'>No of cylinders</p>"+
                "<p class='table-conntent-number'>1</p>"+
                "</div>"+
                "<div class='col-20 listzoom height'>"+
                "<p class='table-conntent'>Rated Speed RPM</p>"+
                "<p class='table-conntent-number'>3000</p>"+
                "</div>"+
                "<div class='col-20 listzoom height'>"+
                "<p class='table-conntent'>Door Type</p>"+
                "<p class='table-conntent-number'>SD</p>"+
                "</div>"+
                "</div>"+
                "<div class='row no-gutter'>"+
                "<div class='col-25 listzoom'>"+
                "<p class='table-conntent'>Rated Current(AMP)</p>"+
                "<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
                "<p class='table-conntent-number text-left' style='margin-top: -22px;'>21.74</p>"+
                "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
                "<p class='table-conntent-number text-right' style='margin-top: -60px;'>NA</p>"+
                "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
                "</div>"+
                "<div class='col-20 listzoom'>"+
                "<p class='table-conntent'>Cooling System</p>"+
                "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                "<p class='table-conntent-number' >Air</p>"+
                "</div>"+
                "<div class='col-30 listzoom'>"+
                "<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
                "<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
                "<p class='table-conntent-number text-left' style='margin-top: -22px'>1080</p>"+
                "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                "<p class='table-conntent-number text-center' style='margin-top: -60px;'>700</p>"+
                "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                "<p class='table-conntent-number text-right' style='margin-top: -60px;'>765</p>"+
                "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                "</div>"+
                "<div class='col-25 listzoom'>"+
                "<p class='table-conntent'>Approximate Dry Weight</p>"+
                "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                "<p class='table-conntent-number' >225</p>"+
                "</div>"+
                "</div>"+
                "<div class='row no-gutter'>"+
                "<div class='col-30 listzoom'>"+
                "<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
                "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                "<p class='table-conntent-number' >225</p>"+
                "</div>"+
                "<div class='col-30 listzoom'>"+
                "<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
                "<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm) (lits)</p>"+
                "<p class='table-conntent-number' >225</p>"+
                "</div>"+
                "<div class='col-40 listzoom fullzindex'>"+
                "<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
                "<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
                "<p class='table-conntent-number text-left' style='margin-top: -22px;'>1040</p>"+
                "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                "<p class='table-conntent-number text-center' style='margin-top: -60px;'>700</p>"+
                "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                "<p class='table-conntent-number text-right' style='margin-top: -60px;'>745</p>"+
                "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                "</div>"+
                "</div>"+
                "</div>"+
                "</div>";

    }else if(title == '20 kVA - 25 kVA'){


        var html = "<div class='book_content'>"+
"<h2 class='book_heading'>20 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"20 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>16</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>3285GM-C2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>3</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>SD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>87</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>27.8</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>2120</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>900</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1410</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >90</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-50 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >800</p>"+
"</div>"+

"<div class='col-50 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>2150</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1300</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+




// <!-- .....2...... -->


"<div class='book_content'>"+
"<h2 class='book_heading' >22.5 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"22.5 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>18</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>3335TCGM-C2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>3</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>SD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>97.8</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>31.3</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>2150</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1365</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >90</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-50 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>800</p>"+
"</div>"+

"<div class='col-50 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>2150</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1300</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+


// <!-- ...3... -->





"<div class='book_content'>"+
"<h2 class='book_heading' >25 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"25 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>20</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>3385TCIGM-C2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>3</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>SD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>108.7</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>34.8</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>2120</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>900</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1410</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >90</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-50 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>820</p>"+
"</div>"+

"<div class='col-50 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>2500</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1390</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+



// <!-- ....4... -->



"<div class='book_content'>"+
"<h2 class='book_heading' >25 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"25 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>20</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>3385TCIGM-C2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>3</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>108.7</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>34.8</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>2500</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1376</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >130</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-50 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>940</p>"+
"</div>"+

"<div class='col-50 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>2500</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1390</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>";


    }else if(title == "30 kVA - 40 kVA"){

        var html = "<div class='book_content'>"+
"<h2 class='book_heading'>30 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"30 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>24</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>3445TCIGM-C2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>3</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>130.4</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>41.7</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>2500</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1376</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >130</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-50 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >950</p>"+
"</div>"+

"<div class='col-50 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>2500</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1390</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+




// <!-- .....2...... -->


"<div class='book_content'>"+
"<h2 class='book_heading' >40 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"40 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>32</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>4575TCIGM-C2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>4</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>173.9</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>55.6</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>2500</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1376</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >130</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-50 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>1000</p>"+
"</div>"+

"<div class='col-50 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>2500</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1390</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>";


    }else if(title == '50 kVA - 62.5 kVA'){

        var html = "<div class='book_content'>"+
"<h2 class='book_heading'>50 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"50 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>40</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>4725GM-C2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>4</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>69.6</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>2770</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1150</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1800</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >150</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-50 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >1250</p>"+
"</div>"+

"<div class='col-50 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>2800</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1150</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1540</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+




// <!-- .....2...... -->


"<div class='book_content'>"+
"<h2 class='book_heading' >62.5 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"62.5 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>50</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>4905GM-C2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>4</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>87</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>2770</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1150</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1800</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >150</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-50 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>1250</p>"+
"</div>"+

"<div class='col-50 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>2800</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1150</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1540</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>";

    }else if(title == '75 kVA - 125 kVA'){

        var html = "<div class='book_content'>"+
"<h2 class='book_heading'>75 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"75 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>60</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>41035GM-C2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>4</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>104.3</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water Cooled</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>3000</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1150</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>2135</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >230</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >1350</p>"+
"</div>"+

"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Rated Engine Power at 100% load KW (HP)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >68.9 (93.6)</p>"+
"</div>"+

"<div class='col-40 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>2800</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1150</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1640</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+




// <!-- .....2...... -->


"<div class='book_content'>"+
"<h2 class='book_heading' >82.5 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"82.5 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>60</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>41035GM-C2 Standby</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>4</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>NA</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water Cooled</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >NA</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>NA</p>"+
"</div>"+

"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Rated Engine Power at 100% load KW (HP)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >NA</p>"+
"</div>"+



"<div class='col-40 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+


// <!-- ...3.... -->




"<div class='book_content'>"+
"<h2 class='book_heading' >82.5 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"82.5 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>66</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>82.5 kVA Mech CPCB 2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>4</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>115</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water Cooled</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>3200</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>2290</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >200</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>1700</p>"+
"</div>"+

"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Rated Engine Power at 100% load KW (HP)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >74.5 (101.2)</p>"+
"</div>"+

"<div class='col-40 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>3200</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1700</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+



// <!-- .....4...... -->


"<div class='book_content'>"+
"<h2 class='book_heading' >100 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"100 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>80</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>100 kVA Mech CPCB 2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>4</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>139</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water Cooled</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>3200</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>2290</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >200</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>1720</p>"+
"</div>"+

"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Rated Engine Power at 100% load KW (HP)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >93 (126.4)</p>"+
"</div>"+

"<div class='col-40 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>3200</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1700</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+


// <!-- .....5...... -->


"<div class='book_content'>"+
"<h2 class='book_heading' >125 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"125 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>100</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>125 kVA Mech CPCB 2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>6</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>173.9</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water Cooled</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >219</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>1866</p>"+
"</div>"+


"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Rated Engine Power at 100% load KW (HP)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >114.8 (156)</p>"+
"</div>"+



"<div class='col-40 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>3750</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1533</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>";

    }else if(title == '160 kVA - 200 kVA'){

        var html = "<div class='book_content'>"+
"<h2 class='book_heading'>160 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"160 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>128</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>160 kVA Mech CPCB 2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>6</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>222.6</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water Cooled</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>3790</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1877</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >250</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >2350</p>"+
"</div>"+


"<div class='col-40 listzoom'>"+
"<p class='table-conntent'>Rated Engine Power KW (HP)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >146.5/199</p>"+
"</div>"+

"<div class='col-40 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>3750</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1700</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+



// <!-- .....2...... -->


"<div class='book_content'>"+
"<h2 class='book_heading' >180 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"180 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>144</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>180 kVA Elec CPCB 2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>6</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>250.4</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water Cooled</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>4500</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1500</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1878</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >390</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>2750</p>"+
"</div>"+

"<div class='col-40 listzoom'>"+
"<p class='table-conntent'>Rated Engine Power KW (HP)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >163/221.5</p>"+
"</div>"+

"<div class='col-40 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>"+


// <!-- ...3.... -->




"<div class='book_content'>"+
"<h2 class='book_heading' >200 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
"<div class='outzoom'></div>"+
"<a href='#' onclick='redirect_book_now(\"200 kVA\")'><input class='book_now hvr-fade' type='submit' value='BOOK NOW' name=''></a>"+
"</div>"+

"<div style='clear:both'></div>"+
"<div class='book_now_input'>"+
"<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+

"<div class='row no-gutter'>"+
"<div class='col-10 listzoom height'>"+
"<p class='table-conntent'>Rated</p>"+
"<p class='table-conntent-number'>160</p>"+
"</div>"+
"<div class='col-30 listzoom height'>"+
"<p class='table-conntent'>Engine Model</p>"+
"<p class='table-conntent-number' style='margin-top: -4% !important;'>200 kVA Elec CPCB 2</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>No of cylinders</p>"+
"<p class='table-conntent-number'>6</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Rated Speed RPM</p>"+
"<p class='table-conntent-number'>1500</p>"+
"</div>"+
"<div class='col-20 listzoom height'>"+
"<p class='table-conntent'>Door Type</p>"+
"<p class='table-conntent-number'>DD</p>"+
"</div>"+
"</div>"+


"<div class='row no-gutter'>"+
"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Rated Current(AMP)</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Capacity 0.8PF</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>1 Phase</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>278.2</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>3 Phase</p>"+
"</div>"+
"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Cooling System</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
"<p class='table-conntent-number' >Water Cooled</p>"+
"</div>"+
"<div class='col-30 listzoom'>"+
"<p class='table-conntent'>Side lifting DG set dimensions with</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>top hood. if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px'>4500</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>1500</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>1878</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"<div class='col-25 listzoom'>"+
"<p class='table-conntent'>Intergrated Fuel Tank Capacity(lits)</p>"+
"<p class='table-conntent-number' >390</p>"+
"</div>"+

"</div>"+

"<div class='row no-gutter'>"+

"<div class='col-20 listzoom'>"+
"<p class='table-conntent'>Approximate Dry Weight</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>Of DG set (kg)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;'>2800</p>"+
"</div>"+

"<div class='col-40 listzoom'>"+
"<p class='table-conntent'>Rated Engine Power KW (HP)</p>"+
"<p class='table-conntent-number' style='margin-top: 0;' >180/244.6</p>"+
"</div>"+


"<div class='col-40 listzoom fullzindex'>"+
"<p class='table-conntent'>Centre Lifting DG Set Dimensions</p>"+
"<p style='font-size: 15px;margin-top: -18px;'>with top hood, if any (mm)</p>"+
"<p class='table-conntent-number text-left' style='margin-top: -22px;'>NA</p>"+
"<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
"<p class='table-conntent-number text-center' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
"<p class='table-conntent-number text-right' style='margin-top: -60px;'>NA</p>"+
"<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
"</div>"+

"</div>"+



"</div>"+
"</div>";

    }else if(title == '200 kVA - 500 kVA'){

        var html = "";

    }


    

    $('.specificationContainer').html(html);

    $(".hvr-underline-from-left").animate({right: '0'}, 500);




    $('.listzoom').click(function(){
        $('.listzoom').removeClass('pro_spec_hover');
        $(this).addClass('pro_spec_hover');
    })

    $('.outzoom').click(function() {
        $('.listzoom').removeClass('pro_spec_hover');
    })




});

myApp.onPageInit('video', function(page) {


    $('.openVideo').click(function(){

        console.log("video open");
        VideoPlayer.play("file:///android_asset/www/small.mp4");
        // http://kreaserv-tech.com/mahindra_admin/small.mp4

    })


    $('.backbutton').on('click', function() {
        mainView.router.back();
    });
});

myApp.onPageInit('book_now', function(page) {
    $('.backbutton').on('click', function() {
        mainView.router.back();
    });
    var title = page.query.title;
    $('#book_now_h1').text('PRODUCT LISTING /' + title);
    $('#book_now_title').text(title);

    $("#book_now_dg_user").change(function() {
        if (this.value == 'Yes') {
            $('#book_now_dg_user').hide();
            $('#book_now_dg_user_product_range').show();
        }
    });

});

myApp.onPageInit('enquiry_form', function(page) {


    if(page.query.frombooknow == 'yes'){

        myApp.showTab('#tab2');
        $("#tab2_button").css("background-color","#3c73c0");
        $("#tab2_button").css("color","#fff");
        $("#tab1_button").css("background-color","");
        $("#tab1_button").css("color","#3c73c0");

    }else{

        $("#tab1_button").css("background-color", "#3c73c0");
        $("#tab1_button").css("color", "#fff");

    }


    $('.backbutton').on('click', function() {

        // alert('clicked');
        // mainView.router.back();
        mainView.router.loadPage('home.html');
    });





    $('#tab1_button').on('click', function() {
        $("#tab1_button").css("background-color", "#3c73c0");
        $("#tab1_button").css("color", "#fff");
        $("#tab2_button").css("background-color", "");
        $("#tab2_button").css("color", "#3c73c0");
        myApp.showTab('#tab1');
    });

    $('#tab2_button').on('click', function() {
        myApp.showTab('#tab2');
        $("#tab2_button").css("background-color", "#3c73c0");
        $("#tab2_button").css("color", "#fff");
        $("#tab1_button").css("background-color", "");
        $("#tab1_button").css("color", "#3c73c0");
    });
    // Lockr.flush('data');

    $("#dg_user").change(function() {
        if (this.value == 'Yes') {
            $('#dg_user').hide();
            $('#dg_user_product_range').show();
        }
    });
    var data = Lockr.get('data');

    if(data){
        var data = data.reverse();
    }

    var html = '';
    count = 0;
    $.each(data, function(key, value) {
        var border_color = '';
        if (value.product_range == '5KVA*') {
            border_color = '#e61938';
        } else {
            border_color = '#3c73c0';
        }
        html =
            '<div class="enquiry_list" id="enquiry_list_' + count + '" style="margin-top: 3%;margin-left: 3%;border-left: 6px solid ' + border_color + ';">' +
            '<a class="enquiry_list_edit_button" href="" onclick="edit_list_book(' + count + ')"><img  style="width: 4%;float: right;padding: 1%;position: relative;right: 0;" src="img/edit.png"></a>' +
            '<table>' +
            '<tr>' +
            '<td class="vz_inner_content_left">Name</td>' +
            '<td class="vz_inner_content_dot">:</td>' +
            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + value.name + '" readonly="false" id="list_name_' + count + '" style="background: rgba(255, 255, 255, 0); border: none;"></td>' +
            '<td class="vz_inner_content_left">Product Range</td>' +
            '<td class="vz_inner_content_dot">:</td>' +
            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + value.product_range + '" readonly="false" id="list_product_range_' + count + '" style="background: rgba(255, 255, 255, 0); border: none;"></td>' +
            '</tr>' +
            '<tr>' +
            '<td class="vz_inner_content_left">Compnay</td>' +
            '<td class="vz_inner_content_dot">:</td>' +
            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + value.company + '" readonly="false" id="list_company_' + count + '" style="background: rgba(255, 255, 255, 0); border: none;"></td>' +
            '<td class="vz_inner_content_left">State</td>' +
            '<td class="vz_inner_content_dot">:</td>' +
            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + value.state + '" readonly="false" id="list_state_' + count + '" style="background: rgba(255, 255, 255, 0); border: none;"></td>' +
            '</tr>' +
            '<tr>' +
            '<td class="vz_inner_content_left">Mobile No.</td>' +
            '<td class="vz_inner_content_dot">:</td>' +
            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + value.mobile + '" readonly="false" id="list_mobile_' + count + '" style="background: rgba(255, 255, 255, 0); border: none;"></td>' +
            '<td class="vz_inner_content_left">Segment</td>' +
            '<td class="vz_inner_content_dot">:</td>' +
            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + value.segment + '" readonly="false" id="list_segment_' + count + '" style="background: rgba(255, 255, 255, 0); border: none;"></td>' +
            '</tr>' +
            '<tr>' +
            '<td class="vz_inner_content_left">DG User Product Range</td>' +
            '<td class="vz_inner_content_dot">:</td>' +
            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + value.dg_user_product_range + '" readonly="false" id="list_dg_user_product_range_' + count + '" style="background: rgba(255, 255, 255, 0); border: none;"></td>' +
            '<td class="vz_inner_content_left">Are you an existing DG user?</td>' +
            '<td class="vz_inner_content_dot">:</td>' +
            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + value.dg_user + '" readonly="false" id="list_dg_user_' + count + '" style="background: rgba(255, 255, 255, 0); border: none;"></td>' +
            '</tr>' +
            '<tr>' +
            '<td class="vz_inner_content_left">Email ID</td>' +
            '<td class="vz_inner_content_dot">:</td>' +
            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + value.email + '" readonly="false"  id="list_email_' + count + '" style="background: rgba(255, 255, 255, 0); border: none;"></td>' +
            '</tr>' +
            '</table>' +
            '</div>';
        $('#enquiry_data').append(html);
        count += 1;
    });
});

myApp.onPageInit('our_story', function(page) {


    $('.showpptRise').on('click', function() {

        var onSuccess = function(data) {
        };
        function onError(error) {
            alert('message: ' + error.message);
        }
        window.cordova.plugins.FileOpener.openFile("files/Download/mahindraRise.ppsx", onSuccess, onError);
        // file:///storage/emulated/0/Android/data/com.kreaserv.Powerol/
    })

    $('.showpptPowerol').on('click', function() {

        var onSuccess = function(data) {
        };
        function onError(error) {
            alert('message: ' + error.message);
        }
        window.cordova.plugins.FileOpener.openFile("files/Download/mahindraPowerol.ppsx", onSuccess, onError);
        // file:///storage/emulated/0/Android/data/com.kreaserv.Powerol/
    })

    $('.showpptAgni').on('click', function() {

        var onSuccess = function(data) {
        };
        function onError(error) {
            alert('Amessage: ' + error.message);
        }
        window.cordova.plugins.FileOpener.openFile("files/Download/agni.ppsx", onSuccess, onError);
        // file:///storage/emulated/0/Android/data/com.kreaserv.Powerol/
    })

    $('.backbutton').on('click', function() {
        mainView.router.back();
    });

});


myApp.onPageInit('forgot', function(page) {});

myApp.onPageInit('inside_outside', function(page) {
    $("#tab1_button").css("background-color", "#0173bc");
    $("#tab1_button").css("color", "#fff");
    $("#tab1_button").css("border", "2px solid #0173bc");

    $('#tab1_button').on('click', function() {
        myApp.showTab('#tab1');
        $("#tab1_button").css("background-color", "#0173bc");
        $("#tab1_button").css("color", "#fff");
        $("#tab1_button").css("border", "2px solid #0173bc");
        $("#tab2_button").css("background-color", "");
        $("#tab2_button").css("color", "#fff");
        $("#tab2_button").css("border", "2px solid #fff");
    });

    $('#tab2_button').on('click', function() {
        myApp.showTab('#tab2');
        $("#tab2_button").css("background-color", "#0173bc");
        $("#tab2_button").css("color", "#fff");
        $("#tab2_button").css("border", "2px solid #0173bc");
        $("#tab1_button").css("background-color", "");
        $("#tab1_button").css("color", "#fff");
        $("#tab1_button").css("border", "2px solid #fff");
    });
});

myApp.onPageInit('faq', function(page) {

    console.log('page loaded');

    $('.accordion').click(function(){
        console.log('border clicked')
        ;
        $(this).parent().toggleClass('blueborder');
        $(this).next().toggleClass('bluecolor');

    })


    $('.backbutton').on('click', function() {
        mainView.router.back();
    });
    $("#tab1_button").css("background-color", "#0173bc");
    $("#tab1_button").css("color", "#fff");

    $('#tab1_button').on('click', function() {
        $("#tab1_button").css("background-color", "#0173bc");
        $("#tab1_button").css("color", "#fff");
        $("#tab2_button,#tab3_button,#tab4_button,#tab5_button").css("background-color", "");
        $("#tab2_button,#tab3_button,#tab4_button,#tab5_button").css("color", "#3c73c0");
        myApp.showTab('#tab1');
    });

    $('#tab2_button').on('click', function() {
        myApp.showTab('#tab2');
        $("#tab2_button").css("background-color", "#0173bc");
        $("#tab2_button").css("color", "#fff");
        $("#tab1_button,#tab3_button,#tab4_button,#tab5_button").css("background-color", "");
        $("#tab1_button,#tab3_button,#tab4_button,#tab5_button").css("color", "#3c73c0");
    });

    $('#tab3_button').on('click', function() {
        myApp.showTab('#tab3');
        $("#tab3_button").css("background-color", "#0173bc");
        $("#tab3_button").css("color", "#fff");
        $("#tab1_button,#tab2_button,#tab4_button,#tab5_button").css("background-color", "");
        $("#tab1_button,#tab2_button,#tab4_button,#tab5_button").css("color", "#3c73c0");
    });


    $('#tab4_button').on('click', function() {
        myApp.showTab('#tab4');
        $("#tab4_button").css("background-color", "#0173bc");
        $("#tab4_button").css("color", "#fff");
        $("#tab1_button,#tab3_button,#tab2_button,#tab5_button").css("background-color", "");
        $("#tab1_button,#tab3_button,#tab2_button,#tab5_button").css("color", "#3c73c0");
    });

    $('#tab5_button').on('click', function() {
        myApp.showTab('#tab5');
        $("#tab5_button").css("background-color", "#0173bc");
        $("#tab5_button").css("color", "#fff");
        $("#tab1_button,#tab3_button,#tab2_button,#tab4_button").css("background-color", "");
        $("#tab1_button,#tab3_button,#tab2_button,#tab4_button").css("color", "#3c73c0");
    });


    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            var accordion_content = this.nextElementSibling;
            if (accordion_content.style.maxHeight) {
                accordion_content.style.maxHeight = null;
            } else {
                accordion_content.style.maxHeight = accordion_content.scrollHeight + "px";
            }
        }
    }
});


myApp.onPageInit('home', function(page) {

    console.log('home page called');

    $('.item').click(function(){
        $('.item').removeClass('home_hover');
        $(this).addClass('home_hover');
        // alert('clicked');
    })

    getdate();
    days();


    $(".owl-carousel").owlCarousel({
        animateOut: 'flipInX',
        animateIn: 'flipInX',
        smartSpeed:600
    });

    function days() {
        var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
        var m_days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        var currentdate = new Date();
        var month = currentdate.getMonth();
        var day = currentdate.getDate();
        var current_date = m_names[month];
        var current_day = m_days[currentdate.getDay()];
        $("#day").text(current_day);
        $("#date").text(current_date + ' ' + day);
    }

    function getdate() {
        var currentdate = new Date();
        var h = currentdate.getHours();
        var m = currentdate.getMinutes();
        var s = currentdate.getSeconds();
        if (s < 10) {
            s = "0" + s;
        }

        $("#time").text(h + " : " + m + " : " + s);
        setTimeout(function() {
            getdate()
        }, 500);
    }

});




myApp.onPageInit('5k_punch', function(page) {


    Highcharts.chart('pachkacontainer', {

        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
        },
        title: {
            text: '',
            useHTML: true,
            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -90,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                borderWidth: '10px',
                borderColor: 'transparent',
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
            }
        },
        series: [{
            type: 'pie',
            name: '5 KA PUNCH',
            innerSize: '45%',
            data: [{
                name: '<span>Silence Certified </span><br> <img src="img/5k_punch_rupee.png" class="pie_sec1">',
                y: 20,
                drilldown: 'Silence Certified',
                color: '#eb113b',
            }, {
                name: '<span>Peace of Mind</span> <br> <img src="img/5k_punch_yoga.png" class="pie_sec2">',
                y: 20,
                color: '#0075b6',
                drilldown: 'Peace of Mind'
            }, {
                name: '<span>Fuel Intelligent</span> <br> <img src="img/5k_punch_mid.png" class="pie_sec3">',
                y: 20,
                color: '#eb113b',
                drilldown: 'Fuel Intelligent'
            }, {
                name: '<span>Fastest Delivery</span> <br> <img src="img/5k_punch_clock.png" class="pie_sec4">',
                y: 20,
                color: '#0075b6',
                drilldown: 'Fastest Delivery'
            }, {
                name: '<span>Power Brand</span> <br> <img src="img/5k_punch_charg.png" class="pie_sec5">',
                y: 20,
                color: '#eb113b',
                drilldown: 'Power Brand'
            }],
            dataLabels: {
                useHTML: true,
            }
        }],
        drilldown: {
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    y: 600,
                    x: -325
                },
                theme: {
                    fill: 'transparent',
                    'stroke-width': 0,
                    stroke: 'transparent',
                    r: 0,
                    states: {
                        hover: {
                            fill: '#bada55'
                        },
                        select: {
                            stroke: '#039',
                            fill: '#bada55'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Silence Certified',
                id: 'Silence Certified',
                data: [{
                    name: '<img src="img/popup_inner_icon1.png" style="width: 50%;"><h1 style="margin: 4%;">Silence Certified</h1><p style="margin: 5px; line-height: 25px;">Compliance to Stringent Noise <br>& <br> Emission norms.</p>',
                    y: 100,
                    color: '#eb113b',
                }],
                dataLabels: {
                    useHTML: true,
                }
            }, {
                type: 'pie',
                name: 'Peace of Mind',
                id: 'Peace of Mind',
                data: [{
                    name: '<img src="img/5k_punch_yoga.png" style="width: 30%;"><h1 style="margin: 4%;">Peace of Mind</h1><p style="margin: 5px; line-height: 25px;"><br>Door step Service <br> with  <br> 2 years warranty</p>',
                    y: 100,
                    color: '#0075b6',
                }],
                dataLabels: {
                    useHTML: true,
                }
            }, {
                type: 'pie',
                name: 'Fuel Intelligent',
                id: 'Fuel Intelligent',
                data: [{
                    name: '<img src="img/5k_punch_mid.png" style="width: 30%;"><h1 style="margin: 4%;">Fuel Intelligent</h1><p style ="margin: 5px; line-height: 25px;"><br><br>    Best in class <br> Fuel Efficiency.</p>',
                    y: 100,
                    color: '#eb113b',
                }],
                dataLabels: {
                    useHTML: true,
                }
            }, {
                type: 'pie',
                name: 'Fastest Delivery',
                id: 'Fastest Delivery',
                data: [{
                    name: '<img src="img/5k_punch_clock.png" style="width: 30%;"><h1 style="margin: 4%;">Fastest Delivery</h1><p style ="margin: 5px; line-height: 25px;"><br><br>Order Today, <br> Deliver Today</p>',
                    y: 100,
                    color: '#0075b6',
                }],
                dataLabels: {
                    useHTML: true,
                }
            }, {
                type: 'pie',
                name: 'Power Brand',
                id: 'Power Brand',
                data: [{
                    name: '<img src="img/5k_punch_charg.png" style="width: 30%;"><h1 style="margin: 4%;">Power Brand</h1><p sty="margin: 5px; line-height: 25px;"><br>Powered by rugged <br> Mahindra <br>  Tractor engines</p>',
                    y: 100,
                    color: '#eb113b',
                }],
                dataLabels: {
                    useHTML: true,
                }
            }]
        }
    });

    $('.backbutton').on('click', function() {
        mainView.router.back();
    });
});

myApp.onPageInit('index', function(page) {
    console.log('index page called');
});

myApp.onPageInit('tools', function(page) {

    $('#open-application').click(function() {

        if(Lockr.get('installed') != undefined){

            navigator.startApp.start("com.app.pc", function(message) { /* success */
            },
            function(error) { /* error */
                alert(error);
            });

        }else{
            //
            var onSuccess = function(data) {
                // alert('message: ' + data.message);

                Lockr.set('installed','true');
            };

            function onError(error) {
                // alert('message: ' + error.message);
            }
            window.cordova.plugins.FileOpener.openFile("files/download/loadcalculator.apk", onSuccess, onError);
        }

        


    })  

    $('.backbutton').on('click', function() {
        mainView.router.back();
    });

});