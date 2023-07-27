
const openMenu = () => {
    $('.header__burger').toggleClass("header__burger-open");
    $('.header__menu').toggleClass('header__menu-show');
    $('body').toggleClass('hidden');
};

function changeToMob(){
    if (window.innerWidth <= 666) {
        $('.header__menu .header__logo').closest('li').remove()
        $('.music__more').text('Go to the all posts')
        initSlider()

        // $('.posts__slider').each(function() {
        //     console.log(333,this)
        //     new Swiper(this, {
        //         slidesPerView: 1.3,
        //         spaceBetween: 10,
        //         centeredSlides: true,
        //         loop: true,
        //     });
        // });

    }

}





function initSlider () {
    // const swipers = $(`.${slider}`);
    $('.posts__slider').each(function() {
        new Swiper(this, {
            slidesPerView: 1.3,
            spaceBetween: 10,
            centeredSlides: false,
            loop: true,
        });
    });
    // swipers.each(function () {
    //     const ths = $(this);
    //     const id = ths.attr('id');
    //
    //     new Swiper(`.${id}`, {
    //         slidesPerView: 1.3,
    //         watchOverflow: true,
    //         spaceBetween: 10,
    //         speed: 300,
    //         slidesPerGroup: 1,
    //         centeredSlides: false,
    //
    //         loop:true,
    //         pagination: {
    //             el: `.${id}__swiper-pagination`,
    //         },
    //     });
    //
    // });
}

//
// function mySwiper() {
//
//     // Variables
//
//     // var $swiperContainer = $(".swiper-js-container");
//
//
//     function init($this) {
//
//         // Swiper elements
//
//         var $el = $('.swiper-container')
//
//
//
//         var $swiper = new Swiper($el, {
//             slidesPerView: 1,
//             spaceBetween: 10,
//             loop: true,
//             breakpoints: {
//                 767: {
//                     slidesPerView: 1
//                 },
//                 1024: {
//                     slidesPerView: 2
//                 },
//                 1270: {
//                     slidesPerView: 1
//                 }
//             },
//             pagination: {
//                 el: pagination,
//                 clickable: true,
//                 type: paginationType
//             },
//             navigation: {
//                 nextEl: navNext,
//                 prevEl: navPrev,
//             }
//         });
//
//     }
//
//     // Events
//     //$(document).ready(function() {
//     if ($el.length) {
//         $el.each(function(i, Slider) {
//             init($(Slider));
//         })
//     }
//     //});
//
//
// };
const validateForm = (form, func) => {
    form.on("submit", function (e) {
        e.preventDefault();
    });

    // $.validator.addMethod("goodName", function (value, element) {
    //     return this.optional(element) || /^[\sаА-яЯіІєЄїЇґҐa-zA-Z0-9._-]{2,30}$/i.test(value);
    // }, "Please");

    $.validator.addMethod("goodEmail", function (value, element) {
        return this.optional(element) || /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,62}$/i.test(value);
    }, "Please enter correct email");

    // $.validator.addMethod("goodPhone", function (value, element) {
    //     // return this.optional(element) || /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/i.test(value);
    //     return this.optional(element) || /^[+]*[0-9]{10,14}$/g.test(value);
    // }, "Введіть номер у форматі +380 xxx xx xx");

    form.validate({
        rules: {
            // name: {
            //     required: true,
            //     goodName: true
            //     // minlength:2,
            //     // maxLength: 25
            // },
            // lastname: {
            //     required: true,
            //     goodName: true
            // },
            // phone: {
            //     required: true,
            //     goodPhone: true
            //
            // },
            email: {
                required: true,
                goodEmail: true,
                email: true
            },
            // password: {
            //     required: true,
            //     minlength: 8
            // },
            // password_confirm: {
            //     required: true,
            //     minlength: 8,
            //     equalTo: "#password"
            // },
            // passwordNew: {
            //     required: true,
            //     minlength: 8
            // },
            // passwordNew_confirm: {
            //     required: true,
            //     minlength: 8,
            //     equalTo: "#passwordNew"
            // }
        },
        messages: {
            // name: {
            //     required: "Це поле є обов’язкове",
            //     minlength: "Ім'я не може бути коротше за 2 букви",
            //     maxLength: "Ім'я не може бути довше за 25 букви"
            // },
            // lastname: {
            //     required: "Це поле є обов’язкове",
            //     minlength: "Прізвище не може бути коротше за 2 букви",
            //     maxLength: "Прізвище не може бути довше за 25 букви"
            // },
            // phone: {
            //     required: "Це поле є обов’язкове",
            //     phone: "Введіть номер у форматі +380 xxx xx xx"
            // },
            email: {
                required: "This field is required",
                email: "Please enter correct email"
            },
            // password: {
            //     required: "Це поле є обов’язкове",
            //     minlength: "Пароль не може бути коротше за 8 символів"
            // },
            // password_confirm: {
            //     required: "Це поле є обов’язкове",
            //     equalTo: "Паролі не співпадають",
            //     minlength: "Пароль не може бути коротше за 8 символів"
            // },
            // passwordNew: {
            //     required: "Це поле є обов’язкове",
            //     minlength: "Пароль не може бути коротше за 8 символів"
            // },
            // passwordNew_confirm: {
            //     required: "Це поле є обов’язкове",
            //     equalTo: "Паролі не співпадають"
            // }

        },
        submitHandler: function () {
            func();
            form[0].reset();
        }
    });
};


// create ajax
function ajaxSend(date, url, func,funcError) {
    $.ajax({
        url: url,
        data: date,
        method: 'POST',
        success: function (data) {
            func(data);
        },
        error: function (error) {
            funcError(error)

        },
        complete: function () {}
    });

}

// send form
function sendForm(form, url, func,funcError) {
    form = form.serialize();
    ajaxSend(form, url, func,funcError);
}


const main = new Swiper('.main__slider', {
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: true,

    loop: true,
    navigation: {
        nextEl: ".main__next",
        prevEl: ".main__prev"
    }

});




function toogleModalWithoutClick(modal, func) {
    modal.show();
    $('body').css('overflow', 'hidden');

    $('.modal__close').click(function () {
        $(this).closest(modal).hide();
        $('body').css('overflow', 'visible');
        func();
        return false;
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            modal.hide();
            $('body').css('overflow', 'visible');
            func();
        }
    });
    modal.click(function (e) {
        if ($(e.target).closest('.modal__content').length == 0) {
            $(this).hide();
            $('body').css('overflow', 'visible');
            func();
        }
    });
}


function tabsPosts() {
    $(".posts__tab .tab").click(function () {
        $(".posts__tab .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".posts__tab-item").hide().eq($(this).index()).fadeIn();
        if (window.innerWidth <= 666) {
            // $('.posts__slider').each(function() {
            //     new Swiper(this, {
            //         slidesPerView: 1.3,
            //         spaceBetween: 10,
            //         centeredSlides: true,
            //         loop: true,
            //     });
            // });
            initSlider()
        }

    }).eq(0).addClass("active");

}

$(document).ready(function(){
    $('.header__burger').on('click', openMenu);
    changeToMob()
    tabsPosts()
    let subsForm = $('.subs__form');
    let subsModal = $('.modal__subs');
    validateForm(subsForm, function () {
        sendForm(subsForm, '/wp-admin/admin-ajax.php', function (){
        });
        toogleModalWithoutClick(subsModal)

    });

});

$(window).load(function(){

});

$(window).resize(function(){

});