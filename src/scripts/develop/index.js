let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,

    });
    const markerIcon = {
        url: `${window.location.href}/img/maps.svg`,
        scaledSize: new google.maps.Size(21, 30),
    };
    let marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644  },
        map: map,
        icon: markerIcon,
        title: '12356',
    });


}



const openMenu = () => {
    $('.header__burger').toggleClass("header__burger-open");
    $('.header__menu').toggleClass('header__menu-show');
    $('body').toggleClass('hidden');
};

function changeToMob() {
    if (window.innerWidth <= 666) {
        $('.article__back button').text('')
        $('.header__menu .header__logo').closest('li').remove()
        // $('.music__more').text('Go to the all posts')
        initSlider()
        let breadcrumbs = $('.breadcrumbs')
        $('.delivery').prepend(breadcrumbs)
        $('.article__social-wrap').prepend("<div class='article__social-button'></div>")
        showSocial()
        const recommended = new Swiper('.article__recommended-slider', {
            slidesPerView: 1.5,
            spaceBetween: 10,
            centeredSlides: false,

            loop: true,
            navigation: {
                nextEl: ".main__next",
                prevEl: ".main__prev"
            }

        });
        const showRelated = new Swiper('.show .upcoming__block', {
            slidesPerView: 1.5,
            spaceBetween: 10,
            centeredSlides: false,

            loop: true,
            navigation: {
                nextEl: ".main__next",
                prevEl: ".main__prev"
            }

        });


        const bandUpcoming= new Swiper('.band .upcoming__block', {
            slidesPerView: 1.5,
            spaceBetween: 10,
            centeredSlides: false,

            loop: true,
            navigation: {
                nextEl: ".main__next",
                prevEl: ".main__prev"
            }

        });
        const related = new Swiper('.related-slider', {
            slidesPerView: 1.5,
            spaceBetween: 10,
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
function filterActive () {
    $('.tickets__categories > a').click(function () {
        $(this).toggleClass('active');
        let activeTextArray = [];
        $(".active .tickets__categories-name").each(function() {
            let text = $(this).text();
            activeTextArray.push(text);
        });
        $('.categories__input').val(activeTextArray)

        let filterForm = $('.filter__form')
        page = 1;
        $('.page').val(page)
        sendForm(filterForm, '/wp-admin/admin-ajax.php', function(res){
            filterSuccess(res)
        } )
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


function showLabel(){
    $('.modal__form-content input').each(function (){
        $(this).click(function (){
            $(this).closest('.modal__form-content').find('.label').addClass('active')
        })
    })
}

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
    //     return this.optional(element) || /^[+]*[0-9]{15,20}$/g.test(value);
    // }, "Please enter correct phone number");

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
            phone: {
                required: true,
                // goodPhone: true

            },
            email: {
                required: true,
                goodEmail: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            passwordNew: {
                required: true,
                minlength: 8,
            },
            passwordNewRepeat: {
                required: true,
                minlength: 8,
                equalTo: "#passwordNew"
            }
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
            phone: {
                required: "This field is required",
                phone: "Please enter correct phone number"
            },
            email: {
                required: "This field is required",
                email: "Please enter correct email"
            },
            password: {
                required: "This field is required",
                minlength: "Last name can't be shorter than 8 characters",
            },
            passwordNew: {
                required: "This field is required",
                minlength: "Last name can't be shorter than 8 characters",
            },
            passwordNewRepeat: {
                required: "This field is required",
                equalTo: "Passwords do not match"
            }

        },
        submitHandler: function () {
            func();
            form[0].reset();
        }
    });
};





// create ajax
function ajaxSend(date, url, funcSuccess,funcError) {
    $.ajax({
        url: url,
        data: date,
        method: 'POST',
        success: function (data) {
            funcSuccess(data);
        },
        error: function (error) {
            funcError(error)

        },
        complete: function () {}
    });

}

// send form
function sendForm(form, url, funcSuccess,funcError) {
    form = form.serialize();
    ajaxSend(form, url, funcSuccess,funcError);
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
    $('.modal__ok').click(function () {
        $(this).closest(modal).hide();
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
    $('.modal__ok').click(function () {
        console.log(333,$(this).closest(modal))
        $(this).closest(modal).hide();
        $('body').css('overflow', 'visible');
        console.log(123)
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


function tabs(tab, tabItem) {
    tab.click(function () {
        tab.removeClass("active").eq($(this).index()).addClass("active");
        tabItem.hide().eq($(this).index()).fadeIn();
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

function drop(drop, inner){
    $(document).on('click', drop, function () {
        $(this).find(inner).toggle()
    })
    $(document).on('click', function(e) {
        let targetElement = drop;
        let clickedElement = $(e.target);
        if (!clickedElement.is(targetElement) && !targetElement.has(clickedElement).length) {
            inner.hide()
        }
    })
}

function dropDown(){
    if (window.innerWidth > 666) {
        drop($('.filter .filter__dropdown'), $('.filter .filter__inner'))
    }
    drop($('.modal .filter__dropdown'), $('.modal .filter__inner'))
    $('.filter__inner-item').each(function () {
        $(this).click(function () {
            $(this).addClass('active');
            $(this).prevAll('.filter__inner-item').removeClass('active');
            $(this).nextAll('.filter__inner-item').removeClass('active');
            let current = $(this).text()
            $(this).closest('.filter__item').find('input').val(current)

            $('.modal__dropdown .filter__header').css('color','#212121')
            $(this).closest('.modal .filter__item ').find('.filter__header').text(current)
            if (window.innerWidth > 666) {
                $(this).closest('.filter .filter__item ').find('.filter__header').text(current)
            }
            page = 1;
            $('.page').val(page)
            sendForm( $('.filter__form'), '/wp-admin/admin-ajax.php', function (res){
                filterSuccess(res)
            })

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



function filterSuccess(res){
    $('.shop__block').html(res);
    $('.shows__block').html(res);
    $('.recommended').remove()
    $('.upcoming').remove()
    $('.tickets').after(res)
}


let page = 1;
function loadMore(){
    $(document).on('click', '.section__load', function () {
        page++
        $('.page').val(page)
        let form = $('.filter__form')
        const formData = new FormData(form[0]);
        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            data: formData,
            processData: false,
            contentType: false,
            method: 'POST',
            success: function (res) {
                console.log('success ajax');
                // $('.upcoming__block').html(res);


                //front page
                $('.music__more').remove()
                $('.music__block').append(res);

                //shows page
                $('.shows__load').remove()
                $('.shows__block').append(res);

                //shop page
                $('.shop__load').remove()
                $('.shop__block').append(res);

                // blog page
                $('.blog__load').remove()
                $('.blog__block').append(res);


            },
            error: function (error) {
                console.log('error', error);
            },
        });
    })
}

function dropDesc(){
    $('.oneproduct__description-drop').click(function (){
        $('.oneproduct__description-inner').toggleClass('active')
    })
}


function copyUrlHandler() {
    $(document).on('click', '[data-copy]', function () {
        const url = location.href;
        navigator.clipboard.writeText(url);
    });
}

function shareButton(){
    $(document).on('click', '.article__social-item', function () {
        const searchUrl = $(this).attr('data-url-search');
        const searchTitle = $(this).attr('data-title');
        console.log(searchTitle);
        if (navigator.share) {
            navigator.share({
                title: searchTitle,
                text: searchTitle,
                url: searchUrl,
            })
                .then(() => console.log('Successful share'))
                .catch(error => console.log('Error sharing:', error));
        }
        else {
            $('.share__icon.share-button').css('display','none');
            console.log('Your Browser doesnt support Web Share API')
        }
    });
}

function showTickets(){
    let filterForm = $('.filter__form')

    $(document).on('change','.filter__datepicker',function (){
        page = 1;
        $('.page').val(page)
        console.log(45678)
        sendForm(filterForm, '/wp-admin/admin-ajax.php',function (res){
            //shows page
            $('.shows__block > *').remove()
            $('.shows__block').html(res)

            //tickets page
        })
    })
    $(document).on('change','.filter__select',function (){
        page = 1;
        $('.page').val(page)
        sendForm(filterForm, '/wp-admin/admin-ajax.php')
    })


    // $(document).on('change','.shop .filter__header',function (){
    //     sendForm(filterForm, '/wp-admin/admin-ajax.php')
    // })
    filterForm.on("submit", function (e) {
        e.preventDefault();
        sendForm(filterForm, '/wp-admin/admin-ajax.php'), function (){
            page = 1;
            $('.page').val(page)
            $('.filter__mob-wrap').removeClass('active')
        }
        $('.filter__mob-wrap').removeClass('active')
    });
    filterForm.on("reset", function (e) {
        e.preventDefault();
        page = 1;
        $('.page').val(page)
        $('.filter__sort-input').val('')
        $('.filter__datepicker').val('')
        $('.filter__datepicker').attr('placeholder','Date')
        $('.select2-selection__rendered').attr('placeholder','Date')
        $('.tickets__categories > a').each(function (){
            $(this).removeClass('active')
        })
        $('.filter__select option').each(function (){
            $(this).removeAttr('selected');
        })
        $('.categories__input').val('')


        changeFilter()

        sendForm(filterForm, '/wp-admin/admin-ajax.php'), function (res){
            page = 1;
            $('.page').val(page)
            $('.filter__mob-wrap').removeClass('active')

            filterSuccess(res)
        }
        $('.filter__inner-item').removeClass('active')
        $('.filter__mob-wrap').removeClass('active')
    });
}







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


function changeColorDropdown(){
    $('.modal__dropdown .filter__header').addClass('modal__dropdown-header')
}


function changeProfileInfo() {
    // let arrProfile = [];
    let currentInput
    let currentInputValue

    $('.profile__info-edit').click(function () {
        currentInput = $(this).closest('.profile__info-input').find('input')
        currentInputValue = currentInput.val()
        $(this).hide();
        currentInput.prop('disabled', false).focus()
        $(this).next('.profile__info-btn').css('display','flex')

    });

    $('.profile__info-cancel').click(function () {
        currentInput.prop('disabled', true)
        currentInput.val(currentInputValue)
        $(this).closest('.profile__info-input').find('.profile__info-edit').show();
        $(this).closest('.profile__info-btn').hide()
    });
    $('.profile__info-change').click(function () {
        $('.profile__info-input').find('input').prop('disabled', false)
        $(this).closest('.profile__info-input').find('.profile__info-edit').show();
        $(this).closest('.profile__info-btn').hide()

        let newValue = currentInput.val()
        currentInput.val(newValue)

        let profileForm = $('.profile__info')
        validateForm(profileForm, function () {
            sendForm(profileForm, '/wp-admin/admin-ajax.php')
        });

    })
}



$(document).ready(function(){
    $('.header__burger').on('click', openMenu);
    changeToMob()
    tabs($('.tab'), $('.tab__item'));
    tabs($('.tab__order'), $('.tab__item-order'));
    filterMob()
    $('.filter__select').select2({
        placeholder: "Please select a country"
    }).on('select2:opening', function(e) {
        $(this).data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'Search')
    })
    dropDesc()
    changeFilter()
    filterActive()
    removeNews();
    search()
    filterActiveOne();
    calendar()
    dropDown()
    goBack()
    showTickets()
    showPassword()
    changeColorDropdown()
    changeProfileInfo()
    showLabel()
    changeContent($('.modal__enter-reg'), $('.modal__reg'));
    changeContent($('.modal__reg-enter'), $('.modal__enter'));
    changeContent($('.modal__enter-forget'), $('.modal__forget'));
    toogleModal($('.header__user'), $('.modal__auth'));
    loadMore()
    copyUrlHandler()
    toogleModal($('.shows__map'),$('.modal__map') )
    // shareButton()

    let subsForm = $('.subs__form');
    let subsModal = $('.modal__subs');
    validateForm(subsForm, function () {
        sendForm(subsForm, '/wp-admin/admin-ajax.php', function (){
        });
        toogleModalWithoutClick(subsModal)
    });

    //change password
    let passwordForm = $('.password__form');
    let passwordModal =$('.modal__password');
    validateForm(passwordForm, function () {
        sendForm(passwordForm, '/wp-admin/admin-ajax.php', function (){
        });
        toogleModalWithoutClick(passwordModal)
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

        $('.modal__reg').hide();
        toogleModalWithoutClick($('.modal__reg-success'))
    })

    // forgot password form
    let formForgot = $('.modal__form-forget');
    validateForm(formForgot, function () {
        sendForm(formForgot, '/wp-admin/admin-ajax.php');
        $('.modal__forget').hide();
        $('.modal__forget-mail').show();
    });
    initMap()
});

$(window).load(function(){

});

$(window).resize(function(){

});