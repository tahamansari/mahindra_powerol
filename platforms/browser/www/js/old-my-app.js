var base_url = 'http://kreaserv-tech.com/mahindra_admin/index.php/api';
var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var token = {};

var myApp = new Framework7({

    pushState: true,
    // swipePanel: 'right',
    swipeBackPage:false,
    preloadPreviousPage: false,
    uniqueHistory: true,
    uniqueHistoryIgnoreGetParameters: true,
    modalTitle: 'Powerol',
    imagesLazyLoadPlaceholder: 'img/lazyload.jpg',
    imagesLazyLoadThreshold: 50,

});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
	// dynamicNavbar: true
});

mainView.hideNavbar();


var token = Lockr.get('token');

myApp.onPageInit('about', function (page) {

})

$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    if (page.name === 'about'){
    	
    	myApp.alert("this is about page");
    }
})

myApp.onPageInit('findus', function(page) {
});

myApp.onPageInit('findus_map', function(page) {

});

myApp.onPageInit('findus_dealer', function(page) {
   
});

myApp.onPageInit('book_now', function(page) {
});

myApp.onPageInit('product_listing', function(page) {
});

myApp.onPageInit('product_specification', function(page) {
});

myApp.onPageInit('video', function(page) {
    // var myPhotoBrowserPopupDark = myApp.photoBrowser({
    // photos : [
    //     {
    //         html: '<iframe width="100%" height="215" src="http://www.youtube.com/embed/lmc21V-zBq0?list=PLpj0FBQgLGEr3mtZ5BTwtmSwF1dkPrPRM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    //     },
    // ],
    // theme: 'dark',
    // type: 'standalone'
    // });
    // $('.video_button_view_profile').on('click', function () {
    //      myPhotoBrowserPopupDark.open();
    // });
});

myApp.onPageInit('enquiry_form', function(page) {
    $("#tab1_button").css("background-color", "#3c73c0");
    $("#tab1_button").css("color", "#fff");

    $('#tab1_button').on('click', function () {
        $("#tab1_button").css("background-color", "#3c73c0");
        $("#tab1_button").css("color", "#fff");
        $("#tab2_button").css("background-color", "");
        $("#tab2_button").css("color", "#3c73c0");
        myApp.showTab('#tab1');
    });
 
    $('#tab2_button').on('click', function () {
        myApp.showTab('#tab2');
        $("#tab2_button").css("background-color", "#3c73c0");
        $("#tab2_button").css("color", "#fff");
        $("#tab1_button").css("background-color", "");
        $("#tab1_button").css("color", "#3c73c0");
    });
});

myApp.onPageInit('our_story', function(page) {
    // var myPhotoBrowserPopupDark = myApp.photoBrowser({
    //     photos : [
    //         {
    //             html: '<iframe src="https://onedrive.live.com/embed?cid=060AC7C6A4465D4A&resid=60AC7C6A4465D4A%21112&authkey=AB6qsUMz2m9nWoQ&em=2" width="402" height="327" frameborder="0" scrolling="no"></iframe>',
    //         },
    //     ],
    //     theme: 'dark',
    //     type: 'standalone'
    //     });
    // $('.our_story_button_view_profile').on('click', function () {
    //     window.open('')
    // });
});

myApp.onPageInit('inside_outside', function(page) {
    $("#tab1_button").css("background-color", "#0173bc");
    $("#tab1_button").css("color", "#fff");
    $("#tab1_button").css("border", "2px solid #0173bc");

    $('#tab1_button').on('click', function () {
         myApp.showTab('#tab1');
        $("#tab1_button").css("background-color", "#0173bc");
        $("#tab1_button").css("color", "#fff");
        $("#tab1_button").css("border", "2px solid #0173bc");
        $("#tab2_button").css("background-color", "");
        $("#tab2_button").css("color", "#fff");
        $("#tab2_button").css("border", "2px solid #fff");
    });
 
    $('#tab2_button').on('click', function () {
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
    $("#tab1_button").css("background-color", "#0173bc");
    $("#tab1_button").css("color", "#fff");

    $('#tab1_button').on('click', function () {
        $("#tab1_button").css("background-color", "#0173bc");
        $("#tab1_button").css("color", "#fff");
        $("#tab2_button,#tab3_button,#tab4_button,#tab5_button").css("background-color", "");
        $("#tab2_button,#tab3_button,#tab4_button,#tab5_button").css("color", "#3c73c0");
        myApp.showTab('#tab1');
    });
 
    $('#tab2_button').on('click', function () {
        myApp.showTab('#tab2');
        $("#tab2_button").css("background-color", "#0173bc");
        $("#tab2_button").css("color", "#fff");
        $("#tab1_button,#tab3_button,#tab4_button,#tab5_button").css("background-color", "");
        $("#tab1_button,#tab3_button,#tab4_button,#tab5_button").css("color", "#3c73c0");
    });

    $('#tab3_button').on('click', function () {
        myApp.showTab('#tab3');
        $("#tab3_button").css("background-color", "#0173bc");
        $("#tab3_button").css("color", "#fff");
        $("#tab1_button,#tab2_button,#tab4_button,#tab5_button").css("background-color", "");
        $("#tab1_button,#tab2_button,#tab4_button,#tab5_button").css("color", "#3c73c0");
    });


    $('#tab4_button').on('click', function () {
        myApp.showTab('#tab4');
        $("#tab4_button").css("background-color", "#0173bc");
        $("#tab4_button").css("color", "#fff");
        $("#tab1_button,#tab3_button,#tab2_button,#tab5_button").css("background-color", "");
        $("#tab1_button,#tab3_button,#tab2_button,#tab5_button").css("color", "#3c73c0");
    });

    $('#tab5_button').on('click', function () {
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
        if (accordion_content.style.maxHeight){
          accordion_content.style.maxHeight = null;
        } else {
          accordion_content.style.maxHeight = accordion_content.scrollHeight + "px";
        } 
      }
    }
});

myApp.onPageInit('5k_punch', function(page) {

    $('img').click(function(){

        $("img").removeClass('zoomin');
        $("img").removeClass('show');
        $('.innerp').css("display","none");

        $(this).addClass('zoomin');
        $(this).addClass('show');


        var cls = $(this).context.className.split(' ')[0]+"Content";
        $('.'+cls).find('.innerp').fadeIn('slow');

    })
   
});

myApp.onPageInit('home', function(page) {
    $(".owl-carousel").owlCarousel();
});

$$(document).on('pageInit', '.page[data-page="about"]', function (e) {

})