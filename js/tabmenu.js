$(function() {
  $('.tab__items li').click(function() {

    // 選択されたタブの順番を変数に格納
    var index = $('.tab__items li').index(this);
 
    // 選択済み用cssのクラスを一旦削除
    $('.tab__items li').removeClass('tab__items--active');
 
    // 選択されたタブに対しactiveのスタイルを適用
    $(this).addClass('tab__items--active');
 
    // コンテンツを一旦非表示→選択された順番のコンテンツを表示
    $('.tab__contents ul').removeClass('tab__contents--active').eq(index).addClass('tab__contents--active');
 
  });
});