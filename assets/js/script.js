// MENU
$(function() {
    $(".header_list").hide();
    $(".header_list li").hide();
    $(".menu_btn").on("click", function() {
        if ($(".header_list").hasClass("hide")) {
            $(".header_list").removeClass("hide");
            $(".menu_btn").removeClass("open");
            $(".header_list").slideToggle('medium');
            $(".header_list li").slideToggle('medium');
        } else {
            $(".header_list").addClass("hide");
            $(".menu_btn").addClass("open");
            $(".header_list").slideToggle('medium');
            $(".header_list li").slideToggle('medium');
        }
    });
});

// CHOOSE STREET
$(function() {
    $(".street_list").hide();
    $("#street").on("click", function() {
        $(".street_list").show('slow');
        $(".street_list li").each(function() {
            $(this).click(function(e) {
                $("#street").html(e.target.innerHTML);
                $(".street_list").hide('slow');
                if (e.target.innerHTML === "Московский район") {
                    $(".delivery_time_m").text('с 9.00 до 12.00');
                    $(".delivery_time_e").text('с 16.00 до 22.00');
                } else if (e.target.innerHTML === "Северозападный район") {
                    $(".delivery_time_m").text('с 9.00 до 14.00');
                    $(".delivery_time_e").text('с 17.00 до 00.00');
                } else {
                    $(".delivery_time_m").text('с 10.00 до 12.00');
                    $(".delivery_time_e").text('с 18.00 до 22.00');
                }
            });
        })
    });
});

// ФИЛЬТР ВОПРОСОВ
function filter_quest(list, parent, tabs) {
$(list).on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest(parent).find(tabs).removeClass('active').eq($(this).index()).addClass('active');
    });
}
filter_quest('.FAQ_answer', '.FAQ', '.tabs_content');

// ВОПРОСЫ И ОТВЕТЫ

filter_quest('.FAQ_wl', '.FAQ_wl', '.FAQ_desc');

// ОПЛАТА И ДОСТАВКА

filter_quest('.delivery_pay_list', '.main_content', '.tabs_content_dp');

// ПРОФИЛЬ

filter_quest('.top_profile_list', '.main_content', '.tabs_profile');

// СЛАЙДЕР
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
    margin:10,
    dots:false,
    nav:false,
    responsive:{
        320:{
            items:1
        },
        586:{
            items:2
        },
    }
    })
});

// РАЦИОН ФИЛЬТР
$(function() {
    if ($(window).width() > 714) {
        $('.all_filter').show();
    }
    if($(window).width() < 714) {
        console.log($(window).width());
        $('.all_filter').hide();
    } else {
        $('.all_filter').show();
    }
    $('.hide_filter').on('click', function(){
        $('.all_filter').slideToggle();
        
    });
});

// ФИЛЬТР РАЦИОНОВ
function filter(list, card) {
    $(list +' li').each(function() {
        $(this).click(function() {
            let current = $(this).attr('id');
            $(card).each(function() {
                if (current == 'all') {
                    $(this).show();
                }  else if (current != $(this).attr('id')) {
                    $(this).hide();
                }
                else {
                    $(this).show();
                }
            }); 
        });
    });
}
filter('.filter_list', '.card_diet');
filter('.shop_filter_list', '.shop_card');

// ПРОФИЛЬ
$(function() {
    if ($(window).width() > 1024) {
        $('.profile_list').hide();
    } else {
        $('.left_profile_window').hide();
        $('.top_profile_list').find('li').on('click', () => {
            $('.left_profile_window').hide('slow');
        });
    }
    $('.profile_list').on('click', () => {
        $('.left_profile_window').slideToggle();
    });
});

// CART COUNTER
$(function() {
    $('.btn_increment').on('click', (e) => {
        e.preventDefault();
        const countInput = $(e.target).parent().find('.input_count');
        let counter = countInput.val();
        
        if (counter < 99) {
            counter++;
            countInput.val(counter);
            const parentSum = $(e.target).parent().parent().find('span');
            $(parentSum).html($(parentSum).attr('id') * countInput.val() + ' руб.');

            // let curPrice = parseInt(parentSum.html().match(/\d+/));
            // let cart = {
            //     product: curPrice
            // };
            
            // $('.enter_price').html(cart.product + ' руб.');
        }
    });

    $('.btn_decrement').on('click', (e) => {
        e.preventDefault();
        const countInput = $(e.target).parent().find('input');
        let counter = countInput.val();
        if(counter > 1) {
            counter--;
            countInput.val(counter);
            const parentSum = $(e.target).parent().parent().find('span');
            $(parentSum).html($(parentSum).attr('id') * countInput.val() + ' руб.');

            // let cart = {
            //     product: parseInt(parentSum.html().match(/\d+/))
            // };
            // $('.enter_price').html(cart.product + ' руб.');
        }
    });

    $('.input_count').on('input', (e) => {
        e.preventDefault();
            const countInput = $(e.target).parent().find('.input_count');
            const parentSum = $(e.target).parent().parent().find('span');
            $(parentSum).html($(parentSum).attr('id') * countInput.val() + ' руб.');
    });
});

// MORE VIEW CERT
$(function() {
    $('.btn_more_view').on('click', () => {
        if ($('.certs_list').hasClass('hide_list')) {
            $('.certs_list').removeClass('hide_list');
            $('.certs_list').addClass('show_list');
        } else {
            $('.certs_list').removeClass('show_list');
            $('.certs_list').addClass('hide_list');
        }
    });
});

// MODAL WINDOW
$(function() {
    $('.close').each((item, i) => {
        $(i).click(() => {
            $('.modal').removeClass('modal_active');
            $('.modal_quest').removeClass('modal_active');
            $('body').css('overflow-y', '');
        });
    })

    $('.btn').each((item, i) => {
        $(i).click(() => {
            $('.modal').addClass('modal_active');
            $('body').css('overflow-y', 'hidden');
        });
    });

    $('.button_ask').click(() => {
        $('.modal_quest').addClass('modal_active');
        $('body').css('overflow-y', 'hidden');
    });
});

// SLIDER CARD 
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        centerMode: true,
        nextArrow: false,
        prevArrow: false,
        centerPadding: '100px',
        asNavFor: '.slider_n',
        responsive: [
        {
            breakpoint: 1280,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            centerPadding: '50px',
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            centerPadding: '10px',
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            centerPadding: '50px',
            }
        }
        ]
    });
    $('.slider_n').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.slider',
        centerPadding: '0',
        dots: false,
        nextArrow: false,
        prevArrow: false,
        centerMode: true,
        focusOnSelect: true
      });
});

// DESC CARD PROGRAM
$(function() {
    if ($(window).width() <= 768) {
        $('.about_program').hide();
        $('.ap').click(() => {
            $('.about_program').toggle('medium');
        });
    }
});

        

$(function() {
    let signInForm = $('#signIn-form');
    let signUpForm = $('#signUp-form');
    let toggleBtn = $('#toggle_btn');
    let signInBtn = $('#signIn-btn');
    let signUpBtn = $('#signUp-btn');

    signInBtn.on('click', () => {
    signInForm.css('left', '0px');
    signUpForm.css('left', '350px');
    toggleBtn.css('left', '25px');
    signInBtn.addClass('active');
    signUpBtn.removeClass('active');

});

    signUpBtn.on('click', () => {
    signInForm.css('left', '-350px');
    signUpForm.css('left', '0px');
    toggleBtn.css('left', '178px');
    signInBtn.removeClass('active');
    signUpBtn.addClass('active');
});
});

// ANCHOR-SCROLL
$(function() {
    $('.button_try').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#how_scroll').offset().top }, 1000);
        e.preventDefault();
      });
});

// ANIMATION
$(function() {
    new WOW().init();
});

// PRELOADER
$(function() {
    $(window).on('load', function () {
        $('.preloader').fadeOut().end().delay(50).fadeOut('slow');
    });
});

// HIDE/SHOW PASSWORD
$(function() {
    let eyes = document.querySelectorAll('span.fi-rr-eye'),
        password_input = document.querySelectorAll('.password input');
    
    let i = 0;
    eyes.forEach(eye => {
        eye.onclick = () => {
        if(i == 0) {
            password_input.forEach(pi => {
                pi.type = "text";
                eye.classList.replace('fi-rr-eye', 'fi-rr-eye-crossed');
                i = 1;
            });
            
        } else {
            password_input.forEach(pi => {
                pi.type = "password";
                eye.classList.replace('fi-rr-eye-crossed', 'fi-rr-eye');
                i = 0;
            });
        }
    };
    });

    // $('.submit').click((e)=> {
    //     e.preventDefault();
    //         $(e.target).parent().find('input').each((i, input) => {

    //     if ($(input).val() == "") {
    //         $(e.target).parent().find('.alert').text('Заполните поля');
    //         $(input).css('border-color', '#f3062dce');
    //     } else {
    //         $(input).css('border-color', '#efefef');
    //         $('.alert').text('');
    //         if ($(e.target).parent().find('.box').find('input').val().length < 5) {
    //             $(e.target).parent().find('.psw').text('Пароль слишком короткий');
    //             $(e.target).parent().find('.box').find('input').css('border-color', '#f3062dce');
    //         } else {
    //             $(e.target).parent().find('.box').find('input').css('border-color', '#efefef');
    //             $(e.target).parent().find('.psw').text('');
    //         }
    //     }
    //     });
    // });

    $('.form_signUp').hide();

    $('.si').on('click', () => {
        $('.form_signUp').show();
        $('.form_signIn').hide();
        $('.heading').text('Регистрация');
    });
    $('.su').on('click', () => {
        $('.form_signUp').hide();
        $('.form_signIn').show();
        $('.heading').text('Войти');
    });
});

// Описание товара
filter_quest('.desc_delivery_list', '.main_content', '.tabs_content_item');

// 

$(function() {
    $('.days_choose').on('click', (e) => {
        if($(e.target).attr('class') != 'days_choose') {
            $('.days').each((i,item) => {
                $(item).on('click', (e) => {
                    $('.days_choose').find('.days_active').removeClass('days_active');
                    $(item).addClass('days_active');
                    let price = $(item).data('card-price');
                    let day = $(item).data('card-day');
                    $('.pay_day').html(day);
                    $('.pay_price').html(price * day);
                });
            });
        }
    });
});

//

$(function() {
    $('.admin_tabs li').hover(function(){
        if(!$(this).hasClass('list_hover')) {
            $(this).css({
                "background-color": "#fff",
                "padding": "10px 20px",
                "border-top-left-radius": "25px",
                "border-bottom-left-radius": "25px",
                "transition": "all .3s ease"
            });
            $(this).find('a').css('color','rgb(89, 233, 113)');
        }
    }, function(){
        $(this).css({
            "background-color": "", 
            "padding": "",
            "border-top-left-radius": "",
            "border-bottom-left-radius": "",
            "transition": "all .3s ease"
        });
        $(this).find('a').css('color','');
        if($(this).hasClass('list_hover')) {
            $(this).find('a').css('color','rgb(89, 233, 113)');
        }
    }
);  
});