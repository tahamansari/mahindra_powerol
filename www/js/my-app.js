var base_url = 'http://kreaserv-tech.com/mahindra_admin/index.php/api';
var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var token = {};
var list_data = {};

var myApp = new Framework7({

    pushState: true,
    // swipePanel: 'right',
    swipeBackPage: false,
    preloadPreviousPage: false,
    uniqueHistory: true,
    uniqueHistoryIgnoreGetParameters: true,
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


var token = Lockr.get('token');
if (token != undefined) {
    mainView.router.load({
        url: 'home.html',
        ignoreCache: false,
    });
}



myApp.onPageInit('about', function(page) {
    $('.backbutton').on('click', function() {
        mainView.router.back();
    });

})

$$(document).on('pageInit', function(e) {
    var page = e.detail.page;
    if (page.name === 'about') {

        myApp.alert("this is about page");
    }
})

myApp.onPageInit('findus', function(page) {
    $('.backbutton').on('click', function() {
        mainView.router.back();
    });
});

myApp.onPageInit('cba', function(page) {
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
    $('.backbutton').on('click', function() {
        mainView.router.back();
    });

});

myApp.onPageInit('findus_dealer', function(page) {
    $('.backbutton').on('click', function() {
        mainView.router.back();
    });

});

myApp.onPageInit('product_listing', function(page) {


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
            alert('message: ' + error.message);
        }

        window.cordova.plugins.FileOpener.openFile("files/Download/NEPAL-BANGLADESH-BROCHURE.pdf", onSuccess, onError);
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
            alert('message: ' + error.message);
        }
        window.cordova.plugins.FileOpener.openFile("files/Download/REST-OF-THE-WORLD-BROCHURE.pdf", onSuccess, onError);
    })



    $('.listing_input_red').css('background-color', 'transparent');
    $('.listing_input_blue').css('background-color', 'transparent');

    $('.backbutton').on('click', function() {
        mainView.router.back();
    });
});

myApp.onPageInit('product_specification', function(page) {


    $('.outzoom').click(function() {
        console.log(this);
        $('.listzoom').removeClass('show');
        $('.listzoom').removeClass('zoominlisting');
        $('.listzoom').removeClass('blur');
    })

    $('.outzoombottom').click(function() {
        console.log(this);
        $('.listzoom').removeClass('show');
        $('.listzoom').removeClass('zoominlisting');
        $('.listzoom').removeClass('blur');
    })

    $('.listzoom').click(function() {

        console.log(this);
        $('.listzoom').removeClass('show');
        $('.listzoom').addClass('blur');
        $(this).removeClass('blur');

        $('.listzoom').removeClass('zoominlisting');
        $(this).addClass('zoominlisting');
        $(this).addClass('show');
    })




    $('.backbutton').on('click', function() {
        mainView.router.back();
    });

    var title = page.query.title;
    $('#product_specification_h1').text('PRODUCT LISTING /' + title);
    $('#product_specification_title').text(title);

    // console.log(title)

});

myApp.onPageInit('video', function(page) {
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
    $('.backbutton').on('click', function() {
        mainView.router.back();
    });
    $("#tab1_button").css("background-color", "#3c73c0");
    $("#tab1_button").css("color", "#fff");

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
            '<a class="enquiry_list_edit_button" href="" onclick="edit_list_book(' + count + ')"><img  src="img/edit.png"></a>' +
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


    $('.showppt').on('click', function() {

        // alert('show ppt clicked');
        // onSuccess Callback
        // This method accepts a JSON object, which contains the
        // message response
        var onSuccess = function(data) {
            // alert('message: ' + data.message);
        };
        // onError Callback receives a json object
        function onError(error) {
            alert('message: ' + error.message);
        }

        // window.cordova.plugins.FileOpener.openFile("file:///android_assets/data/data/com.kreaserv.Powerol/files/Download/mahindra.pptx", onSuccess, onError);
        window.cordova.plugins.FileOpener.openFile("files/Download/mahindraone.ppsx", onSuccess, onError);
        // file:///storage/emulated/0/Android/data/com.kreaserv.Powerol/

    })

    $('.backbutton').on('click', function() {
        mainView.router.back();
    });
    // onSuccess Callback
    // This method accepts a JSON object, which contains the
    // boolean response
    //
    // var onSuccess = function(data) {
    //     alert('extension: ' + data.extension + '\n' +
    //           'canBeOpen: ' + data.canBeOpen);
    // };

    // // onError Callback receives a json object
    // //
    // function onError(error) {
    //     alert('message: '  + error.message);
    // }



    // window.cordova.plugins.FileOpener.canOpenFile("file:///storage/emulated/0/Download/local_file.pdf", onSuccess, onError);

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

    $('#open-application').click(function() {
        navigator.startApp.start("com.phonegap.helloworld", function(message) { /* success */

        },
        function(error) { /* error */
            alert(error);
        });
    })


    $('#date').click(function() {

        alert('date clicked');
        // This method accepts a JSON object, which contains the
        // message response
        var onSuccess = function(data) {
            alert('success message: ' + data.message);
        };
        // onError Callback receives a json object
        function onError(error) {
            alert('error message: ' + error.message);
        }

        window.cordova.plugins.FileOpener.openFile("files/Download/mahindraone.ppsx", onSuccess, onError);
    })



    getdate();
    days();
    $(".owl-carousel").owlCarousel();

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
                name: 'Silence Certified <br> <img src="img/popup_inner_icon.png" class="pie_sec1">',
                y: 20,
                drilldown: 'Silence Certified',
                color: '#eb113b',
            }, {
                name: 'Peace of Mind <br> <img src="img/popup_inner_icon.png" class="pie_sec2">',
                y: 20,
                color: '#0075b6',
                drilldown: 'Peace of Mind'
            }, {
                name: 'Fuel Intelligent <br> <img src="img/popup_inner_icon.png" class="pie_sec3">',
                y: 20,
                color: '#eb113b',
                drilldown: 'Fuel Intelligent'
            }, {
                name: 'Fastest Delivery <br> <img src="img/popup_inner_icon.png" class="pie_sec4">',
                y: 20,
                color: '#0075b6',
                drilldown: 'Fastest Delivery'
            }, {
                name: 'Power Brand <br> <img src="img/popup_inner_icon.png" class="pie_sec5">',
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
                    name: '<img src="img/popup_inner_icon1.png" style="width: 50%;"><h1 style="margin: 4%;">Peace of Mind</h1><p style="margin: 5px; line-height: 25px;">Compliance to Stringent Noise <br>& <br> Emission norms.</p>',
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
                    name: '<img src="img/popup_inner_icon1.png" style="width: 50%;"><h1 style="margin: 4%;">Fuel Intelligent</h1><p style ="margin: 5px; line-height: 25px;">Compliance to Stringent Noise <br>& <br> Emission norms.</p>',
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
                    name: '<img src="img/popup_inner_icon1.png" style="width: 50%;"><h1 style="margin: 4%;">Fastest Delivery</h1><p style ="margin: 5px; line-height: 25px;">Compliance to Stringent Noise <br>& <br> Emission norms.</p>',
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
                    name: '<img src="img/popup_inner_icon1.png" style="width: 50%;"><h1 style="margin: 4%;">Power Brand</h1><p sty="margin: 5px; line-height: 25px;">Compliance to Stringent Noise <br>& <br> Emission norms.</p>',
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

});

$$(document).on('pageInit', '.page[data-page="about"]', function(e) {

})