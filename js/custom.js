$(document).ready(function () {
  $(".side_nav_bars").click(function () {
    $(this).toggleClass("open");
    $(".sub_header").toggleClass("active");
    $(".main_header").toggleClass("active");
  });
  $(".blur_wrap").click(function () {
    $(".blur_wrap").addClass("active");
  });
  $("section").click(function () {
    $(".sub_header").removeClass("active");
    $(".side_nav_bars").removeClass("open");
  });
  $(".item_left h1").click(function () {
    $(".sub_header").removeClass("active");
    $(".side_nav_bars").removeClass("open");
    let valuePos = $(this).find("a").attr("value");
    let offsetTop = $("." + valuePos).offset().top;
    //alert(valuePos);
    $("html,body").animate({ scrollTop: offsetTop }, 500);
  });
  $(".item_right h1").click(function () {
    $(".sub_header").removeClass("active");
    $(".side_nav_bars").removeClass("open");
    let valuePos = $(this).find("a").attr("value");
    let offsetTop = $("." + valuePos).offset().top;
    //alert(valuePos);
    $("html,body").animate({ scrollTop: offsetTop }, 500);
  });
  $(".more_info").click(function () {
    $(".about_content_4").addClass("active");
  });
  $(".about_content_4 .side_nav_bars").click(function () {
    $(".about_content_4").removeClass("active");
  });
  $(".pdf_view .side_nav_bars.bk").click(function () {
    $(".pdf_view.bk").removeClass("active");
  });
  $(".pdf_open.bk").click(function () {
    $(".pdf_view.bk").addClass("active");
  });
  $(".pdf_view .side_nav_bars.hb").click(function () {
    $(".pdf_view.hb").removeClass("active");
  });
  $(".pdf_open.hb").click(function () {
    $(".pdf_view.hb").addClass("active");
  });
  //   function wrap_padding() {
  //     var header_height = $(".main_header").height() + 30;
  //     $(".wrap").css({ paddingTop: header_height });
  //   }
  //   wrap_padding();
  //   $(window).resize(function () {
  //     wrap_padding();
  //   });
});

// text animation function
// function AnimatedText(
//   target,
//   texts,
//   changeInterval,
//   updateInterval,
//   onTextChanged
// ) {
//   var currentText = parseInt(Math.random() * texts.length);
//   var areaText = texts[0];
//   this.t1 = setInterval(
//     function () {
//       var c = parseInt(
//         Math.random() * Math.max(texts[currentText].length, areaText.length)
//       );
//       var s = texts[currentText][c];
//       if (typeof s == "undefined") s = " ";
//       while (areaText.length < c) areaText += " ";
//       var newText = (areaText.slice(0, c) + s + areaText.slice(c + 1)).trim();
//       var diff = !(newText == areaText);
//       areaText = newText;
//       if (onTextChanged && diff) onTextChanged();
//       target.innerHTML = areaText.length == 0 ? "&nbsp;" : areaText;
//     }.bind(this),
//     updateInterval ? updateInterval : 50
//   );
//   this.t2 = setInterval(
//     function () {
//       currentText = parseInt(Math.random() * texts.length);
//     }.bind(this),
//     changeInterval ? changeInterval : 3500
//   );
// }
// AnimatedText.prototype = {
//   constructor: AnimatedText,
//   stop: function () {
//     clearInterval(this.t1);
//     clearInterval(this.t2);
//   },
// };
// new AnimatedText(document.getElementById("home"), [
//   "KIM BYEONG SEOK",
//   "김 병 석",
//   "KIM BYEONG SEOK",
//   "金 炳 錫",
// ]);
