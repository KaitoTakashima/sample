//htmlの呼び出し
$(window).on('load', function() {
  $("#header").load('html/header.html');
  $("#main").load("html/main.html");
  $("#scroolbar").load("html/scroolbar.html");
  $("#footer").load("html/footer.html");
  $.getScript("js/script.js", function(){});
});

//ドロップダウンメニュー
$(function() {
  $('.main-menu').hover(
    function(){
      $(this).children('.sub-menu').slideDown(210);
    },
    function(){
      $(this).children('.sub-menu').hide();
    }
  );
});

//ハンバーガーメニュー
$(function() {
  $('.ham-btn').on('click', function() {
    $(this).toggleClass('active');
    setTimeout(function(){  //openクラスが適用されたままスライドダウンするため、210msストップ
      $('.p-header__nav__items').toggleClass('open');
      }, 210);
    // if($('.p-header__nav__items').hasClass('open')){
    //   $('.p-header__nav__items').slideToggle(210);
    //   // $('.p-header__nav__items').setTimeout(function(){  //openクラスが適用されたままスライドダウンするため、210msストップ
    //   //   $('.p-header__nav__items').toggleClass('open');
    //   // }, 210);
    //   setTimeout(function(){  //openクラスが適用されたままスライドダウンするため、210msストップ
    //     $('.p-header__nav__items').toggleClass('open');
    //     }, 210);
    //   // $('.p-header__nav__items').toggleClass('open');
    // } else{
    //   $('.p-header__nav__items').toggleClass('open');
    //   $('.p-header__nav__items').slideToggle(210);
    // }
    // $('.p-header__nav__items').slideToggle(210);
  });
});

//リサイズ時に読み込み
// $(window).resize(function(){
//   let width = $(window).width();
//   if(width <= 1200){   //リサイズ時の横並びナビメニュー再表示設定
//     $('.p-header__nav__items').css( {'display':'none'});
//     $('.main-menu__item').removeClass('c-btn--box');
//     $('.sub-menu__items').removeClass('c-btn--box');
//   } else{
//     $('.p-header__nav__items').css( {'display':'flex'});
//     $('.main-menu__item').addClass('c-btn--box');
//     $('.sub-menu__items').addClass('c-btn--box');
//   }
//   $('.ham-btn').removeClass('active');
//   while($('.p-header__nav__items').hasClass('open')){ //開いていたら
//     $('.p-header__nav__items').slideToggle(210);
//     break;
//   }
//   $('.p-header__nav__items').removeClass('open');
// });