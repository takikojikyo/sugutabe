$(function () {
  $(".toggle_btn").on("click", function () {
  $("header").toggleClass("open");
});
// メニューのリンクをクリックした時
$(".h-nav a").on("click", function () {
  $("header").toggleClass("open");
});



// $(function () {
//   // 初回ロード時にABOUTのactiveクラスを設定
//   $(".h-nav-menu li").removeClass("active");
//   $(".h-nav-menu1").addClass("active");

//   // 画面サイズによってイベントを有効/無効にする関数
//   function handleMenuEvents() {
//     var windowWidth = $(window).width();

//     if (windowWidth > 768) {
//       // PC表示時のクリックとスクロールイベント

//       // メニュー項目がクリックされた時にactiveクラスを切り替え
//       $(".h-nav-menu li a").on("click", function () {
//         $(".h-nav-menu li").removeClass("active");
//         $(this).parent().addClass("active");
//       });

//       // スクロール時に対応するセクションに応じてactiveクラスを付与
//       $(window).on("scroll", function () {
//         var scrollPos = $(window).scrollTop();
//         var offset = 100; // オフセットを調整して、三角形が適切なタイミングで移動するようにする

//         // 各セクションの位置を取得
//         var aboutPos = $("#about").offset().top - offset;
//         var trialPos = $("#trial").offset().top - offset;
//         var farmarsPos = $("#farmars").offset().top - offset;
//         var voicePos = $("#voice").offset().top - offset;

//         // スクロール位置に応じてactiveクラスを切り替え
//         if (scrollPos >= voicePos) {
//           $(".h-nav-menu li").removeClass("active");
//           $(".h-nav-menu4").addClass("active");
//         } else if (scrollPos >= farmarsPos) {
//           $(".h-nav-menu li").removeClass("active");
//           $(".h-nav-menu3").addClass("active");
//         } else if (scrollPos >= trialPos) {
//           $(".h-nav-menu li").removeClass("active");
//           $(".h-nav-menu2").addClass("active");
//         } else if (scrollPos >= aboutPos) {
//           $(".h-nav-menu li").removeClass("active");
//           $(".h-nav-menu1").addClass("active");
//         }
//       });
//     } else {
//       // スマホ表示時はイベントを解除
//       $(".h-nav-menu li a").off("click");
//       $(window).off("scroll");
//     }
//   }

//   // 初回ロード時にイベントを適用
//   handleMenuEvents();

//   // 画面リサイズ時にもイベントを適用
//   $(window).on("resize", function () {
//     handleMenuEvents();
//   });
// });
$(document).ready(function() { 
  var isScrolling = false; // スムーズスクロール中かどうかを判定するフラグ
  var offset = 100; // 固定ヘッダーの高さに合わせたオフセット値

  // スクロールイベントの処理
  $(window).on("scroll", function () {
    if (isScrolling) return; // スムーズスクロール中はスクロールイベントを無効化

    var scrollPos = $(window).scrollTop();

    // 各セクションの位置を確認
    var aboutPos = $("#about").offset()?.top - offset;
    var trialPos = $("#trial").offset()?.top - offset;
    var farmarsPos = $("#farmars").offset()?.top - offset;
    var voicePos = $("#voice").offset()?.top - offset;

    // スクロール位置に基づいてactiveクラスを切り替える
    if (voicePos !== undefined && scrollPos >= voicePos - 1) {
      $(".h-nav-menu li").removeClass("active");
      $(".h-nav-menu4").addClass("active");
    } else if (farmarsPos !== undefined && scrollPos >= farmarsPos - 1) {
      $(".h-nav-menu li").removeClass("active");
      $(".h-nav-menu3").addClass("active");
    } else if (trialPos !== undefined && scrollPos >= trialPos - 1) {
      $(".h-nav-menu li").removeClass("active");
      $(".h-nav-menu2").addClass("active"); // TRIALのメニューにactiveクラスを追加
    } else if (aboutPos !== undefined && scrollPos >= aboutPos - 1) {
      $(".h-nav-menu li").removeClass("active");
      $(".h-nav-menu1").addClass("active");
    }
  });

  // クリックイベントの処理
  $(".h-nav-menu li a").on("click", function(e) {
    e.preventDefault(); // デフォルトのアンカーリンク動作をキャンセル
    isScrolling = true; // スムーズスクロール中にフラグを立てる

    // クリックしたリンクのhref属性からターゲットセクションを取得
    var target = $(this).attr("href");

    // hrefが "#" の場合、ページの一番上にスクロールする
    if (target === "#") {
      $("html, body").animate({
        scrollTop: 0
      }, 500, function() {
        isScrolling = false; // スクロール完了後にフラグをリセット
        $(".h-nav-menu li").removeClass("active");
        $(".h-nav-menu1").addClass("active"); // ABOUTメニューをactiveに
      });
    } 
    // ターゲットセクションが存在するか確認し、スクロールする
    else if ($(target).length) {
      var targetPos = $(target).offset().top - offset;

      // スムーズスクロール
      $("html, body").animate({
        scrollTop: targetPos
      }, 500, function() {
        isScrolling = false; // スクロール完了後にフラグをリセット

        // クリックされたメニューにactiveクラスを付与
        $(".h-nav-menu li").removeClass("active");
        $(`a[href="${target}"]`).parent().addClass("active");
      });
    }
  });
});






$(".maker-slide").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  cssEase: 'linear',
  slidesToShow: 2,
  arrows: true,  // 矢印を表示
  prevArrow: '<div class="slick-prev"><div></div></div>',  // カスタマイズした矢印
  nextArrow: '<div class="slick-next"><div></div></div>',  // カスタマイズした矢印
  swipe: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".voice-slide").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  cssEase: 'linear',
  slidesToShow: 3, // 通常表示は3つのアイテム
  arrows: true, // 矢印を表示
  prevArrow: '<div class="voice-prev"><div></div></div>', // カスタマイズした矢印 (新しいクラス名を使用)
  nextArrow: '<div class="voice-next"><div></div></div>', // カスタマイズした矢印 (新しいクラス名を使用)
  swipe: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768, // 768px以下の画面サイズに対応
      settings: {
        slidesToShow: 1, // 1つのスライドを表示
      },
    },
  ],
});


  //よくあるご質問
  $(document).ready(function() {
    // 768px以下のときのみアコーディオン機能とアイコンの動作を設定
    function setAccordion() {
      if ($(window).width() <= 768) {
        // アコーディオン機能を初期化
        $('.qa-area-title').off('click'); // クリックイベントを初期化
        $('.qa-area-title').on('click', function() {
          var findElm = $(this).next(".qa-box"); // 直後のqa-boxを取得
          $(findElm).slideToggle(); // アコーディオン動作
          $(this).toggleClass('active'); // アイコンの向きのクラスを切り替え
        });
      } else {
        // PCサイズではアコーディオン機能を解除し、qa-boxを常に表示
        $('.qa-box').show(); // 常に表示
        $('.qa-area-title').removeClass('active'); // アイコンのクラスを初期化
        $('.qa-area-title').off('click'); // クリックイベントを削除
      }
    }
  
    // ページロード時に実行
    setAccordion();
  
    // ウィンドウリサイズ時にも再確認
    $(window).resize(function() {
      setAccordion();
    });
  });
  
});