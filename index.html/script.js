
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
  $('.top-wrapper').bgSwitcher({
    images:['https://cdn.pixabay.com/photo/2017/02/01/21/47/cube-2031511_1280.jpg','https://cdn.pixabay.com/photo/2017/08/01/13/22/neon-2565390_1280.jpg',"https://cdn.pixabay.com/photo/2017/08/01/13/22/neon-2565390_1280.jpg"],
    interval:5000,
    loop:true,
    effect:"fade",
    duration:500,
  });



});
