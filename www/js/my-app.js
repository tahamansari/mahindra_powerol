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

        myApp.showIndicator();
    },
    onAjaxComplete: function(xhr) {

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
// myApp.onPageInit('*', function (page) {

//   console.log(page.name + ' initialized'); 
  
// });


myApp.onPageInit('cba', function(page) {


    console.log('5ka page called');

    $('.backbutton').on('click', function() {
        mainView.router.back();
    });

    $("#p_no_of_year").change(function() {
        $("#k_no_of_year").val(this.value);
        // var cal_p_no_of_service = 3 * parseFloat(this.value);
        // $("#p_no_of_service").val(cal_p_no_of_service);
        // $("#k_no_of_service").val(cal_p_no_of_service);
    });
    
    $("#k_no_of_year").change(function() {
        $("#p_no_of_year").val(this.value);
        // var cal_k_no_of_service = 3 * parseFloat(this.value);
        // $("#k_no_of_service").val(cal_k_no_of_service);
        // $("#p_no_of_service").val(cal_k_no_of_service);
    });

    $("#p_rating").change(function() {
        // console.log(this.value);
        $("#k_rating").val(this.value);
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

    $("#k_rating").change(function() {
        // console.log(this.value);
        $("#p_rating").val(this.value);
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

    
    // $("#p_avg_usage_hrs").change(function() {
    //     $("#k_avg_usage_hrs").val(this.value);
    //     var p_no_of_year = parseFloat($("#p_no_of_year").val());
    //     var p_avg_usage_hrs = parseFloat(this.value);
    //     var p_fuel_consumption = parseFloat($("#p_fuel_consumption").val());
    //     var cal_p_running_fuel = p_no_of_year * p_avg_usage_hrs * p_fuel_consumption * 365;
    //      $('#p_running_fuel').val(cal_p_running_fuel);
    // });

    // $("#k_avg_usage_hrs").change(function() {
    //     $("#p_avg_usage_hrs").val(this.value);
    //     var p_no_of_year = parseFloat($("#p_no_of_year").val());
    //     var p_avg_usage_hrs = parseFloat(this.value);
    //     var p_fuel_consumption = parseFloat($("#p_fuel_consumption").val());
    //     var cal_p_running_fuel = p_no_of_year * p_avg_usage_hrs * p_fuel_consumption * 365;
    //      $('#p_running_fuel').val(cal_p_running_fuel);
    // });

    $("#k_fuel_consumption").change(function() {
        var k_no_of_year = parseFloat($("#k_no_of_year").val());
        var k_avg_usage_hrs = parseFloat($("#k_avg_usage_hrs").val());
        var k_fuel_consumption = parseFloat(this.value);
        var cal_k_running_fuel = k_no_of_year * k_avg_usage_hrs * k_fuel_consumption * 365;
        $('#k_running_fuel').val(cal_k_running_fuel);

    });

     $("#p_price_of_diesel").change(function() {
          // console.log('current val : '+this.value);
        var p_fuel_consumption = parseFloat($("#p_fuel_consumption").val());
        var p_price_of_diesel = parseFloat(this.value);
        var p_avg_usage_hrs = parseFloat($("#p_avg_usage_hrs").val());
        var p_running_cost_per_day = p_fuel_consumption*p_price_of_diesel*p_avg_usage_hrs;
        $('#p_running_cost_per_day').val(p_running_cost_per_day);

        //calcultn running cost in 5 years
         var p_no_of_year = parseFloat($("#p_no_of_year").val());

         var cal_p_running_fuel = p_no_of_year * p_running_cost_per_day * 365;
         $('#p_running_fuel').val(cal_p_running_fuel);
         console.log(cal_p_running_fuel);
       
     });

     $("#k_price_of_diesel").change(function() {
        var k_fuel_consumption = parseFloat($("#k_fuel_consumption").val());
        var k_price_of_diesel = parseFloat(this.value);
        var k_avg_usage_hrs = parseFloat($("#k_avg_usage_hrs").val());
        var k_running_cost_per_day = k_fuel_consumption*k_price_of_diesel*k_avg_usage_hrs;
        $('#k_running_cost_per_day').val(k_running_cost_per_day);

        //calcultn running cost in 5 years
         var k_no_of_year = parseFloat($("#k_no_of_year").val());

         var cal_k_running_fuel = k_no_of_year * k_running_cost_per_day * 365;
         $('#k_running_fuel').val(cal_k_running_fuel);
         console.log(cal_k_running_fuel);
       
     });

    

    $("#p_service_period").change(function() {
        var p_service_period = this.value;
        var p_avg_usage_hrs = parseFloat($("#p_avg_usage_hrs").val());
        var p_no_of_year = parseFloat($("#p_no_of_year").val());
        console.log(Math.round((p_avg_usage_hrs*p_no_of_year*365)/p_service_period));
        var cal_p_no_of_service = Math.round((p_avg_usage_hrs*p_no_of_year*365)/p_service_period);
        $("#p_no_of_service").val(cal_p_no_of_service);
    });

    $("#k_service_period").change(function() {
        var k_service_period = this.value;
        var k_avg_usage_hrs = parseFloat($("#k_avg_usage_hrs").val());
        var k_no_of_year = parseFloat($("#k_no_of_year").val());
        console.log(Math.round((k_avg_usage_hrs*k_no_of_year*365)/k_service_period));
        var cal_k_no_of_service = Math.round((k_avg_usage_hrs*k_no_of_year*365)/k_service_period);
        $("#k_no_of_service").val(cal_k_no_of_service);
    });

    // $("#k_service_period").change(function() {
    //     $('#p_service_period').val(this.value);
    //     if (this.value == 300) {
    //         var cal_p_no_of_service = 4 * 5;
    //         $("#p_no_of_service").val(cal_p_no_of_service);
    //         $("#k_no_of_service").val(cal_p_no_of_service);
    //     }else{
    //          var cal_k_no_of_service = 2 * 5;
    //         // console.log(cal_k_no_of_service);
    //         $("#p_no_of_service").val(cal_k_no_of_service);
    //         $("#k_no_of_service").val(cal_k_no_of_service);
    //     }
    // });

    $("#p_service_cost").change(function() {
        var p_service_cost = parseFloat(this.value);
        var cal_p_service_cost5 = p_service_cost * parseFloat($("#p_no_of_service").val());
        $("#p_service_cost5").val(cal_p_service_cost5);
    });

    $("#k_service_cost").change(function() {
        var k_service_cost = parseFloat(this.value);
        var cal_k_service_cost5 = k_service_cost * parseFloat($("#k_no_of_service").val());
        $("#k_service_cost5").val(cal_k_service_cost5);
    });


});

myApp.onPageInit('findus_map', function(page) {


    $('.Kathmandu-marker').click(function(){

        $('.map-container p').removeClass('bluecolor');
        $('.map-container i').removeClass('bluecolor');


        $('.Kathmandu-marker p').addClass('bluecolor');
        $('.Kathmandu-marker i').addClass('bluecolor');



        var html = "<div class='col-30 text_left'>"+
        "<p>District</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>Kathmandu</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>Showroom Name</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>Agni Energy Pvt Ltd</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>Detailed Address</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>Gairidhara, Kathmandu</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>Contact No</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>+977-9841819997</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>E-Mail Id</p>"+
        "</div>"+
        "<div class='col-70 text_left' style='margin-bottom: 1%'>"+
        "<p>umeshraj.wasti@agniinc.com.np</p>"+
        "</div>"+
        "<div style='clear:both'></div>"+
        "<hr>"+
        "<div class='col-30 text_left'>"+
        "<p>District</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>Kathmandu</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>Showroom Name</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>BS Trade</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>Detailed Address</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>Teku, Kathmandu</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>Contact No</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>01-4258884</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>E-Mail Id</p>"+
        "</div>"+
        "<div class='col-70 text_left' style='margin-bottom: 1%'>"+
        "<p>tradeteku@gmail.com</p>"+
        "</div>"+
        "<div style='clear:both'></div>"+
        "<hr>"+
        "<div class='col-30 text_left'>"+
        "<p>District</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>Kathmandu</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>Showroom Name</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>Power Solutiong Twenty four Service P. Ltd.</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>Detailed Address</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>Ramsahapath, Putalisadak</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>Contact No</p>"+
        "</div>"+
        "<div class='col-70 text_left'>"+
        "<p>014226047/9851105031</p>"+
        "</div>"+
        "<div class='col-30 text_left'>"+
        "<p>E-Mail Id</p>"+
        "</div>"+
        "<div class='col-70 text_left' style='margin-bottom: 1%'>"+
        "<p>powersolutiontwentyfourseven@gmail.com</p>"+
        "</div>"+
        "<div style='clear:both'></div>"+
        "<hr>";

        $('.findus_dealer_address').html(html);

    });




    $('.Kaski-marker').click(function(){

        $('.map-container p').removeClass('bluecolor');
        $('.map-container i').removeClass('bluecolor');


        $('.Kaski-marker p').addClass('bluecolor');
        $('.Kaski-marker i').addClass('bluecolor');



        var html = "<div class='col-30 text_left'>"+
                    "<p>District</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Kaski</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Showroom Name</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Deep Traders Pvt. Ltd.</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Detailed Address</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Pokhara</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Contact No</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>061-528589/9856020198</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>E-Mail Id</p>"+
                    "</div>"+
                    "<div class='col-70 text_left' style='margin-bottom: 1%'>"+
                    "<p>animakarna@gmail.com/batajoor@yahoo.com</p>"+
                    "</div>"+
                    "<div style='clear:both'></div>"+
                    "<hr";

        $('.findus_dealer_address').html(html);

    });

    
    
    

    $('.Chitwan-marker').click(function(){

        $('.map-container p').removeClass('bluecolor');
        $('.map-container i').removeClass('bluecolor');


        $('.Chitwan-marker p').addClass('bluecolor');
        $('.Chitwan-marker i').addClass('bluecolor');



        var html =  "<div class='col-30 text_left'>"+
                    "<p>District</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Chitwan</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Showroom Name</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Deep Traders Pvt. Ltd.</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Detailed Address</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Chitwan</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Contact No</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>056-527471/056-522168</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>E-Mail Id</p>"+
                    "</div>"+
                    "<div class='col-70 text_left' style='margin-bottom: 1%'>"+
                    "<p>animakarna@gmail.com/batajoor@yahoo.com</p>"+
                    "</div>"+
                    "<div style='clear:both'></div>"+
                    "<hr>";

        $('.findus_dealer_address').html(html);

    });

    $('.Rupendehi-marker').click(function(){

        $('.map-container p').removeClass('bluecolor');
        $('.map-container i').removeClass('bluecolor');

        $('.Rupendehi-marker p').addClass('bluecolor');
        $('.Rupendehi-marker i').addClass('bluecolor');


        var html = "<div class='col-30 text_left'>"+
                    "<p>District</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Rupendehi</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Showroom Name</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Saurav Enterprises</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Detailed Address</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Bhirahawa</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Contact No</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>071-522959/071-526419</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>E-Mail Id</p>"+
                    "</div>"+
                    "<div class='col-70 text_left' style='margin-bottom: 1%'>"+
                    "<p>vikash.Saurav369@gmail.com</p>"+
                    "</div>"+
                    "<div style='clear:both'></div>"+
                    "<hr>";

        $('.findus_dealer_address').html(html);

    });

    $('.Dang-marker').click(function(){

        $('.map-container p').removeClass('bluecolor');
        $('.map-container i').removeClass('bluecolor');


        $('.Dang-marker p').addClass('bluecolor');
        $('.Dang-marker i').addClass('bluecolor');



        var html =  "<div class='col-30 text_left'>"+
                    "<p>District</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Dang</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Showroom Name</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Digital Power Solution</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Detailed Address</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Dang</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Contact No</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>N.A</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>E-Mail Id</p>"+
                    "</div>"+
                    "<div class='col-70 text_left' style='margin-bottom: 1%'>"+
                    "<p>digitalpowersolution@gmail.com</p>"+
                    "</div>"+
                    "<div style='clear:both'></div>"+
                    "<hr>";

        $('.findus_dealer_address').html(html);

    });

    $('.Morang-marker').click(function(){

        $('.map-container p').removeClass('bluecolor');
        $('.map-container i').removeClass('bluecolor');

        $('.Morang-marker p').addClass('bluecolor');
        $('.Morang-marker i').addClass('bluecolor');


        var html =  "<div class='col-30 text_left'>"+
                    "<p>District</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Morang</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Showroom Name</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Eastern Star Earthmovers</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Detailed Address</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Biratnagar</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Contact No</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>9852030707</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>E-Mail Id</p>"+
                    "</div>"+
                    "<div class='col-70 text_left' style='margin-bottom: 1%'>"+
                    "<p>easternstarbrt@gmail.com,easternstardg@gmail.com</p>"+
                    "</div>"+
                    "<div style='clear:both'></div>"+
                    "<hr>";

        $('.findus_dealer_address').html(html);

    });

    $('.Dhanusa-marker').click(function(){

        $('.map-container p').removeClass('bluecolor');
        $('.map-container i').removeClass('bluecolor');

        $('.Dhanusa-marker p').addClass('bluecolor');
        $('.Dhanusa-marker i').addClass('bluecolor');


        var html = "<div class='col-30 text_left'>"+
                    "<p>District</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Dhanusa</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Showroom Name</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Shree Krishna Distributors</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Detailed Address</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Janakapur</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Contact No</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>9854028324</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>E-Mail Id</p>"+
                    "</div>"+
                    "<div class='col-70 text_left' style='margin-bottom: 1%'>"+
                    "<p>krishanadistributers@gmail.com</p>"+
                    "</div>"+
                    "<div style='clear:both'></div>"+
                    "<hr>";

        $('.findus_dealer_address').html(html);

    });

    $('.Kailali-marker').click(function(){

        $('.map-container p').removeClass('bluecolor');
        $('.map-container i').removeClass('bluecolor');

        $('.Kailali-marker p').addClass('bluecolor');
        $('.Kailali-marker i').addClass('bluecolor');



        var html = "<div class='col-30 text_left'>"+
                    "<p>District</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Kailali</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Showroom Name</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>RKD Suppliers</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Detailed Address</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>Dhangadi</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>Contact No</p>"+
                    "</div>"+
                    "<div class='col-70 text_left'>"+
                    "<p>9801317912/9848405116</p>"+
                    "</div>"+
                    "<div class='col-30 text_left'>"+
                    "<p>E-Mail Id</p>"+
                    "</div>"+
                    "<div class='col-70 text_left' style='margin-bottom: 1%'>"+
                    "<p>spsolarcompany@gmail.com</p>"+
                    "</div>"+
                    "<div style='clear:both'></div>"+
                    "<hr>";

        $('.findus_dealer_address').html(html);


    });

   


    // $('.mapcontainer').css('visibility','visible');
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

        var onSuccess = function(data) {
            // alert('message: ' + data.message);
        };
        // onError Callback receives a json object
        function onError(error) {
            alert('message error: ' + error.message);
        }
        window.cordova.plugins.FileOpener.openFile("files/Download/Brochure1.pdf", onSuccess, onError);
        // window.cordova.plugins.FileOpener.openFile(cordova.file.applicationDirectory+"www/NEPAL-BANGLADESH-BROCHURE.pdf", onSuccess, onError);
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

        window.cordova.plugins.FileOpener.openFile("files/Download/Brochure2.pdf", onSuccess, onError);

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

    if(title == '7.5 kVA - 20 kVA'){


                var html  = 
                "<img class='machine-container' src='img/smallcontainer.jpg'><div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>7.5 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"7.5 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >18</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >2185 GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>2</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>10 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>2150</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1398</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >750</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>10 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"10 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >18</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >2185 GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>2</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>14 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>2150</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1398</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >800</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>12.5 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"12.5 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >18</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >2185 GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>2</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>17.5 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>2150</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1398</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >800</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>15 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"15 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >25</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >3255 GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>3</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>21 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>2150</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1398</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >850</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>20 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"20 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >30</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >3305 GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>3</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>26 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>2150</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1398</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >900</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>";

    }else if(title == '25 kVA - 40 kVA'){
        var html = 
                "<img class='machine-container' src='img/smallcontainer.jpg'><div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>25 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"25 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >37</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >4375 GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>4</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>35 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>2500</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1376</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >940</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>30 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"30 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >44</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >4445 TM GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>4</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>42 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>2500</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1376</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >950</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>40 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"40 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >57</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >4575 TCI GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>4</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>56 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>2500</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1030</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1376</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >1000</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>";
        


    }else if(title == "50 kVA - 62.5 kVA"){

        var html = 
            "<img class='machine-container' src='img/smallcontainer.jpg'><div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>50 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"50 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >72</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >4725 GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>4</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>70 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>3495</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1150</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1450</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >1250</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>62.5 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"62.5 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >90</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >4905 GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>4</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>87.5 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>3495</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1150</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1450</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >1250</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>";

    }else if(title == '75 kVA'){

        var html = 
             "<img class='machine-container' src='img/smallcontainer.jpg'><div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>75 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"75 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >103</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >41035 GM</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>4</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>105 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>3000</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1150</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>2135</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Approximate Dry Weight</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                    "<p class='table-conntent-number' >1350</p>"+
                    "</div>"+
                    "<div class='col-30 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>";

    }else if(title == '82.5 kVA - 100 kVA'){

        var html = 
            "<img class='machine-container' src='img/bigcontainer.jpg'><div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>82.5 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"82.5 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >106</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >4.12TCA</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>4</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>150 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-50 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>3200</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>2290</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        // "<div class='col-30 listzoom'>"+
                   //  "<p class='table-conntent'>Approximate Dry Weight</p>"+
                   //  "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                   //  "<p class='table-conntent-number' >1250</p>"+
                    // "</div>"+
                    "<div class='col-50 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>100 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"100 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >128</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >4.12TCA</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>4</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>139 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-50 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>3200</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>2290</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                        // "<div class='col-30 listzoom'>"+
                   //  "<p class='table-conntent'>Approximate Dry Weight</p>"+
                   //  "<p style='font-size: 15px;margin-top: -18px;'>Of DG set (lits)</p>"+
                   //  "<p class='table-conntent-number' >1250</p>"+
                    // "</div>"+
                    "<div class='col-50 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>";

    }else if(title == '125 kVA - 140 kVA'){
        var html = 
            "<img class='machine-container' src='img/bigcontainer.jpg'><div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>125 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"125 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >156</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >S12-III</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>6</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>174 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-50 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>3750</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1750</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                    "<div class='col-50 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>140 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"140 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >175</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >S12-II</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>6</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>195 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-50 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>3750</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1750</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                    "<div class='col-50 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>";
            
    }else if(title == '160 kVA'){
        var html = 
        "<img class='machine-container' src='img/bigcontainer.jpg'><div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>160 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"160 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >199</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >S12-I</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>6</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>223 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-50 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>3790</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1300</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1875</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                    "<div class='col-50 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>";
        
    }else if(title == '180 kVA - 200 KVA'){
        var html = 
            "<img class='machine-container' src='img/bigcontainer.jpg'><div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>180 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"180 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >222</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >SE12-I</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>6</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>250 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-50 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>4500</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1500</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1875</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                    "<div class='col-50 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='book_content'>"+
                    "<h2 class='book_heading' class='product_specification_title'>200 kVA<hr class='cust-line hvr-underline-from-left'></h2>"+
                    "<div class='outzoom'></div>"+
                    "<a href='#' onclick='redirect_book_now(\"200 kVA\")'><input class='book_now hvr-fade' type='submit' value='ENQUIRY NOW' name=''></a>"+
                "</div>"+
                "<div style='clear:both'></div>"+
                "<div class='book_now_input'>"+
                    "<div class='content-block cust_table' style='padding: 0 45px;margin-top: 1%;'>"+
                    "<div class='row no-gutter'>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Engine Power</p>"+
                    "<p class='table-conntent-number' >245</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Engine Model</p>"+
                    "<p class='table-conntent-number' >6.12TCE</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>No of cylinders</p>"+
                    "<p class='table-conntent-number'>6</p>"+
                    "</div>"+
                    "<div class='col-25 listzoom height'>"+
                    "<p class='table-conntent'>Rated Speed RPM</p>"+
                    "<p class='table-conntent-number'>1500 / 50</p>"+
                    "</div>"+                  
                    "</div>"+
                    "<div class='row no-gutter'>"+
                        "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Rated Current(AMP)</p>"+
                    "<p class='table-conntent-number ' style='margin-top: -16px;'>278 AMP</p>"+
                    "</div>"+
                    "<div class='col-40 listzoom'>"+
                    "<p class='table-conntent' style='margin-top:11px'>Alternator Make</p>"+
                    "<p class='table-conntent-number' style='margin-top:-4%;'>Cromptom Greaves / Leroy Somer</p>"+                 
                    "</div>"+
                    "<div class='col-30 listzoom'>"+
                    "<p class='table-conntent'>Cooling System</p>"+
                    "<p style='font-size: 15px;margin-top: -18px;'>(Air Cooled/Water Cooled)</p>"+
                    "<p class='table-conntent-number' >Water Cooled</p>"+
                    "</div>"+
                    "</div>"+
                    "<div class='row no-gutter'>"+
                         "<div class='col-50 listzoom'>"+
                    "<p class='table-conntent'>Dimensions</p>"+
                    "<br>"+
                    "<p class='table-conntent-number text-left' style='margin-top: -22px'>4500</p>"+
                    "<p class='table-conntent-number-2 text-left' style='font-size: 15px;margin-top: -30px;'>Length</p>"+
                    "<p class='table-conntent-number text-center' style='margin-top: -60px;'>1500</p>"+
                    "<p class='table-conntent-number-2 text-center' style='font-size: 15px;margin-top: -32px;'>Width</p>"+
                    "<p class='table-conntent-number text-right' style='margin-top: -60px;'>1875</p>"+
                    "<p class='table-conntent-number-2 text-right' style='font-size: 15px;margin-top: -32px;'>Height</p>"+
                    "</div>"+
                    "<div class='col-50 listzoom fullzindex'>"+
                    "<p class='table-conntent' style='margin-top: 4%;'>Noise Level</p>"+
                    // "<p style='font-size: 15px;margin-top: -18px;'>with top hood if any (mm) (lits)</p>"+
                    "<p class='table-conntent-number' style='margin-top: -3%;'>75 dBA at 1 m</p>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>";
            
    }


    

    $('.myspecificationContainer').html(html);

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


    $('.openBank').click(function(){

        console.log("video open");
        var onSuccess = function(data) {
            // alert('message: ' + data.message);
        };
        // onError Callback receives a json object
        function onError(error) {
            alert('message error: ' + error.message);
        }
        window.cordova.plugins.FileOpener.openFile("files/Download/bank.mp4", onSuccess, onError);

    })

    $('.openHotel').click(function(){

        console.log("video open");
        
        var onSuccess = function(data) {
            // alert('message: ' + data.message);
        };
        // onError Callback receives a json object
        function onError(error) {
            alert('message error: ' + error.message);
        }
        window.cordova.plugins.FileOpener.openFile("files/Download/hotel.mp4", onSuccess, onError);

    })

    $('.openCollege').click(function(){

        console.log("video open");

        var onSuccess = function(data) {
            // alert('message: ' + data.message);
        };
        // onError Callback receives a json object
        function onError(error) {
            alert('message error: ' + error.message);
        }
        window.cordova.plugins.FileOpener.openFile("files/Download/college.mp4", onSuccess, onError);

    })

    $('.openHospital').click(function(){

        console.log("video open");
        
        var onSuccess = function(data) {
            // alert('message: ' + data.message);
        };
        // onError Callback receives a json object
        function onError(error) {
            alert('message error: ' + error.message);
        }
        window.cordova.plugins.FileOpener.openFile("files/Download/hospital.mp4", onSuccess, onError);

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
            '<td class="vz_inner_content_left">District</td>' +
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


    $('.openMahindraVideo').click(function(){

        console.log("video open");
        var onSuccess = function(data) {
            // alert('message: ' + data.message);
        };
        // onError Callback receives a json object
        function onError(error) {
            alert('message error: ' + error.message);
        }
        window.cordova.plugins.FileOpener.openFile("files/Download/aboutMahindra.mp4", onSuccess, onError);

    })


      $(".owl-carousel-rise").owlCarousel({
        items : 1,
        singleItem:true,
        navigation:true,
      });

      $(".owl-carousel-powerol").owlCarousel({
        items : 1,
        singleItem:true,
        navigation:true,
      });

      $(".owl-carousel-agni").owlCarousel({
        items : 1,
        singleItem:true,
        navigation:true,
      });

     $(".owl-carousel-reach").owlCarousel({
        items : 1,
        singleItem:true,
        navigation:true,
      });


      $( ".owl-prev").html('<i class="fa fa-chevron-left fa-3x" style="color:black"></i>');
      $( ".owl-next").html('<i class="fa fa-chevron-right fa-3x" style="color:black"></i>');

      
      // $(".owl-carousel-powerol").owlCarousel();
      // $(".owl-carousel-agni").owlCarousel();


  

      $('.close-ppt').click(function(){


        $('.navbar').css('z-index','9');

        $('.rise-overlay').animate({
            top:'100%',
        },'slow');

        $('.powerol-overlay').animate({
            top:'100%',
        },'slow');

        $('.agni-overlay').animate({
            top:'100%',
        },'slow');

        $('.reach-overlay').animate({
            top:'100%',
        },'slow');

      })


    $('.showpptRise').on('click', function() {

        console.log('clicked');
        $('.rise-overlay').animate({
            top:'0%',
        },'slow');

        $('.navbar').css('z-index','1');


        // var onSuccess = function(data) {
        // };
        // function onError(error) {
        //     alert('message: ' + error.message);
        // }
        // window.cordova.plugins.FileOpener.openFile("files/Download/mahindraRise.ppsx", onSuccess, onError);
        // file:///storage/emulated/0/Android/data/com.kreaserv.Powerol/
    })

    $('.showpptPowerol').on('click', function() {


        console.log('clicked');
        $('.powerol-overlay').animate({
            top:'0%',
        },'slow');

        $('.navbar').css('z-index','1');


        // var onSuccess = function(data) {
        // };
        // function onError(error) {
        //     alert('message: ' + error.message);
        // }
        // window.cordova.plugins.FileOpener.openFile("files/Download/mahindraPowerol.ppsx", onSuccess, onError);
        // file:///storage/emulated/0/Android/data/com.kreaserv.Powerol/
    })


    $('.showpptAgni').on('click', function() {

        console.log('clicked');

        $('.agni-overlay').animate({
            top:'0%',
        },'slow');

        $('.navbar').css('z-index','1');


        // var onSuccess = function(data) {
        // };
        // function onError(error) {
        //     alert('Amessage: ' + error.message);
        // }
        // window.cordova.plugins.FileOpener.openFile("files/Download/agni.ppsx", onSuccess, onError);
        // // file:///storage/emulated/0/Android/data/com.kreaserv.Powerol/
    })

    $('.showpptReach').on('click', function() {

        console.log('clicked');

        $('.reach-overlay').animate({
            top:'0%',
        },'slow');

        $('.navbar').css('z-index','1');


        // var onSuccess = function(data) {
        // };
        // function onError(error) {
        //     alert('Amessage: ' + error.message);
        // }
        // window.cordova.plugins.FileOpener.openFile("files/Download/agni.ppsx", onSuccess, onError);
        // // file:///storage/emulated/0/Android/data/com.kreaserv.Powerol/
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


    $('.item').click(function(){
        $('.item').removeClass('home_hover');
        $(this).addClass('home_hover');
        // alert('clicked');
    })

    getdate();
    days();


    $(".owl-carousel-home").owlCarousel({
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

        if(Lockr.get('installedapp') == undefined){

            var onSuccess = function(data) {
                // alert('message: ' + data.message);
                Lockr.set('installedapp','true');
            };

            function onError(error) {
                // alert('message: ' + error.message);
            }
            window.cordova.plugins.FileOpener.openFile("files/download/loadcalculator.apk", onSuccess, onError);


        }else{
            
            navigator.startApp.start("com.app.pc", function(message) { /* success */
            },
            function(error) { /* error */
                alert(error);
            });


        }

        


    })  

    $('.backbutton').on('click', function() {
        mainView.router.back();
    });

});