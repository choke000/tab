$(function() {
  $('.tab__list li').on('click', function (e) {
    //クリックされたタブリストのインデックス番号を取得して引数numに代入
    var num = $(".tab__list li").index(this);
    //選択中のタブからアクティブのクラスを外す
    $(".tab__list li").removeClass('tab__item--active');
    //指定したインデックス番号にアクティブ用のクラスを追加   
    $(".tab__list li").eq(num).addClass('tab__item--active');
    //選択中のタブの中身からアクティブのクラスを外す
    $(".content__item").removeClass('is-active');
    //指定したタブの中身のインデックス番号にアクティブ用のクラスを追加
    $(".content__item").eq(num).addClass('is-active');
  });
});