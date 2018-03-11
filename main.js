//jqueryの書き方　文法
//セレクタ　何に対して　メソッド　どのようなことを　イベント　どのタイミングで
$(document).ready(function(){
//ここの中に記述　例：$('.class').text;


  $('.box').on('click', function(){
    alert('押されたよ');
    console.log('押されたよー');
  });

$('#js').on('click', function(){
  var elem = '<a href="#">　次ページ </a>';
//  $("#js").html(elem);
//  $("#js").text(elem);
  $("#js").css("color","#ff0");
//  $("#js").show(4000);
  $("#js").prepend(elem);
//  $("#js").append(elem);
  //$("#js").empty();
  //$("#js").removw();
  });

//フェードイン
$(function() {
  $("#ex").hide().fadeIn(4000);
});

$("#hide").on('click', function(){
  $("#ex").hide(2000);
});
//カウント
var countup = 0;
$("#show").on('click', function(){
  countup ++;
  $("#view").html(countup);

});

// $(function(){
//   $("#insert").click(function(){
//      $(#hiragana).html('かきくけこ');
//    });
//   });
});
