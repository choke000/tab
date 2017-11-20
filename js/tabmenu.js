$(function() {
  $('.tab__list li').on('click', function (e) {
    var num = $(".tab__list li").index(this);
    $(".tab__list li").removeClass('tab__item--active');
    $(".tab__list li").eq(num).addClass('tab__item--active');
    $(".content__item").removeClass('is-active');
    $(".content__item").eq(num).addClass('is-active');
  });
});