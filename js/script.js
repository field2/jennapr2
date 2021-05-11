$( document ).ready(function() {

$('.hamburger').click(function() {

    $('.mainnav').toggleClass('appear');

});

});
$(document).ready(function () {

    $('.hamburger').click(function () {
        $(this).toggleClass('animated');
        $('.mainnav').toggleClass('appear');
 
    });
 
    var $carousel = $('.slides').flickity({
 
    });
 
 });