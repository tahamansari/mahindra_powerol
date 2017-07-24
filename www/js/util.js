var count = 0;

function j2s(json) {
    return JSON.stringify(json);
}

function goto_page(page) {

    mainView.router.load({

        url: page,
        // ignoreCache: false,
        
    });
}



function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// var token = Lockr.get('token');
// if (token != undefined) {
//     mainView.router.load({
//         url: 'home.html',
//         ignoreCache: false,
//     });
// }


//app login

function login() {

    console.log('login clicked');
    var email = $('#login-email').val();
    var password = $('#login-password').val();

    if (!email) {
        myApp.alert('Email Id should be provided.');
        return false;
    } else if (!email.match(email_regex)) {
        myApp.alert('Valid Email Id should be provided.');
        return false;
    }

    if (!password) {
        myApp.alert('Password should not be blank.');
        return false;
    }

    myApp.showIndicator();
    $.ajax({
        url: base_url + '/login',
        type: 'POST',
        crossDomain: true,
        data: {
            "email": email,
            "password": password,
        },
    })
    .done(function(res) {
        console.log('done: ' + j2s(res));
        myApp.hideIndicator();
        if (res.status == 'SUCCESS') {

            Lockr.set('token', res.data);
            token = Lockr.get('token');
            mainView.router.load({
                url: 'home.html',
                ignoreCache: false,
            });
        } else {
            myApp.alert('Email or Password Mismatch');
        }
    })
    .fail(function(err) {
        myApp.hideIndicator();
        myApp.alert('Some error occurred on connecting.');
        console.log('fail: ' + j2s(err));
    })
    .always(function() {});

}

function logout() {
    Lockr.flush();
    token = false;
    goto_page('index.html');
}

//back buttons
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    // console.log('device is now ready');

    // if (Lockr.get('downloadall') == undefined) {

    //     $('.overlay-downloading').fadeIn();

    //     var fileTransfer = new FileTransfer();
    //     var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/Brochure1.pdf");

    //     fileTransfer.download(
    //         uri,
    //         cordova.file.externalApplicationStorageDirectory + 'files/download/Brochure1.pdf',
    //         function(entry) {

    //             myApp.alert('Brochure1 Downloaded');
    //             var fileTransfer = new FileTransfer();
    //             var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/Brochure2.pdf");

    //             fileTransfer.download(
    //                 uri,
    //                 cordova.file.externalApplicationStorageDirectory + 'files/download/Brochure2.pdf',
    //                 function(entry) {

    //                     myApp.alert('Brochure2 Downloaded');
    //                     var fileTransfer = new FileTransfer();
    //                     var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/loadcalculator.apk");

    //                     fileTransfer.download(
    //                         uri,
    //                         cordova.file.externalApplicationStorageDirectory + 'files/download/loadcalculator.apk',
    //                         function(entry) {

    //                             myApp.alert('Loadcalculator Apk Downloaded');
    //                             var fileTransfer = new FileTransfer();
    //                             var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/videos/bank.mp4");

    //                             fileTransfer.download(
    //                                 uri,
    //                                 cordova.file.externalApplicationStorageDirectory + 'files/download/bank.mp4',
    //                                 function(entry) {

    //                                     myApp.alert('Bank Video Downloaded');
    //                                     var fileTransfer = new FileTransfer();
    //                                     var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/videos/college.mp4");

    //                                     fileTransfer.download(
    //                                         uri,
    //                                         cordova.file.externalApplicationStorageDirectory + 'files/download/college.mp4',
    //                                         function(entry) {

    //                                             myApp.alert('College Video Downloaded');
    //                                             var fileTransfer = new FileTransfer();
    //                                             var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/videos/hospital.mp4");

    //                                             fileTransfer.download(
    //                                                 uri,
    //                                                 cordova.file.externalApplicationStorageDirectory + 'files/download/hospital.mp4',
    //                                                 function(entry) {

    //                                                     myApp.alert('Hospital Video Apk Downloaded');
    //                                                     var fileTransfer = new FileTransfer();
    //                                                     var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/videos/hotel.mp4");

    //                                                     fileTransfer.download(
    //                                                         uri,
    //                                                         cordova.file.externalApplicationStorageDirectory + 'files/download/hotel.mp4',
    //                                                         function(entry) {

    //                                                             myApp.alert('Hotel Video Downloaded');

    //                                                             var fileTransfer = new FileTransfer();
    //                                                             var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/aboutMahindra.mp4");

    //                                                             fileTransfer.download(
    //                                                                 uri,
    //                                                                 cordova.file.externalApplicationStorageDirectory + 'files/download/aboutMahindra.mp4',
    //                                                                 function(entry) {

    //                                                                     myApp.alert('About Mahindra  Downloaded');

    //                                                                     Lockr.set('downloadall', 'true');
    //                                                                     $('.overlay-downloading').fadeOut();

    //                                                                 },
    //                                                                 function(error) {
    //                                                                     alert('About Mahindra download failed');
    //                                                                     navigator.app.exitApp();

    //                                                                 },
    //                                                                 false, {
    //                                                                     headers: {
    //                                                                         "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    //                                                                     }
    //                                                                 }
    //                                                             );
    //                                                         },
    //                                                         function(error) {

    //                                                             alert('Hotel download failed');
    //                                                             navigator.app.exitApp();


    //                                                         },
    //                                                         false, {
    //                                                             headers: {
    //                                                                 "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    //                                                             }
    //                                                         }
    //                                                     );

    //                                                 },
    //                                                 function(error) {

    //                                                     alert('Hospital download failed');
    //                                                     navigator.app.exitApp();


    //                                                 },
    //                                                 false, {
    //                                                     headers: {
    //                                                         "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    //                                                     }
    //                                                 }
    //                                             );

    //                                         },
    //                                         function(error) {

    //                                             alert('College download failed');
    //                                             navigator.app.exitApp();

    //                                         },
    //                                         false, {
    //                                             headers: {
    //                                                 "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    //                                             }
    //                                         }
    //                                     );

    //                                 },
    //                                 function(error) {

    //                                     alert('Bank download failed');
    //                                     navigator.app.exitApp();

    //                                 },
    //                                 false, {
    //                                     headers: {
    //                                         "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    //                                     }
    //                                 }
    //                             );
    //                         },
    //                         function(error) {

    //                             alert('Loadcalculator download failed');
    //                             navigator.app.exitApp();

    //                         },
    //                         false, {
    //                             headers: {
    //                                 "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    //                             }
    //                         }
    //                     );

    //                 },
    //                 function(error) {

    //                     alert('Brochure2 download failed');
    //                     navigator.app.exitApp();

    //                 },
    //                 false, {
    //                     headers: {
    //                         "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    //                     }
    //                 }
    //             );

    //         },
    //         function(error) {

    //             alert('Brochure1 download failed');
    //             navigator.app.exitApp();

    //         },
    //         false, {
    //             headers: {
    //                 "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    //             }
    //         }
    //     );
    // }

    document.addEventListener("backbutton", function(e) {

        e.preventDefault();
        var page = myApp.getCurrentView().activePage;
        myApp.hideIndicator();
        myApp.closePanel();

        if(page.name=="enquiry_form"){
            mainView.router.loadPage('home.html');
        }   

        if (page.name == "home" || page.name == "index") {

            // lockFile = dataDir.getFile("file:///lockfile.txt", {create: true, exclusive: true});
            // console.log("Created File"+lockFile);

            myApp.confirm('Would you like to exit app.', function() {
                navigator.app.clearHistory();
                navigator.app.exitApp();
            });

        } else {
            mainView.router.back({});
        }

    }, false);

    var token = Lockr.get('token');
    if(token != undefined){
        mainView.router.load({
            url: 'home.html'
        });
    }

}


function nativePluginResultHandler(result) {
    // console.log('GA result: '+result);
    // alert('GA result: '+result);
}

function nativePluginErrorHandler(error) {
    // console.log('GA error: '+error);
    // alert('GA error: '+error);
}

function inside_outside_text() {
    $('.inside_outside_text').show();
}

function enquiry_form_submit() {


    if ($('#name').val() == '' ) {
        myApp.alert(" Enter First Name");
        return false;
    } else if ($('#company').val() == '') {    
        myApp.alert(" Enter Company Name"); 
        return false;        
    } else if ($('#mobile').val() == '') {
        myApp.alert("Enter Mobile No.");
        return false;
    }else if ($('#mobile').val().length != 10) {
        myApp.alert("Mobile No. Should Be 10 Digit");
        $('#mobile').val('');
        return false;

    } 

    // else if ($('#email').val() == '') {  
         // myApp.alert("Enter Email Id");
         // return false;
    // }

    else if($('#email').val().length >0 && !validateEmail($('#email').val().trim()) ){

         myApp.alert("Invalid Email Id");
         return false;

    } else if ($('#product_range').val() == '' ){

        myApp.alert("Select Product Range");
        return false;

    } else if ($('#state').val() == '' ){
        myApp.alert("Select State");
        return false;
    } else if ($('#segment').val() == '' ){
        myApp.alert("Select Segment");
        return false;
    } else if ($('#dg_user').val() == '' ){
        myApp.alert("Select DG Set User");
        return false;
    }

    if (!Lockr.get('data')) {

        Lockr.set('data', [{
            name: $('#name').val(),
            company: $('#company').val(),
            mobile: $('#mobile').val(),
            email: $('#email').val(),
            product_range: $('#product_range').val(),
            state: $('#state').val(),
            segment: $('#segment').val(),
            dg_user: $('#dg_user').val(),
            dg_user_product_range: $('#dg_user_product_range').val()
        }]);
        console.log(Lockr.get('data'));

    } else {

        data = Lockr.get('data');

        data = data.concat([{
            name: $('#name').val(),
            company: $('#company').val(),
            mobile: $('#mobile').val(),
            email: $('#email').val(),
            product_range: $('#product_range').val(),
            state: $('#state').val(),
            segment: $('#segment').val(),
            dg_user: $('#dg_user').val(),
            dg_user_product_range: $('#dg_user_product_range').val()
        }]);

        Lockr.set('data', data);

        console.log(Lockr.get('data'));
    }

    var border_color = '';
    if ($('#product_range').val() == '5KVA*') {
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
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#name").val() + '" readonly="false" id="list_name_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '<td class="vz_inner_content_left">Product Range</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#product_range").val() + '" readonly="false" id="list_product_range_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td class="vz_inner_content_left">Compnay</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#company").val() + '" readonly="false" id="list_company_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '<td class="vz_inner_content_left">District</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#state").val() + '" readonly="false" id="list_state_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td class="vz_inner_content_left">Mobile No.</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#mobile").val() + '" readonly="false" id="list_mobile_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '<td class="vz_inner_content_left">Segment</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#segment").val() + '" readonly="false" id="list_segment_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td class="vz_inner_content_left">DG User Product Range</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#dg_user_product_range").val() + '" readonly="false" id="list_dg_user_product_range_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '<td class="vz_inner_content_left">Are you an existing DG user?</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#dg_user").val() + '" readonly="false" id="list_dg_user_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td class="vz_inner_content_left">Email ID</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#email").val() + '" readonly="false" id="list_email_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '</tr>' +
        '</table>' +
        '</div>';

        console.log("html is "+html);

    $('#enquiry_data').prepend(html);

    myApp.showTab('#tab2');

    // $("#tab2_button").animate({"background-color": "#3c73c0"});
    // $("#tab2_button").animate({"color": "#fff"});
    // $("#tab1_button").animate({"background-color": ""});
    // $("#tab1_button").animate({"color": "#3c73c0"});

    $("#tab2_button").css("background-color","#3c73c0");
    $("#tab2_button").css("color","#fff");
    $("#tab1_button").css("background-color","");
    $("#tab1_button").css("color","#3c73c0");

    $("#state,#product_range,#segment,#dg_user,#name,#company,#mobile,#email").val('');
    $("#dg_user_product_range").hide();
    $("#dg_user").show();
    count += 1;
}

function enquiry_form_reset() {
    $("#state,#product_range,#segment,#dg_user,#name,#company,#mobile,#email,#dg_user_product_range").val('');
    $("#dg_user_product_range").hide();
    $("#dg_user").show();
}

function book_now_form_reset() {
    $("#book_now_state,#book_now_product_range,#book_now_segment,#book_now_dg_user,#book_now_name,#book_now_company,#book_now_mobile,#book_now_email,#book_now_dg_user_product_range").val('');
    $("#book_now_dg_user_product_range").hide();
    $("#book_now_dg_user").show();
}

function book_now_form_submit() {

    // console.log(list_data);

    if ($('#book_now_name').val() == '' ) {
        myApp.alert(" Enter First Name");
        return false;
    } else if ($('#book_now_company').val() == '') {    
        myApp.alert(" Enter Company Name"); 
        return false;        
    } else if ($('#book_now_mobile').val() == '') {
        myApp.alert("Enter Mobile No.");
        return false;
    } else if ($('#book_now_mobile').val().length != 10) {
        myApp.alert("Mobile No. Should Be 10 Digit");
        $('#book_now_mobile').val('');
        return false;
    }else if ($('#book_now_email').val().length > 0 && !validateEmail($('#book_now_email').val().trim())){    
        myApp.alert("Invalid Email id");
         return false;
    } else if ($('#book_now_product_range').val() == '' ){
        myApp.alert("Select Product_range");
        return false;
    } else if ($('#book_now_state').val() == '' ){
        myApp.alert("Select District");
        return false;
    } else if ($('#book_now_segment').val() == '' ){
        myApp.alert("Select Segment");
        return false;
    } else if ($('#book_now_dg_user').val() == '' ){
        myApp.alert("Select DG set user");
        return false;
    }

    if (!Lockr.get('data')) {
        Lockr.set('data', [{
            name: $('#book_now_name').val(),
            company: $('#book_now_company').val(),
            mobile: $('#book_now_mobile').val(),
            email: $('#book_now_email').val(),
            product_range: $('#book_now_product_range').val(),
            state: $('#book_now_state').val(),
            segment: $('#book_now_segment').val(),
            dg_user: $('#book_now_dg_user').val(),
            dg_user_product_range: $('#book_now_dg_user_product_range').val()
        }]);
        console.log(Lockr.get('data'));
    } else {
        data = Lockr.get('data');
        data = data.concat([{
            name: $('#book_now_name').val(),
            company: $('#book_now_company').val(),
            mobile: $('#book_now_mobile').val(),
            email: $('#book_now_email').val(),
            product_range: $('#book_now_product_range').val(),
            state: $('#book_now_state').val(),
            segment: $('#book_now_segment').val(),
            dg_user: $('#book_now_dg_user').val(),
            dg_user_product_range: $('#book_now_dg_user_product_range').val()
        }]);

        Lockr.set('data', data);

        console.log(Lockr.get('data'));
    }

    var border_color = '';
    if ($('#product_range').val() == '5KVA*') {
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
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#book_now_name").val() + '" readonly="false" id="list_name_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '<td class="vz_inner_content_left">Product Range</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#book_now_product_range").val() + '" readonly="false" id="list_product_range_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td class="vz_inner_content_left">Compnay</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#book_now_company").val() + '" readonly="false" id="list_company_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '<td class="vz_inner_content_left">District</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#book_now_state").val() + '" readonly="false" id="list_state_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td class="vz_inner_content_left">Mobile No.</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#book_now_mobile").val() + '" readonly="false" id="list_mobile_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '<td class="vz_inner_content_left">Segment</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#book_now_segment").val() + '" readonly="false" id="list_segment_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td class="vz_inner_content_left">DG User Product Range</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#book_now_dg_user_product_range").val() + '" readonly="false" id="list_dg_user_product_range_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '<td class="vz_inner_content_left">Are you an existing DG user?</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#book_now_dg_user").val() + '" readonly="false" id="list_dg_user_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td class="vz_inner_content_left">Email ID</td>' +
        '<td class="vz_inner_content_dot">:</td>' +
        '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="' + $("#book_now_email").val() + '" readonly="false" id="list_email_' + count + '" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>' +
        '</tr>' +
        '</table>' +
        '</div>';
    $('#enquiry_data').prepend(html);




    mainView.router.load({

        url: 'enquiry_form.html',
        query:{
            frombooknow:'yes' 
        },
        ignoreCache: false,

    });
    count += 1;
}

function edit_list_book(count) {

    console.log($("#list_state_" + count).val());
    if ($('.picker-modal.modal-in').length > 0) {
        myApp.closeModal('.picker-modal.modal-in');
    }
    myApp.pickerModal(

        '<div class="picker-modal" style="padding: 2%;height: 418px;background: url(./img/red_top_bg.jpg);background-size: cover;font-family: eurostileregular !important;letter-spacing: 2px;">' +
        '<div class="toolbar">' +
        '<div class="toolbar-inner">' +
        '<div class="left">' +
        '<a href="#" class="update-btn" style="color: #fff;font-size: 33px;margin-left: 20%;" onclick="update_data(' + count + ');">UPDATE</a></div>' +
        '</div>' +
        '<div class="right" style="float: right;margin-right: 1%;margin-top: 1%;">' +
        '<a href="#" class="close-picker" style="color: #fff;" ><i class="material-icons" style="font-size: 40px">close</i></a>' +
        '</div>' +
        '</div>' +
        '<div class="picker-modal-inner">' +
        '<div class="content-block">' +
        '<div class="col-50">' +
        '<input type="text" name="" value="' + $("#list_name_" + count).val() + '" placeholder="Full Name" id="update_name_' + count + '" style="color: #808080;border: 1px solid;width: 80%;margin: 1% 3%;padding: 2%;border-radius: 5px;font-size: 20px;">' +
        '</div>' +

        '<div class="col-50">' +
        '<input type="text" name="" value="' + $("#list_company_" + count).val() + '" placeholder="Company" id="update_company_' + count + '" style="color: #808080;border: 1px solid;width: 80%;margin: 1% 3%;padding: 2%;border-radius: 5px;font-size: 20px;">' +
        '</div>' +

        '<div class="col-50">' +
        '<input type="number" name="" value="' + $("#list_mobile_" + count).val() + '" placeholder="Mobile No" id="update_mobile_' + count + '" style="color: #808080;border: 1px solid;width: 80%;margin: 1% 3%;padding: 2%;border-radius: 5px;font-size: 20px;">' +
        '</div>' +

        '<div class="col-50">' +
        '<input type="text" name="" value="' + $("#list_email_" + count).val() + '" placeholder="Email-ID" id="update_email_' + count + '" style="color: #808080;border: 1px solid;width: 80%;margin: 1% 3%;padding: 2%;border-radius: 5px;font-size: 20px;">' +
        '</div>' +

        '<div class="col-50">' +
        '<select name="product_range" value="' + $("#list_product_range_" + count).val() + '" style="width: 84%;margin: 1% 3%;padding: 2%;background: url(img/down_arrow.png) no-repeat 98%;color: #808080;font-size: 20px;background-color: white;" id="update_product_range_' + count + '">' +
        '<option value="">Product Range</option>' +


            '<option value="7.5 kVA">7.5 kVA - 20 kVA</option>'+
            '<option value="20 kVA - 25 kVA">25 kVA - 40 kVA</option>'+
            '<option value="30 kVA - 40 kVA">50 kVA - 62.5 kVA</option>'+
            '<option value="50 kVA - 62.5 kVA">75 kVA</option>'+
            '<option value="75 kVA - 125 kVA">82.5 kVA - 100 kVA</option>'+
            '<option value="160 kVA - 200 kVA">125 kVA - 140 kVA</option>'+
            '<option value="200 kVA - 500 kVA">160 kVA</option>'+
            '<option value="200 kVA - 500 kVA">180 kVA - 200 kVA</option>'+



        '</select>' +
        '</div>' +

        '<div class="col-50">' +
        '<select name="state" style="width: 84%;margin: 1% 3%;padding: 2%;background: url(img/down_arrow.png) no-repeat 98%;color: #808080;font-size: 20px;background-color: white;" id="update_state_' + count + '">' +
        
        '<option value="">District</option>'+
        '<option value="Achham">Achham</option>'+
        '<option value="Arghakhanchi">Arghakhanchi</option>'+
        '<option value="Baglung">Baglung</option>'+
        '<option value="Baitadi">Baitadi</option>'+
        '<option value="Bajhang">Bajhang</option>'+
        '<option value="Bajura">Bajura</option>'+
        '<option value="Banke">Banke</option>'+
        '<option value="Bara">Bara</option>'+
        '<option value="Bardiya">Bardiya</option>'+
        '<option value="Bhaktapur">Bhaktapur</option>'+
        '<option value="Bhojpur">Bhojpur</option>'+
        '<option value="Chitwan">Chitwan</option>'+
        '<option value="Dadeldhura">Dadeldhura</option>'+
        '<option value="Dailekh">Dailekh</option>'+
        '<option value="Dang Deukhuri">Dang Deukhuri</option>'+
        '<option value="Darchula">Darchula</option>'+
        '<option value="Dhading">Dhading</option>'+
        '<option value="Dhankuta">Dhankuta</option>'+
        '<option value="Dhanusha">Dhanusha</option>'+
        '<option value="Dolakha">Dolakha</option>'+
        '<option value="Dolpa">Dolpa</option>'+
        '<option value="Doti">Doti</option>'+
        '<option value="Gorkha">Gorkha</option>'+
        '<option value="Gulmi">Gulmi</option>'+
        '<option value="Humla">Humla</option>'+
        '<option value="Ilam">Ilam</option>'+
        '<option value="Jajarkot">Jajarkot</option>'+
        '<option value="Jhapa">Jhapa</option>'+
        '<option value="Jumla">Jumla</option>'+
        '<option value="Kailali">Kailali</option>'+
        '<option value="Kalikot">Kalikot</option>'+
        '<option value="Kanchanpur">Kanchanpur</option>'+
        '<option value="Kapilvastu">Kapilvastu</option>'+
        '<option value="Kaski">Kaski</option>'+
        '<option value="Kathmandu">Kathmandu</option>'+
        '<option value="Kavrepalanchok">Kavrepalanchok</option>'+
        '<option value="Khotang">Khotang</option>'+
        '<option value="Lalitpur">Lalitpur</option>'+
        '<option value="Lamjung">Lamjung</option>'+
        '<option value="Mahottari">Mahottari</option>'+
        '<option value="Makwanpur">Makwanpur</option>'+
        '<option value="Manang">Manang</option>'+
        '<option value="Morang">Morang</option>'+
        '<option value="Mugu">Mugu</option>'+
        '<option value="Mustang">Mustang</option>'+
        '<option value="Myagdi">Myagdi</option>'+
        '<option value="Nawalparasi">Nawalparasi</option>'+
        '<option value="Nuwakot">Nuwakot</option>'+
        '<option value="Okhaldhunga">Okhaldhunga</option>'+
        '<option value="Palpa">Palpa</option>'+
        '<option value="Panchthar">Panchthar</option>'+
        '<option value="Parbat">Parbat</option>'+
        '<option value="Parsa">Parsa</option>'+
        '<option value="Pyuthan">Pyuthan</option>'+
        '<option value="Ramechhap">Ramechhap</option>'+
        '<option value="Rasuwa">Rasuwa</option>'+
        '<option value="Rautahat">Rautahat</option>'+
        '<option value="Rolpa">Rolpa</option>'+
        '<option value="Rukum">Rukum</option>'+
        '<option value="Rupandehi">Rupandehi</option>'+
        '<option value="Salyan">Salyan</option>'+
        '<option value="Sankhuwasabha">Sankhuwasabha</option>'+
        '<option value="Saptari">Saptari</option>'+
        '<option value="Sarlahi">Sarlahi</option>'+
        '<option value="Sindhuli">Sindhuli</option>'+
        '<option value="Sindhulpalchok">Sindhulpalchok</option>'+
        '<option value="Siraha">Siraha</option>'+
        '<option value="Solukhumbu">Solukhumbu</option>'+
        '<option value="Sunsari">Sunsari</option>'+
        '<option value="Surkhet">Surkhet</option>'+
        '<option value="Syangja">Syangja</option>'+
        '<option value="Tanahu">Tanahu</option>'+
        '<option value="Taplejung">Taplejung</option>'+
        '<option value="Terhathum">Terhathum</option>'+
        '<option value="Udayapur">Udayapur</option>'+

        '</select>' +
        '</div>' +


        '<div class="col-50">' +
        '<select name="segment"  style="width: 84%;margin: 1% 3%;padding: 2%;background: url(img/down_arrow.png) no-repeat 98%;color: #808080;font-size: 20px;background-color: white;" id="update_segment_' + count + '">' +
        '<option value="">Select Segment</option>' +
        // '<option value="Other">Other</option>' +
        '<option value="Cement Plants, Factories, Garments">Cement Plants, Factories, Garments</option>'+
        '<option value="Real Estate, Construction Cos, Hydro Power, Telecom">Real Estate, Construction Cos, Hydro Power, Telecom</option>'+
        '<option value="Banks, NBFC, Savings & Co-op">Banks, NBFC, Savings & Co-op</option>'+
        '<option value="Govt. Dept., NGO, Embassies, Offices, Commercial Complex">Govt. Dept., NGO, Embassies, Offices, Commercial Complex</option>'+
        '<option value="Universities, Schools & Colleges">Universities, Schools & Colleges</option>'+
        '<option value="Hotels & Resorts, Restaurants, Spas & Health Clubs, Party Places, Zoo">Hotels & Resorts, Restaurants, Spas & Health Clubs, Party Places, Zoo</option>'+
        '<option value="Showrooms, Personal Use, Residential back-up">Showrooms, Personal Use, Residential back-up</option>'+
        '<option value="Press, Radio Station, TV Station">Press, Radio Station, TV Station</option>'+
        '<option value="Nepal Army, Armys UN Missions, Nepal Armed, Police Forces">Nepal Army, Armys UN Missions, Nepal Armed, Police Forces</option>'+
        '<option value="Hospitals, Polyclinics, Nursing Homes">Hospitals, Polyclinics, Nursing Homes</option>'+
        '<option value="Temples, Gumpahas, Mosques, Churches">Temples, Gumpahas, Mosques, Churches</option>'+
        '<option value="Airlines, Petrol Pumps, Printing Press, Hydropower">Airlines, Petrol Pumps, Printing Press, Hydropower</option>'+
        
        '</select>' +
        '</div>' +

        '<div class="col-50">' +
        '<select name="dg_user"  style="width: 84%;margin: 1% 3%;padding: 2%;background: url(img/down_arrow.png) no-repeat 98%;color: #808080;font-size: 20px;background-color: white;" id="update_dg_user_' + count + '">' +
        '<option value="">Are you an existing DG set user</option>' +
        '<option value="Yes">Yes</option>' +
        '<option value="No">No</option>' +
        '</select>' +
        '</div>' +

        '<div class="col-50">' +
        '<select name="product_range" value="' + $("#list_dg_user_product_range_" + count).val() + '" style="display:none;width: 84%;margin: 1% 3%;padding: 2%;background: url(img/down_arrow.png) no-repeat 98%;color: #808080;font-size: 20px;background-color: white;" id="update_dg_user_product_range_' + count + '">' +
        '<option value="">Product Range</option>' +


            '<option value="7.5 kVA">7.5 kVA - 20 kVA</option>'+
            '<option value="20 kVA - 25 kVA">25 kVA - 40 kVA</option>'+
            '<option value="30 kVA - 40 kVA">50 kVA - 62.5 kVA</option>'+
            '<option value="50 kVA - 62.5 kVA">75 kVA</option>'+
            '<option value="75 kVA - 125 kVA">82.5 kVA - 100 kVA</option>'+
            '<option value="160 kVA - 200 kVA">125 kVA - 140 kVA</option>'+
            '<option value="200 kVA - 500 kVA">160 kVA</option>'+
            '<option value="200 kVA - 500 kVA">180 kVA - 200 kVA</option>'+


        '</select>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    )
    // $('#update_state'+$("#list_state"+count).val()+':selected').val()
    $("#update_state_" + count).val($("#list_state_" + count).val());
    $("#update_product_range_" + count).val($("#list_product_range_" + count).val());
    $("#update_segment_" + count).val($("#list_segment_" + count).val());
    $("#update_dg_user_" + count).val($("#list_dg_user_" + count).val());
    $("#update_dg_user_product_range_" + count).val($("#list_dg_user_product_range_" + count).val());
    if ($("#list_dg_user_" + count).val() == 'Yes') {
        $("#update_dg_user_product_range_" + count).show();
    }
    $("#update_dg_user_" + count).change(function() {
        if (this.value == 'Yes') {
            $("#update_dg_user_product_range_" + count).show();
        } else {
            $("#update_dg_user_product_range_" + count).hide();
            $("#update_dg_user_product_range_" + count).val('');
        }
    });

    // myApp.showTab('#tab1');
    // console.log($("#list_produc_range").val());
    // $("#name").val($("#list_name").val());
    // $("#email").val($("#list_email").val());
    // $("#mobile").val($("#list_mobile").val());
    // $("#company").val($("#list_company").val());
    // $("#update_state").val($("#list_state").val());
    // $("#update_product_range").val($("#list_product_range").val());
    // $("#update_segment").val($("#list_segment").val());
    // $("#update_dg_user").val($("#list_dg_user").val());
    // $("#tab1_button").css("background-color", "#3c73c0");
    // $("#tab1_button").css("color", "#fff");
    // $("#tab2_button").css("background-color", "");
    // $("#tab2_button").css("color", "#3c73c0");
}


function forgot_password() {

    email = $("#forgot_password_email").val();
    if (email == '') {
        myApp.alert('Enter the registered Email id');
    } else {
        myApp.showIndicator();
        $.ajax({
                url: base_url + '/forgot_password',
                type: 'POST',
                crossDomain: true,
                data: {
                    "email_id": email,
                },
            })
            .done(function(res) {
                // console.log('done: ' + j2s(res));
                if (res.status == 'SUCCESS') {
                    myApp.alert(res.message);
                    goto_page('index.html');
                } else {
                    myApp.alert(res.message);
                }
            })
            .fail(function(err) {
                myApp.hideIndicator();
                myApp.alert('Some error occurred on connecting.');
                // console.log('fail: ' + j2s(err));
            })
            .always(function() {
                myApp.hideIndicator();
            });
    }
}



// function showppt() {

//     alert('called');

//     window.cordova.plugins.FileOpener.canOpenFile("http://kreaserv-tech.com/mahindra_admin/mahindra.pptx", onSuccess, onError);

// }


function update_data(count) {

    if ($('#update_name_0').val() == '' ) {
        myApp.alert(" Enter First Name");
        return false;
    } else if ($('#update_company_0').val() == '') {    
        myApp.alert(" Enter Company Name"); 
        return false;        
    } else if ($('#update_mobile_0').val() == '') {
        myApp.alert("Enter Mobile");
        return false;
    }else if($('#update_email_0').val().length > 0 && !validateEmail($('#update_email_0').val().trim())){
         myApp.alert("Invalid Email id");
         return false;
    } else if ($('#update_product_range_0').val() == '' ){
        myApp.alert("Select Product_range");
        return false;
    } else if ($('#update_state_0').val() == '' ){
        myApp.alert("Select State");
        return false;
    } else if ($('#update_segment_0').val() == '' ){
        myApp.alert("Select Segment");
        return false;
    } else if ($('#update_dg_user_0').val() == '' ){
        myApp.alert("Select DG set user");
        return false;
    }


    console.log($("#update_company_" + count).val(), $("#update_dg_user_" + count).val());
    var border_color = '';
    if ($("#update_product_range_" + count).val() == '5KVA*') {
        border_color = '6px solid #e61938';
    } else {
        border_color = '6px solid #3c73c0';
    }

    $("#enquiry_list_" + count).animate({"border-left": border_color});

    var update_data = Lockr.get('data');
    console.log(update_data);
    update_data[count].company = $("#update_company_" + count).val();
    update_data[count].dg_user = $("#update_dg_user_" + count).val();
    update_data[count].dg_user_product_range = $("#update_dg_user_product_range" + count).val();
    update_data[count].email = $("#update_email_" + count).val();
    update_data[count].mobile = $("#update_mobile_" + count).val();
    update_data[count].name = $("#update_name_" + count).val();
    update_data[count].product_range = $("#update_product_range_" + count).val();
    update_data[count].segment = $("#update_segment_" + count).val();
    update_data[count].state = $("#update_state_" + count).val();
    Lockr.set('data', update_data);
    // console.log(Lockr.getAll());
    $("#list_company_" + count).val($("#update_company_" + count).val());
    $("#list_dg_user_" + count).val($("#update_dg_user_" + count).val());
    $("#list_email_" + count).val($("#update_email_" + count).val());
    $("#list_mobile_" + count).val($("#update_mobile_" + count).val());
    $("#list_name_" + count).val($("#update_name_" + count).val());
    $("#list_product_range_" + count).val($("#update_product_range_" + count).val());
    $("#list_dg_user_product_range_" + count).val($("#update_dg_user_product_range_" + count).val());
    $("#list_segment_" + count).val($("#update_segment_" + count).val());
    $("#list_state_" + count).val($("#update_state_" + count).val());


    myApp.closeModal();

    myApp.alert('Updated');


    

}

function redirect_product_specification(inp) {

    $('#' + inp).addClass("hvr-wobble-horizontal");
    $('#' + inp).animate({'background-color':'rgba(197, 195, 195, 0.25)'});

    // return false;

    mainView.router.load({
        url: 'product_specification.html',
        ignoreCache: false,
        query: {
            title: $('#' + inp + '').val()
        },
    });


    // $('#'+inp).css('background-color','transparent');

}

function cba_submit() {


    if(!$("#p_no_of_year").val()){
        // myApp.alert('No Of Years Required');
        return false;
    }
    if(!$("#k_no_of_year").val()){
        // myApp.alert('No Of Years Required');
        return false;
    }
    if(!$("#p_rating").val()){
        // myApp.alert('Rating Required');
        return false;
    }
    if(!$("#k_rating").val()){
        // myApp.alert('Rating Required');
        return false;
    }

    if(!$("#p_avg_usage_hrs").val()){
        // myApp.alert('Usage Required');
        return false;
    }
    if(!$("#k_avg_usage_hrs").val()){
        // myApp.alert('Usage Required');
        return false;
    }

    // if($("p_price_of_brand").empty()){
    //     myApp.alert('Price Required');
    //     return false;
    // }

    if(!$("#k_price_of_brand").val()){
        // myApp.alert('Price Required');
        return false;
    }

    // if($("p_fuel_consumption").empty()){
    //     myApp.alert('Fuel Consumption Required');
    //     return false;
    // }

    if(!$("#k_fuel_consumption").val()){
        // myApp.alert('Fuel Consumption Required');
        return false;
    }
    // if($("p_running_fuel").empty()){
    //     myApp.alert('Running Fuel Required');
    //     return false;
    // }
    // if($("k_running_fuel").empty()){
    //     myApp.alert('Running Fuel Required');
    //     return false;
    // }

    if(!$("#p_service_period").val()){
        // myApp.alert('Service Period Required');
        return false;
    }
    if(!$("#k_service_period").val()){
        // myApp.alert('Service Period Required');
        return false;
    }

    // if($("p_no_of_service").empty()){
    //     myApp.alert('No Of Service Required');
    //     return false;
    // }
    // if($("k_no_of_service").empty()){
    //     myApp.alert('No Of Service Required');
    //     return false;
    // }

    if(!$("#p_service_cost").val()){
        // myApp.alert('Service Cost Required');
        return false;
    }
    if(!$("#k_service_cost").val()){
        // myApp.alert('Service Cost Required');
        return false;
    }


    // if($("p_service_cost5").empty()){
    //     myApp.alert('Service Cost 5 Years Required');
    //     return false;
    // }
    // if($("k_service_cost5").empty()){
    //     myApp.alert('Service Cost 5 Years Required');
    //     return false;
    // }





    var p_no_of_service = parseFloat($("#p_no_of_service").val());
    var k_no_of_service = parseFloat($("#k_no_of_service").val());
    var p_no_of_year = parseFloat($("#p_no_of_year").val());
    var k_no_of_year = parseFloat($("#k_no_of_year").val());
    var p_rating = parseFloat($("#p_rating").val());
    var k_rating = parseFloat($("#k_rating").val());
    var p_price_of_brand = parseFloat($("#p_price_of_brand").val());
    var k_price_of_brand = parseFloat($("#k_price_of_brand").val());
    var p_avg_usage_hrs = parseFloat($("#p_avg_usage_hrs").val());
    var k_avg_usage_hrs = parseFloat($("#k_avg_usage_hrs").val());
    var p_fuel_consumption = parseFloat($("#p_fuel_consumption").val());
    var k_fuel_consumption = parseFloat($("#k_fuel_consumption").val());
    var p_service_period = parseFloat($("#p_service_period").val());
    var k_service_period = parseFloat($("#k_service_period").val());
    var p_running_fuel = parseFloat($("#p_running_fuel").val());
    var k_running_fuel = parseFloat($("#k_running_fuel").val());
    var p_service_cost = parseFloat($("#p_service_cost").val());
    var k_service_cost = parseFloat($("#k_service_cost").val());
    var p_service_cost5 = parseFloat($("#p_service_cost5").val());
    var k_service_cost5 = parseFloat($("#k_service_cost5").val());

    console.log('p_no_of_service: ' + p_no_of_service);
    console.log('k_no_of_service: ' + k_no_of_service);
    console.log('p_no_of_year: ' + p_no_of_year);
    console.log('k_no_of_year: ' + k_no_of_year);
    console.log('p_rating: ' + p_rating);
    console.log('k_rating: ' + k_rating);
    console.log('p_price_of_brand: ' + p_price_of_brand);
    console.log('k_price_of_brand: ' + k_price_of_brand);
    console.log('p_avg_usage_hrs: ' + p_avg_usage_hrs);
    console.log('k_avg_usage_hrs: ' + k_avg_usage_hrs);
    console.log('p_fuel_consumption: ' + p_fuel_consumption);
    console.log('k_fuel_consumption: ' + k_fuel_consumption);
    console.log('p_service_period: ' + p_service_period);
    console.log('k_service_period: ' + k_service_period);
    console.log('p_service_cost: ' + p_service_cost);
    console.log('k_service_cost: ' + k_service_cost);

    // var cal_p_running_fuel = p_no_of_year * p_avg_usage_hrs * p_fuel_consumption * 50;
    // // console.log("cal_p_running_fuel"+p_no_of_year *p_avg_usage_hrs*p_fuel_consumption*50+'='+cal_p_running_fuel);
    // $('#p_running_fuel').val(cal_p_running_fuel);

    // var cal_k_running_fuel = k_no_of_year * k_avg_usage_hrs * k_fuel_consumption * 50;
    // // console.log("cal_k_running_fuel"+k_no_of_year *k_avg_usage_hrs*k_fuel_consumption*50+'='+cal_k_running_fuel);
    // $('#k_running_fuel').val(cal_k_running_fuel);

    // if (p_service_period == 300 && k_service_period == 300) {
    //     var cal_p_no_of_service = 4 * 5;
    //     $("#p_no_of_service").val(cal_p_no_of_service);
    //     $("#k_no_of_service").val(cal_p_no_of_service);
    //     // console.log(cal_p_no_of_service);
    // }

    // if (k_service_period == 500 && p_service_period == 500) {
    //     var cal_k_no_of_service = 2 * 5;
    //     // console.log(cal_k_no_of_service);
    //     $("#p_no_of_service").val(cal_k_no_of_service);
    //     $("#k_no_of_service").val(cal_k_no_of_service);
    // }

    // var cal_p_service_cost5 = p_service_cost * parseFloat($("#p_no_of_service").val());
    // // console.log(cal_p_service_cost5);
    // $("#p_service_cost5").val(cal_p_service_cost5);

    // var cal_k_service_cost5 = k_service_cost * parseFloat($("#k_no_of_service").val());
    // // console.log(cal_k_service_cost5);
    // $("#k_service_cost5").val(cal_k_service_cost5);


    // var p_total = cal_p_service_cost5 + cal_p_running_fuel + p_price_of_brand;
    // var k_total = cal_k_service_cost5 + cal_k_running_fuel + k_price_of_brand;
    var p_total = p_service_cost5 + p_running_fuel + p_price_of_brand;
    var k_total = k_service_cost5 + k_running_fuel + k_price_of_brand;
    var p_savings = p_total - k_total;
    var k_savings = k_total - p_total;
    var brand_name = $("#brand_name").val();
    // $("#p_val").text(p_total);
    // $("#k_val").text(k_total);
    $("#p_val").val(p_total);
    $("#k_val").val(k_total);
    $("#p_savings").val(p_savings);
    $("#k_savings").val(k_savings);

    // // console.log("p_no_of_year :"+p_no_of_year+"k_no_of_year :"+k_no_of_year+"p_rating :"+p_rating+"k_rating :"+k_rating+"p_price_of_brand :"+p_price_of_brand+"k_price_of_brand :"+k_price_of_brand+"p_running_fuel :"+p_running_fuel+"k_running_fuel :"+k_running_fuel+"p_service_cost :"+p_service_cost+"k_service_cost :"+k_service_cost);
    // // console.log(cal_p_service_cost5+cal_p_running_fuel+p_price_of_brand+'k_total = '+k_total);
    // // console.log(cal_k_service_cost5+cal_k_running_fuel+k_price_of_brand+'p_total = '+p_total);
    // if (Number(p_total) > Number(k_total)) {
    //     // console.log(p_total);
    //     $("#powerol_value_img").attr('src', 'img/ico/green.png');
    //     $("#kirloskar_value_img").attr('src', 'img/ico/red.png');
    // } else {
    //     // console.log(k_total);
    //     $("#kirloskar_value_img").attr('src', 'img/ico/green.png');
    //     $("#powerol_value_img").attr('src', 'img/ico/red.png');
    // }

    // $("#powerol_value").show();
    // $("#kirloskar_value").show();
    // $("#clear_sub").show();
    // // $("#clear_sub").css('margin-left','0%');
    // $("#powerol_sub").hide();
   Highcharts.chart('chart1', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Calculation for Powerol'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
                {
                    name: 'Service Cost',
                    y: p_service_cost5,
                    color: 'yellow',
                },{
                    name: 'Price of Brand',
                    y: p_price_of_brand,
                    color: 'red',
                },{
                    name: 'Running Cost in 5 years',
                    y: p_running_fuel,
                    sliced: true,
                    selected: true,
                    color: 'green',
                }
        ]
    }]
});

Highcharts.chart('chart2', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Calculation for '+brand_name
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
                {
                    name: 'Service Cost',
                    y: k_service_cost5,
                    color: 'yellow',
                },{
                    name: 'Price of Brand',
                    y: k_price_of_brand,
                    color: 'red',
                },{
                    name: 'Running Cost in 5 years',
                    y: k_running_fuel,
                    sliced: true,
                    selected: true,
                    color: 'green',
                }
            ]
    }]
});

Highcharts.chart('chart3', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Cost of ownership'
    },
    xAxis: {
        categories: ['Powerol', brand_name]
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Capital Cost',
        data: [p_price_of_brand,k_price_of_brand],
        color: 'red'
    }, {
        name: 'Running Cost',
        data: [p_running_fuel,k_running_fuel],
        color: 'green'
    }, {
        name: 'Service Cost',
        data: [p_service_cost5,k_service_cost5],
        color: 'yellow'
    }]
});

        
}

function cba_clear() {

    $("#p_no_of_year,#k_no_of_year,#p_rating,#k_rating,#p_price_of_brand,#k_price_of_brand,#p_running_fuel,#k_running_fuel,#p_service_cost,#k_service_cost").val('');
    $("#powerol_value_img").attr('src', '');
    $("#kirloskar_value_img").attr('src', '');

    $("#powerol_value").css('visibility','hidden');
    $("#kirloskar_value").css('visibility','hidden');
    
    $("#powerol_sub").show();
    $("#clear_sub").hide();
}



function redirect_book_now(para) {
    // console.log($('#product_specification_title').text());
    mainView.router.load({
        url: 'book_now.html',
        ignoreCache: false,
        query: {
            title: para
        },
    });
}


function enquiry_data_push() {

    var data = Lockr.get('data');
    var token = Lockr.get('token');
    console.log(data);
    // return false;
    if (data != undefined) {

        $.ajax({
            url: base_url + '/enquiry_data_push',
            type: 'POST',
            crossDomain: true,
            data: {
                "user": token,
                "data": data,
            },
        })
        .done(function(res) {

            console.log('done: ' + j2s(res));
            myApp.hideIndicator();
            if (res.status == 'SUCCESS') {

                myApp.alert(res.message); 
                Lockr.set('data', '');
                
                // mainView.router.load({
                //     url: 'home.html',
                // });

            }else{
                myApp.alert(res.message); 
            }
        })
        .fail(function(err) {
            myApp.hideIndicator();
            myApp.alert('Some error occurred on connecting.');
            console.log('fail: ' + j2s(err));
        })
        .always(function() {});

    } else {
        myApp.alert('No data Available');
    }

}






