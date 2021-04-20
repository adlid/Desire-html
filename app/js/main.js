$(function() {
    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu__close')
    })
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu__close')
    })
})