$(function () {
    $('.hamburger-menu').click(function (e) { 
        e.preventDefault();
        $('.hamburger-menu').toggleClass('active');
    });
});