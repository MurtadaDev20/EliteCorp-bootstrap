$(function () {
var     winH =$(window).height(),
        upperH = $('.upper-bar'). innerHeight(),
        navH =$('.navbar').innerHeight ();
$('.slider ,.carousel-item').height(winH - (upperH + navH));

// featured work shouffle
$('.featured-work ul li').on('click', function () {
    $(this).addclass('active').siblings().removeclass('active');
    console.log($(this).data('class'))
});

});