/*  ---------------------------------------------------
  Template Name: Gym
  Description:  Gym Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    //Masonary
    $('.gallery').masonry({
        itemSelector: '.gs-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 3200,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout:9990
    });

    /*------------------
        Team Slider
    --------------------*/
//    $(".ts-slider").owlCarousel({
//        loop: true,
//        margin: 0,
//        items: 3,
//        dots: true,
//        dotsEach: 2,
//        smartSpeed: 3900,
//        autoHeight: false,
//        autoplay: true,
//        responsive: {
//            320: {
//                items: 1,
//            },
//            768: {
//                items: 2,
//            },
//            992: {
//                items: 3,
//            }
//        }
//    });
    $(".ts-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        dotsEach: 2,
        smartSpeed: 3900,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            }
        }
    });
    /*------------------
        Testimonial Slider
    --------------------*/
    $(".ts_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });

    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

function getCookie(name) {
    var value = '; ' + document.cookie,
        parts = value.split('; ' + name + '=');
    if (parts.length == 2) return parts.pop().split(';').shift();
}

function reload_page() {
    window.location.reload(true);
}

$('.frst-anc').on("click",function(e){
    event.preventDefault();
    var target = $(event.target);
    var url = target.attr('href');
    var language_code = target.data('language-code');
    $.ajax({
        type: 'POST',
        url: url,
        data: {language: 'en'},
        headers: {"X-CSRFToken": getCookie('csrftoken')}
    }).done(function(data, textStatus, jqXHR) {
        reload_page();
    });


});

$('.scnd-anc').on("click",function(e){
    event.preventDefault();
    var target = $(event.target);
    var url = target.attr('href');
    var language_code = target.data('language-code');
    $.ajax({
        type: 'POST',
        url: url,
        data: {language: 'ar'},
        headers: {"X-CSRFToken": getCookie('csrftoken')}
    }).done(function(data, textStatus, jqXHR) {
        reload_page();
    });


});

$('.chronic').on('change', function (){
    status = $('input[id=chronic1]:checked', '#toggle-form').val()
    if (status == "yes"){
        $('#chronicarea').show()
    }else {
        $('#chronicarea').hide()
    }
});
$('.chronicPrevent').on('change', function (){
    status = $('input[id=chronicPrevent1]:checked', '#toggle-form').val()
    if (status == "yes" ){
        $('#chronicPreventArea').show()
    }else {
        $('#chronicPreventArea').hide()
    }
});
$('.chronicInjuries').on('change', function (){
    status = $('input[id=chronicInjuries1]:checked', '#toggle-form').val()
    if (status == "yes" ){
        $('#chronicInjuriesArea').show()
    }else {
        $('#chronicInjuriesArea').hide()
    }
});

$('.injuryPerforming').on('change', function (){
    status = $('input[id=injuryPerforming1]:checked', '#toggle-form').val()
    if (status == "yes" ){
        $('#injuryPerformingArea').show()
    }else {
        $('#injuryPerformingArea').hide()
    }
});

$('.particularFood').on('change', function (){
    status = $('input[id=particularFood1]:checked', '#toggle-form').val()
    if (status == "yes" ){
        $('#particularFoodArea').show()
    }else {
        $('#particularFoodArea').hide()
    }
});

$('.supplements').on('change', function (){
    status = $('input[id=supplements1]:checked', '#toggle-form').val()
    if (status == "yes" ){
        $('#supplementsArea').show()
    }else {
        $('#supplementsArea').hide()
    }
});

$('.trainWhere').on('change', function (){
    status = $('input[id=trainWhere2]:checked', '#toggle-form').val()
    if (status == "home" ){
        $('#equipment').show()
    }else {
        $('#equipment').hide()
    }
});


$("#agreeTerms").on("change", function(event) {

    if (this.checked) {
             $('.submit-btn').css("display","block");
     }else {
             $('.submit-btn').css("display","none");

     }
});




$( "#show-btn" ).click(function() {
    $("#more-p-hide").slideToggle();
});








$(".send-button").on("click", function(event) {
    let chronic_diseases = $('input[name="chronic_diseases"]:checked').val()
    let chronic_diseases_area = $('#chronicarea').val();

    let chronic_prevent = $('input[name="chronic_prevent"]:checked').val()
    let chronic_prevent_area = $('#chronicPreventArea').val();

    let chronic_injuries = $('input[name="chronic_injuries"]:checked').val()
    let chronic_injuries_area = $('#chronicInjuriesArea').val();

    let injury_performing = $('input[name="injury_performing"]:checked').val()
    let injury_performing_area = $('#injuryPerformingArea').val();

    let particular_food = $('input[name="particular_food"]:checked').val()
    let particular_food_area = $('#particularFoodArea').val();

    let supplements = $('input[name="supplements"]:checked').val()
    let supplements_area = $('#supplementsArea').val();

    let supplements_faster = $('input[name="supplements_faster"]:checked').val()

    let daily_Activity = $('input[name="daily_Activity"]:checked').val()

    let go_gym = $('input[name="go_gym"]:checked').val()

    let When_train = $('input[name="When_train"]:checked').val()

    let nutrition_area = $('#nutritionArea').val();

    let workout_area = $('#workoutArea').val();

    let online_training_area = $('#onlineTrainingArea').val();

    let name = $('#exampleInputEmail1').val();

    let train_where = $('input[name="train_where"]:checked').val()
    let equipment_area = $('#equipmentArea').val();

if (chronic_diseases == null ||
    chronic_prevent == null || chronic_injuries == null ||
    injury_performing == null || particular_food == null ||
    supplements == null || supplements_faster == null ||
    daily_Activity == null || go_gym == null || When_train == null ||
     nutrition_area == null || workout_area == null || online_training_area == null ||
      name == ""){
        alert('Please Fill All Form')
    }else{
       $('.terms-section').toggle();
}
});

 $('.submit-btn').on("click", function(event){
    let chronic_diseases = $('input[name="chronic_diseases"]:checked').val()
    let chronic_diseases_area = $('#chronicarea').val();

    let chronic_prevent = $('input[name="chronic_prevent"]:checked').val()
    let chronic_prevent_area = $('#chronicPreventArea').val();

    let chronic_injuries = $('input[name="chronic_injuries"]:checked').val()
    let chronic_injuries_area = $('#chronicInjuriesArea').val();

    let injury_performing = $('input[name="injury_performing"]:checked').val()
    let injury_performing_area = $('#injuryPerformingArea').val();

    let particular_food = $('input[name="particular_food"]:checked').val()
    let particular_food_area = $('#particularFoodArea').val();

    let supplements = $('input[name="supplements"]:checked').val()
    let supplements_area = $('#supplementsArea').val();

    let supplements_faster = $('input[name="supplements_faster"]:checked').val()

    let daily_Activity = $('input[name="daily_Activity"]:checked').val()

    let go_gym = $('input[name="go_gym"]:checked').val()

    let When_train = $('input[name="When_train"]:checked').val()

    let nutrition_area = $('#nutritionArea').val();

    let workout_area = $('#workoutArea').val();

    let online_training_area = $('#onlineTrainingArea').val();

    let name = $('#exampleInputEmail1').val();

    let train_where = $('input[name="train_where"]:checked').val()
    let equipment_area = $('#equipmentArea').val();

    if (chronic_diseases == null ||
    chronic_prevent == null || chronic_injuries == null ||
    injury_performing == null || particular_food == null ||
    supplements == null || supplements_faster == null ||
    daily_Activity == null || go_gym == null || When_train == null ||
     nutrition_area == null || workout_area == null || online_training_area == null ||
      name == ""){
        alert('Please Fill All Form')
    }else{
        $.ajax({
    url:'/questionnaire/',
    type: "POST",
    data: {chronic_diseases: chronic_diseases,
    chronic_diseases_area: chronic_diseases_area,
    chronic_prevent:chronic_prevent,
    chronic_prevent_area:chronic_prevent_area,
    chronic_injuries:chronic_injuries,
    chronic_injuries_area:chronic_injuries_area,
    injury_performing:injury_performing,
    injury_performing_area:injury_performing_area,
    particular_food:particular_food,
    particular_food_area:particular_food_area,
    supplements:supplements,
    supplements_area:supplements_area,
    supplements_faster:supplements_faster,
    daily_Activity:daily_Activity,
    go_gym:go_gym,
    When_train:When_train,
    nutrition_area:nutrition_area,
    workout_area:workout_area,
    online_training_area:online_training_area,
    name:name,
    train_where:train_where,
    equipment_area:equipment_area
    },
    success:function(response){
    alert(response);
    window.location.reload(true);

    },
    complete:function(){},
    error:function (xhr, textStatus, thrownError){}
});


    }





 });

//$('#sub-food-name').on('click', function (event){
//        let carbohydrate = $('input[name="carbohydrate"]:checked').val();
//        let protein = $('input[name="protein"]:checked').val();
//        let dairy = $('input[name="dairy"]:checked').val();
//        let vegetables = $('input[name="vegetables"]:checked').val();
//        let fruits = $('input[name="fruits"]:checked').val();
//        let food_name = $('input[name="food_name"]:checked').val();
//        if (carbohydrate == null || protein == null || dairy == null || vegetables == null || fruits == null || food_name == ""){
//                    event.preventDefault();
//                    alert('Please Fill Form Data')
//
//        }
//
//
//});





})(jQuery);