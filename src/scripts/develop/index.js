
const openMenu = () => {
    $('.header__burger').toggleClass("header__burger-open");
    $('.header__menu').toggleClass('header__menu-show');
    $('body').toggleClass('hidden');
};

function changeToMob() {
    if (window.innerWidth <= 666) {
        $('.header__menu .header__logo').closest('li').remove()
        $('.music__more').text('Go to the all posts')
        initSlider()
        let breadcrumbs = $('.breadcrumbs')
        $('.delivery').prepend(breadcrumbs)
        $('.article__social-wrap').prepend("<div class='article__social-button'></div>")

        const recommended = new Swiper('.article__recommended-slider', {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: false,

            loop: true,
            navigation: {
                nextEl: ".main__next",
                prevEl: ".main__prev"
            }

        });
        const related = new Swiper('.related-slider', {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: false,

            loop: true,
            navigation: {
                nextEl: ".main__next",
                prevEl: ".main__prev"
            }

        });


    }

}

function showSocial(){
    $(document).on('click','.article__social-wrap', function (){
        $('.article__social').toggle()
    })
}
function filterActive (item) {
    item.click(function () {
        $(this).toggleClass('active');
        console.log(1234)
    });
};


function goBack(){
    $('.article__back').click(function () {
        if( window.history.length == 0){
            window.location.href = '/'
        }
        history.back()
    })

}

function removeNews(){
    $('.news__block .news__close').click(function (){
        $(this).closest('.news').hide();
    })
}

function search(){
    let searchForm = $('.header__search-form');
    let searchButton = $('.header__search');
    searchButton.click(function (){
        searchForm.show()
        $(document).on("click", function(event) {
            if (!searchForm.is(event.target) && searchForm.has(event.target).length === 0  && !searchButton.is(event.target) && searchButton.has(event.target).length === 0) {
                searchForm.hide();
            }
        });
    })
}


function initSlider () {
    $('.posts__slider').each(function() {
        new Swiper(this, {
            slidesPerView: 1.25,
            spaceBetween: 10,
            centeredSlides: false,
            loop: true,
        });
    });
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

    $.validator.addMethod("goodName", function (value, element) {
        return this.optional(element) || /^[\sаА-яЯіІєЄїЇґҐa-zA-Z0-9._-]{2,30}$/i.test(value);
    }, "Please enter correct");

    $.validator.addMethod("goodEmail", function (value, element) {
        return this.optional(element) || /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,62}$/i.test(value);
    }, "Please enter correct email");

    // $.validator.addMethod("goodPhone", function (value, element) {
    //     // return this.optional(element) || /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/i.test(value);
    //     return this.optional(element) || /^[+]*[0-9]{10,14}$/g.test(value);
    // }, "Введіть номер у форматі +380 xxx xx xx");

    form.validate({
        rules: {
            name: {
                required: true,
                goodName: true
                // minlength:2,
                // maxLength: 25
            },
            lastname: {
                required: true,
                goodName: true
            },
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
            password: {
                required: true,
                minlength: 8
            },
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
            name: {
                required: "This field is required",
                minlength: "First name can't be shorter than 2 characters",
                maxLength: "First name can't be longer than 25 characters "
            },
            lastname: {
                required: "This field is required",
                minlength: "Last name can't be shorter than 2 characters",
                maxLength: "Last name can't be longer than 25 characters "
            },
            // phone: {
            //     required: "Це поле є обов’язкове",
            //     phone: "Введіть номер у форматі +380 xxx xx xx"
            // },
            email: {
                required: "This field is required",
                email: "Please enter correct email"
            },
            password: {
                required: "This field is required",
                minlength: "Last name can't be shorter than 8 characters",
            },
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

// show&hide password
function showPassword() {
    $('.modal__form-eye').click(function (e) {
        $(this).toggleClass('active');
        $(this).hasClass('active') ? $(this).closest('.modal__form-password').find('input').attr('type', 'text') : $(this).closest('.modal__form-password').find('input').attr('type', 'password');
    });
}

// to default after close modal
function resetForm() {
    $('.modal__forget').hide();
    // $('.modal__newpassword-create').show();
    // $('.modal__newpassword-success').hide();
    $('.modal__forget-wrap').show();
    $('.modal__forget-mail').hide();
    $('.modal__reg-success').hide();
    $('.modal__reg').hide();
    $('.modal__enter').show();
}

// change content in modal window
function changeContent(btn, content) {
    btn.click(function () {
        $(this).closest('.modal__content').hide();
        content.show();
    });
}


// open modal with click
function toogleModal(btn, modal) {
    btn.click(function () {
        modal.show();
        $('body').css('overflow', 'hidden');
        return false;
    });
    $('.modal__close').click(function () {
        $(this).closest(modal).hide();
        resetForm();
        $('body').css('overflow', 'visible');
        return false;
    });
    $('.modal__quiz-return').click(function () {
        $(this).closest(modal).hide();
        $('body').css('overflow', 'visible');
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            modal.hide();
            resetForm();
            $('body').css('overflow', 'visible');
        }
    });
    modal.click(function (e) {
        if ($(e.target).closest('.modal__content').length == 0) {
            $(this).hide();
            resetForm();
            $('body').css('overflow', 'visible');
        }
    });
}


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
            initSlider()
        }

    }).eq(0).addClass("active");

}

function changeFilter(){
    $('.select2-selection__rendered').each(function (){
        let placeholder = $(this).closest('.filter__item').find('.filter__header').text()
        $(this).text(placeholder)
    })
}

function filterActiveOne(){
    $('.blog__display-item').click(function () {
        $(this).addClass('active');
        $(this).prevAll('.blog__display-item').removeClass('active');
        $(this).nextAll('.blog__display-item').removeClass('active');
        let list =  $('.blog__list')
        if($('.blog__display-menu').hasClass('active')){
            list.addClass('blog__list-menu')
            list.removeClass('blog__list-list')
        }
        if($('.blog__display-list').hasClass('active')){
            list.addClass('blog__list-list')
            list.removeClass('blog__list-menu')
        }
    });
};

function calendar(){
    $(".filter__datepicker").datepicker({
        dateFormat: 'dd/mm/yy'
    });
}

function dropDown(){
    if (window.innerWidth > 666) {
        $(document).on('click', '.filter__dropdown', function () {
            $(this).find('.filter__inner').toggle()
        })
        $(document).on('click', function(e) {
            let targetElement = $('.filter__dropdown');
            let clickedElement = $(e.target);

            if (!clickedElement.is(targetElement) && !targetElement.has(clickedElement).length) {
                console.log('ltcm')
                $('.filter__inner').hide()
            }
        })

    }
    $('.filter__inner-item').each(function () {
        $(this).click(function () {
            $(this).addClass('active');
            $(this).prevAll('.filter__inner-item').removeClass('active');
            $(this).nextAll('.filter__inner-item').removeClass('active');
            let current = $(this).text()
            $(this).closest('.filter__item').find('input').val(current)

            if (window.innerWidth > 666) {
                $(this).closest('.filter__item ').find('.filter__header').text(current)
            }
            sendForm( $('.filter__form'), '/wp-admin/admin-ajax.php')
        });
    })
}

function filterMob(){
    $('.filter__mob').click(function (){
        $('.filter__mob-wrap').addClass('active')
        $('.hidden').addClass('hidden')
    })
    $(document).on('click','.filter__mob-close', function (){
        $('.filter__mob-wrap').removeClass('active')
    })

}


function showTickets(){
    let filterForm = $('.filter__form')
    filterForm.on("submit", function (e) {
        e.preventDefault();
        sendForm(filterForm, '/wp-admin/admin-ajax.php'), function (){
            $('.filter__mob-wrap').removeClass('active')
        }
        $('.filter__mob-wrap').removeClass('active')
    });
    filterForm.on("reset", function (e) {
        e.preventDefault();
        sendForm(filterForm, '/wp-admin/admin-ajax.php'), function (){
            $('.filter__mob-wrap').removeClass('active')
        }
        $('.filter__mob-wrap').removeClass('active')
    });

    $(document).on('change','.filter__datepicker',function (){
        sendForm(filterForm, '/wp-admin/admin-ajax.php')
    })
    $(document).on('change','.filter__select',function (){
        sendForm(filterForm, '/wp-admin/admin-ajax.php')
    })
    $(document).on('change','.filter__sort .filter__header',function (){
        sendForm(filterForm, '/wp-admin/admin-ajax.php')
    })
}




// const ajaxGetProduct =(obj)=>{
//     $.ajax({
//         type: 'POST',
//         url: '/wp-admin/admin-ajax.php',
//         data: obj,
//         success: function (res) {
//             // $('.shop__main .shop__load').remove();
//             // $('.shop__main .shop__list').append(res);
//
//         },
//     });
//
// }
//
// let page = 1;
// const loadMore = () =>{
//     $(document).on('click', '.upcoming__load', function () {
//         page++;
//         // let formdata = $('.filter__form').serializeArray();
//         const categories = $('.tickets__categories.active')
//         const data = {};
//         console.log(data,12345)
//         // $(formdata).each(function(index, obj){
//         //     data[obj.name] = obj.value;
//         // });
//         delete data.action;
//         const obj = { ...data, page, categories, action:'loadmore'}
//         ajaxGetProduct(obj);
//     })
// }




function enterError(error){
    if(error.responseJSON.data === "user_empty" ){
        $('.modal__form').prepend('<div class="error-mail">User with this email does not exits</div>')
    }
    if(error.responseJSON.data === "incorrect_password" ){
        $('.modal__form').prepend('<div class="error-mail">Passwo</div>')
    }
    if(error.responseJSON.data === "user_exists" ){
        $('.modal__form').prepend('<div class="error-mail">User with this email exists</div>')
    }

    setTimeout(function () {
        $('.error-mail').hide()
    }, 4000);

}

function registerSuccess (res){
    $('.header__user').attr('href', `${res.data.redirect_url}`);
    $('.header__user').removeClass('header__auth').unbind();
    $('.modal__enter-wrap').hide();
    toogleModalWithoutClick($('.modal__reg-success'))
}

function enterSuccess(){
    $('.modal__auth').hide();
}







$(document).ready(function(){
    $('.header__burger').on('click', openMenu);
    changeToMob()
    tabsPosts()
    filterMob()
    $('.filter__select').select2({

    }).on('select2:opening', function(e) {
        $(this).data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'Search')
    })
    changeFilter()
    filterActive($('.tickets__categories > *'))
    removeNews();
    search()
    filterActiveOne();
    showSocial()
    calendar()
    dropDown()
    goBack()
    showTickets()
    showPassword()
    changeContent($('.modal__enter-reg'), $('.modal__reg'));
    changeContent($('.modal__reg-enter'), $('.modal__enter'));
    changeContent($('.modal__enter-forget'), $('.modal__forget'));
    toogleModal($('.header__user'), $('.modal__auth'));
    // loadMore()

    let subsForm = $('.subs__form');
    let subsModal = $('.modal__subs');
    validateForm(subsForm, function () {
        sendForm(subsForm, '/wp-admin/admin-ajax.php', function (){
        });
        toogleModalWithoutClick(subsModal)
    });



    let searchForm = $('.header__search-form')
    validateForm(searchForm, function () {
        sendForm(searchForm, '/wp-admin/admin-ajax.php'), function (){
            $('.header__search-form').hide()
        }
    });



    let formEnter = $('.modal__form-enter');
    validateForm(formEnter, function () {
        sendForm(formEnter, '/wp-admin/admin-ajax.php', enterSuccess, enterError);
    });

    // register form
    let formRegister = $('.modal__form-reg');
    validateForm(formRegister, function () {
        sendForm(formRegister, '/wp-admin/admin-ajax.php', registerSuccess, enterError);
    })

    // forgot password form
    let formForgot = $('.modal__form-forget');
    validateForm(formForgot, function () {
        sendForm(formForgot, '/wp-admin/admin-ajax.php');
        $('.modal__forget-wrap').hide();
        $('.modal__forget-mail').show();
    });
});

$(window).load(function(){

});

$(window).resize(function(){

});