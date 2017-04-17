var count = 0;
function j2s(json) {
    return JSON.stringify(json);
}

function goto_page(page) {
    mainView.router.load({
        url: page,
        ignoreCache: false,
    });
}

//app login
function login(){
	var email = $('#login-email').val();
    var password = $('#login-password').val();
    if (email == '') {
        myApp.alert('Email Id should be provided.');
        return false;
    } else if (!email.match(email_regex)) {
        myApp.alert('Valid Email Id should be provided.');
        return false;
    }

    if (password == '') {
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



    // $(document).ready(function(){

    //     alert('clicked');
    //     $('img').click(function(){
    //     alert('clicked');


    //         $("img").removeClass('zoomin');
    //         $("img").removeClass('show');

    //         $(this).addClass('zoomin');
    //         $(this).addClass('show');

    //     })
        
    // })


// alert('helo');


// function initMap() {
//     // Create a map object and specify the DOM element for display.
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       scrollwheel: false,
//       zoom: 8
//     });
//   }

//back button
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("backbutton", function(e) {
        e.preventDefault();
        var page = myApp.getCurrentView().activePage;
        myApp.hideIndicator();
         myApp.closePanel();
        if (page.name == "home"  || page.name == "index" ) {
            // lockFile = dataDir.getFile("file:///lockfile.txt", {create: true, exclusive: true});
            // console.log("Created File"+lockFile);
            myApp.confirm('would you like to exit app.', function() {
                navigator.app.clearHistory();
                gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
                navigator.app.exitApp();
            });
        } else {
            mainView.router.back({});
        }
    }, false);
}

function nativePluginResultHandler(result) {
    // console.log('GA result: '+result);
    // alert('GA result: '+result);
}

function nativePluginErrorHandler(error) {
    // console.log('GA error: '+error);
    // alert('GA error: '+error);
}

function inside_outside_text(){
    $('.inside_outside_text').show();
}

function enquiry_form_submit(){
  // console.log(list_data);
    // if ($('#name').val() == '' ) {
    //     myApp.alert(" Enter First Name");
    //     return false;
    // } else if ($('#company').val() == '') {    
    //     myApp.alert(" Enter Company Name"); 
    //     return false;        
    // } else if ($('#mobile').val() == '') {
    //     myApp.alert("Enter Mobile");
    //     return false;
    // } else if ($('#email').val() == '') {    
    //     myApp.alert("Enter Email id");
    //      return false;
    // } else if ($('#product_range').val() == '' ){
    //     myApp.alert("Select Product_range");
    //     return false;
    // } else if ($('#state').val() == '' ){
    //     myApp.alert("Select State");
    //     return false;
    // } else if ($('#segment').val() == '' ){
    //     myApp.alert("Select Segment");
    //     return false;
    // } else if ($('#dg_user').val() == '' ){
    //     myApp.alert("Select DG set user");
    //     return false;
    // }
    if(!Lockr.get('data')){
      Lockr.set('data', [{name: $('#name').val(), company: $('#company').val(),mobile:$('#mobile').val(),email:$('#email').val(),product_range:$('#product_range').val(),state:$('#state').val(),segment:$('#segment').val(),dg_user:$('#dg_user').val()}]);
      console.log(Lockr.get('data'));
    } else {
      data = Lockr.get('data');
      data = data.concat([
        {
          name: $('#name').val(),
          company: $('#company').val(),
          mobile:$('#mobile').val(),
          email:$('#email').val(),
          product_range:$('#product_range').val(),
          state:$('#state').val(),
          segment:$('#segment').val(),
          dg_user:$('#dg_user').val()
        }
      ]);

      Lockr.set('data',data);
      
      console.log(Lockr.get('data'));
    }

    var border_color = '';
    if($('#product_range').val() == '5KVA*'){
        border_color = '#e61938';
    }else{
        border_color = '#3c73c0';
    }
    html =
        '<div class="enquiry_list" style="margin-top: 3%;margin-left: 3%;border-left: 6px solid '+border_color+';">'+
                      '<a class="enquiry_list_edit_button" href="" onclick="edit_list_book('+count+')"><img  src="img/edit.png"></a>'+
                      '<table>'+
                          '<tr>'+
                            '<td class="vz_inner_content_left">Name</td>'+
                            '<td class="vz_inner_content_dot">:</td>'+
                            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="'+$("#name").val()+'" readonly="false" id="list_name_'+count+'" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>'+
                            '<td class="vz_inner_content_left">Product Range</td>'+
                            '<td class="vz_inner_content_dot">:</td>'+
                            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="'+$("#product_range").val()+'" readonly="false" id="list_product_range_'+count+'" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>'+
                          '</tr>'+
                          '<tr>'+
                            '<td class="vz_inner_content_left">Compnay</td>'+
                            '<td class="vz_inner_content_dot">:</td>'+
                            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="'+$("#company").val()+'" readonly="false" id="list_company_'+count+'" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>'+
                            '<td class="vz_inner_content_left">State</td>'+
                            '<td class="vz_inner_content_dot">:</td>'+
                            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="'+$("#state").val()+'" readonly="false" id="list_state_'+count+'" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>'+
                          '</tr>'+
                          '<tr>'+
                            '<td class="vz_inner_content_left">Mobile No.</td>'+
                            '<td class="vz_inner_content_dot">:</td>'+
                            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="'+$("#mobile").val()+'" readonly="false" id="list_mobile_'+count+'" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>'+
                            '<td class="vz_inner_content_left">Segment</td>'+
                            '<td class="vz_inner_content_dot">:</td>'+
                            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="'+$("#segment").val()+'" readonly="false" id="list_segment_'+count+'" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>'+
                          '</tr>'+
                          '<tr>'+
                            '<td class="vz_inner_content_left">Email ID</td>'+
                            '<td class="vz_inner_content_dot">:</td>'+
                            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="'+$("#email").val()+'" readonly="false" id="list_email_'+count+'" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>'+
                            '<td class="vz_inner_content_left">Are you an existing DG user?</td>'+
                            '<td class="vz_inner_content_dot">:</td>'+
                            '<td class="vz_inner_content_right"><input class="book_list_inp" type="text" name="" value="'+$("#dg_user").val()+'" readonly="false" id="list_dg_user_'+count+'" style="background-color: rgba(255, 255, 255, 0);border: none;"></td>'+
                          '</tr>'+
                        '</table>'+
                    '</div>';
    $('#enquiry_data').append(html)
    myApp.showTab('#tab2');
    $("#tab2_button").css("background-color", "#3c73c0");
    $("#tab2_button").css("color", "#fff");
    $("#tab1_button").css("background-color", "");
    $("#tab1_button").css("color", "#3c73c0");
    $("#state,#product_range,#segment,#dg_user,#name,#company,#mobile,#email").val('');
    count += 1;
}

function edit_list_book(count){
    console.log($("#list_state_"+count).val());
    if ($('.picker-modal.modal-in').length > 0) {
        myApp.closeModal('.picker-modal.modal-in');
    }
      myApp.pickerModal(
        '<div class="picker-modal" style="height: 333px;background: url(./img/red_top_bg.jpg);background-size: cover;font-family: eurostileregular !important;letter-spacing: 2px;">' +
          '<div class="toolbar">' +
            '<div class="toolbar-inner">' +
              '<div class="left" style="margin-top: 2%;">'+
                '<a href="#" class="close-picker" style="color: #fff;font-size: 33px;margin-left: 20%;" onclick="update_data('+count+');">UPDATE</a></div>' +
              '</div>' +
              '<div class="right" style="float: right;margin-right: 1%;margin-top: 1%;">'+
                '<a href="#" class="close-picker" style="color: #fff;" ><i class="material-icons" style="font-size: 40px">close</i></a>'+
              '</div>' +
          '</div>' +
          '<div class="picker-modal-inner">' +
            '<div class="content-block">' +
              '<div class="col-50">'+
                    '<input type="text" name="" value="'+$("#list_name_"+count).val()+'" placeholder="Full Name" id="update_name_'+count+'" style="color: #808080;border: 1px solid;width: 80%;margin: 1% 3%;padding: 2%;border-radius: 5px;font-size: 20px;">'+
                  '</div>'+

                  '<div class="col-50">'+
                    '<input type="text" name="" value="'+$("#list_company_"+count).val()+'" placeholder="Company" id="update_company_'+count+'" style="color: #808080;border: 1px solid;width: 80%;margin: 1% 3%;padding: 2%;border-radius: 5px;font-size: 20px;">'+
                  '</div>'+

                  '<div class="col-50">'+
                    '<input type="text" name="" value="'+$("#list_mobile_"+count).val()+'" placeholder="Mobile No" id="update_mobile_'+count+'" style="color: #808080;border: 1px solid;width: 80%;margin: 1% 3%;padding: 2%;border-radius: 5px;font-size: 20px;">'+
                  '</div>'+

                  '<div class="col-50">'+
                    '<input type="text" name="" value="'+$("#list_email_"+count).val()+'" placeholder="Email-ID" id="update_email_'+count+'" style="color: #808080;border: 1px solid;width: 80%;margin: 1% 3%;padding: 2%;border-radius: 5px;font-size: 20px;">'+
                  '</div>'+

                  '<div class="col-50">'+
                    '<select name="product_range" value="'+$("#list_product_range_"+count).val()+'" style="width: 84%;margin: 1% 3%;padding: 2%;background: url(img/down_arrow.png) no-repeat 98%;color: #808080;font-size: 20px;background-color: white;" id="update_product_range_'+count+'">'+
                      '<option value="">Product Range</option>'+
                      '<option value="5KVA*">5KVA*</option>'+
                      '<option value="200KVA - 500KVA">200KVA - 500KVA</option>'+
                      '<option value="5KVA*">5KVA*</option>'+
                      '<option value="200KVA - 500KVA">200KVA - 500KVA</option>'+
                    '</select>'+
                  '</div>'+

                  '<div class="col-50">'+
                    '<select name="state" style="width: 84%;margin: 1% 3%;padding: 2%;background: url(img/down_arrow.png) no-repeat 98%;color: #808080;font-size: 20px;background-color: white;" id="update_state_'+count+'">'+
                      '<option value="">State</option>'+
                      '<option value="Kathmandu">Kathmandu</option>'+
                      '<option value="Bagmati">Bagmati</option>'+
                      '<option value="Bheri">Bheri</option>'+
                      '<option value="Dhawalagiri">Dhawalagiri</option>'+
                      '<option value="Gandaki">Gandaki</option>'+
                      '<option value="Janakpur">Janakpur</option>'+
                      '<option value="Karnali">Karnali</option>'+
                      '<option value="Kosi">Kosi</option>'+
                      '<option value="Lumbini">Lumbini</option>'+
                      '<option value="Mahakali">Mahakali</option>'+
                      '<option value="Mechi">Mechi</option>'+
                      '<option value="Narayani">Narayani</option>'+
                      '<option value="Rapti">Rapti</option>'+
                      '<option value="Sagarmatha">Sagarmatha</option>'+
                      '<option value="Seti">Seti</option>'+
                    '</select>'+
                  '</div>'+


                  '<div class="col-50">'+
                    '<select name="segment"  style="width: 84%;margin: 1% 3%;padding: 2%;background: url(img/down_arrow.png) no-repeat 98%;color: #808080;font-size: 20px;background-color: white;" id="update_segment_'+count+'">'+
                      '<option value="">Segment</option>'+
                      '<option value="Other">Other</option>'+
                    '</select>'+
                  '</div>'+

                  '<div class="col-50">'+
                    '<select name="dg_user"  style="width: 84%;margin: 1% 3%;padding: 2%;background: url(img/down_arrow.png) no-repeat 98%;color: #808080;font-size: 20px;background-color: white;" id="update_dg_user_'+count+'">'+
                      '<option value="">Are you an existing DG set user</option>'+
                      '<option value="Yes">Yes</option>'+
                      '<option value="No">No</option>'+
                    '</select>'+
                  '</div>'+
            '</div>' +
          '</div>' +
        '</div>'
      )
    // $('#update_state'+$("#list_state"+count).val()+':selected').val()
    $("#update_state_"+count).val($("#list_state_"+count).val());
    $("#update_product_range_"+count).val($("#list_product_range_"+count).val());
    $("#update_segment_"+count).val($("#list_segment_"+count).val());
    $("#update_dg_user_"+count).val($("#list_dg_user_"+count).val());
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

function update_data(count){
  console.log('count'+count);
   var update_data = Lockr.get('data');
    update_data[count].company = $("#update_company_"+count).val();
    update_data[count].dg_user = $("#update_dg_user_"+count).val();
    update_data[count].email = $("#update_email_"+count).val();
    update_data[count].mobile = $("#update_mobile_"+count).val();
    update_data[count].name = $("#update_name_"+count).val();
    update_data[count].product_range = $("#update_product_range_"+count).val();
    update_data[count].segment = $("#update_segment_"+count).val();
    update_data[count].state = $("#update_state_"+count).val();
    Lockr.set('data', update_data);
    console.log(Lockr.getAll());
    $("#list_company_"+count).val($("#update_company_"+count).val());
    $("#list_dg_user_"+count).val($("#update_dg_user_"+count).val());
    $("#list_email_"+count).val($("#update_email_"+count).val());
    $("#list_mobile_"+count).val($("#update_mobile_"+count).val());
    $("#list_name_"+count).val($("#update_name_"+count).val());
    $("#list_product_range_"+count).val($("#update_product_range_"+count).val());
    $("#list_segment_"+count).val($("#update_segment_"+count).val());
    $("#list_state_"+count).val($("#update_state_"+count).val());
}