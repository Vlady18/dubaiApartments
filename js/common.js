$(function(){

$('.js-form').each(function(i, el) {
console.log($(this))
 $(el).on('submit', function(event){
        event.preventDefault();
$('.loader').addClass('active');
        var $form = $(this);
        var $formId = $(this).attr('id');

        switch($formId) {
   case'goToNewPage':
	            $.ajax({
	                  type: 'POST',
	                  url: $form.attr('action'),
	                  data: $form.serialize()
	                })
	                .always(function (response) {  
	                    //ссылка на страницу "спасибо" - редирект
	                    location.href='http://dubai-apartments.ru/thank.html';
	                    //отправка целей в Я.Метрику и Google Analytics
	            //         ga('send', 'event', 'masterklass7', 'register');
			    // yaCounter27714603.reachGoal('lm17lead');
	            });
	        break;
		case'goToNewPage2':
	            $.ajax({
	                  type: 'POST',
	                  url: $form.attr('action'),
	                  data: $form.serialize()
	                })
	                .always(function (response) {  
	                    //ссылка на страницу "спасибо" - редирект
	                    location.href='http://dubai-apartments.ru/thank.html';
	                    //отправка целей в Я.Метрику и Google Analytics
	            //         ga('send', 'event', 'masterklass7', 'register');
			    // yaCounter27714603.reachGoal('lm17lead');
	            });
	        break;
            case'goToNewPage3':
                $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize()
                })
                    .always(function (response) {
                        //ссылка на страницу "спасибо" - редирект
                        location.href='http://dubai-apartments.ru/thank.html';
                        //отправка целей в Я.Метрику и Google Analytics
                        // ga('send', 'event', 'masterklass7', 'register');
                        // yaCounter27714603.reachGoal('lm17lead');
                    });
                break;
            case'goToNewPage4':
                $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize()
                })
                    .always(function (response) {
                        //ссылка на страницу "спасибо" - редирект
                        location.href='http://dubai-apartments.ru/thank.html';
                        //отправка целей в Я.Метрику и Google Analytics
                        // ga('send', 'event', 'masterklass7', 'register');
                        // yaCounter27714603.reachGoal('lm17lead');
                    });
                break;
            case'popupResult':
                $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize()
                })
                    .always(function (response) {
                        setTimeout(function () {
                            $('.loader').removeClass('active');
$('.modal').removeClass('active');
                        }, 500);
                        setTimeout(function () {
                            $('.thank').addClass('active');

                            }, 800);
                    });
                break;
        }
        });
});

   $('.call-popup').on('click', function(){
      $('.modal-container.form-modal').addClass('active');
   });
   $('.call-catalog').on('click', function(){
      $('.modal-container.form-modal-catalog').addClass('active');
   });
    var p = ['Beach Isle', 'Address Residences', 'Rahaal', 'La Voile', 'Seven Palm'];

    $('.slider-wrap').slick({
        infinite: true,
        slidesToShow: 1,
        // dots: true,
        // autoplay: true,
        slidesToScroll: 1,
        // dotsClass: 'slick-dots slider__dots',
        // customPaging: function(slick, index) {
        //     // var image = $(slick.$slides[index]).find('.slider__img').attr('src');
        //         return '<span>'+p[index]+'</span>'
        // }
    });


    $(".nav_href").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.carousel_obj').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev arrow_carousel"><i class="fa fa-angle-left"></i></div>',
        nextArrow: '<div class="next arrow_carousel"><i class="fa fa-angle-right"></i></div>',
    });

    $('.calc_answers input[type="radio"]').on('change', function(e){
        e.preventDefault();
        var currentQuest = +$(this).closest('.calc_answers').data('id');
        var nextQuest = currentQuest + 1;
        var a = $(this).closest('.calc_answers').removeClass('active');
        var b = $(this).closest('.calc_answers-wrap').find('div[data-id="'+nextQuest +'"]').addClass('active');
    });

    $("#menu, #mobile_menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 50;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.mob_but').on('click', function(){
        $('#mobile_menu').toggleClass('active');
    });

    $('#mobile_menu a').on('click', function(event){
        event.preventDefault();
        $('#mobile_menu').removeClass('active');
    });

    $('.custom-modal .close').on('click', function(){
        $('.modal-container').removeClass('active');
        $('body').css('overflow-y', 'auto');
    });
    //
    // $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    //     event.preventDefault();
    //     $(this).ekkoLightbox();
    // });
    //
    // $('.wrap_gallery').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     prevArrow: '<div class="prev arrow_carousel"><i class="fa fa-angle-left"></i></div>',
    //     nextArrow: '<div class="next arrow_carousel"><i class="fa fa-angle-right"></i></div>',
    //     dots: true
    // })

    //
    //
    // if ( $(window).width() > 568 ) {
    //     $(".group1").colorbox({
    //         rel:'group1',
    //         maxWidth: '700px',
    //         maxHeight: '700px',
    //     });
    // } else{
    //     $(".group1").colorbox({
    //         rel:'group1',
    //         maxWidth: '300px',
    //         maxHeight: '300px',
    //         slideshow: true
    //     });
    // }


    var gallery = $('.gallery a').simpleLightbox({
        /* options */
    });
    var gallery_beach = $('.gallery-beach a').simpleLightbox({
        /* options */
    });
    var gallery_jumeirah = $('.gallery-jumeirah a').simpleLightbox({
        /* options */
    });
    var gallery_port = $('.gallery-port a').simpleLightbox({
        /* options */
    });

    var gallery_seven = $('.gallery-seven a').simpleLightbox({
        /* options */
    });


    $('.address-call').on('click', function(){
        gallery.open();
    });
    $('.beach-call').on('click', function(){
        gallery_beach.open();
    });
    $('.jumeirah-call').on('click', function(){
        gallery_jumeirah.open();
    });
    $('.port-call').on('click', function(){
        gallery_port.open();
    });
    $('.seven-call').on('click', function(){
        gallery_seven.open();
    });


    // $('.call-plan').click(function (e) {
    //     e.preventDefault();
    //     $(this).ekkoLightbox();
    // });
    //
    // $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    //     event.preventDefault();
    //     $(this).ekkoLightbox();
    // });

    $('.call-map').on('click', function(e){
        e.preventDefault();
       $(this).closest('.objects').find('.modal-container.map-iframe').addClass('active');
       $('body').css('overflow-y', 'hidden');
    });

});