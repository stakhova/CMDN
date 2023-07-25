
const openMenu = () => {
    $('.header__burger').toggleClass("header__burger-open");
    $('.header__menu').toggleClass('header__menu-show');
    $('body').toggleClass('hidden');
};

function changeToMob(){
    if (window.innerWidth <= 666) {
        $('.header__menu .header__logo').closest('li').remove()
    }

}

const main = new Swiper('.main__block .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: true,

    loop: true,
    navigation: {
        nextEl: ".main__next",
        prevEl: ".main__prev"
    }

});

$(document).ready(function(){
    $('.header__burger').on('click', openMenu);
    changeToMob()
});

$(window).load(function(){

});

$(window).resize(function(){

});