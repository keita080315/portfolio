
$(function(){
  $('.btn').click(function(){
    var href=$(this).attr("href");
    if(href=="#1"){
      var target=$('#btn1')
    }
    else{
      var target=$('#btn2')
    }
    var position=target.offset();
    $('html,body').animate({'scrollTop':(position.top)},'slow');
  });
  $('.no-click').click(function(){
    $('.no-click').toggleClass('active');
    $('.click').toggleClass('active');

  });
  $('.close').click(function(){
    $('.no-click').removeClass('active');
    $('.click').removeClass('active');
  });



});
