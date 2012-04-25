$(function() {
  
  $('.one').click(function(){
    $('.box').addClass('show-two');
    $('.profile').addClass('activated');
  });

  $('.two').click(function(){
    $('.box').addClass('show-three');
    $('.box').removeClass('show-two');
  })

  $('.three').click(function(){
    $('.box').addClass('show-four');
    $('.box').removeClass('show-three');
  });

  $('.four').click(function(){
    $('.box').removeClass('show-four');
    $('.profile').removeClass('activated');
  });

  $('#matt').click(function(){
    $('.box').removeClass('see_tom');
    $('.box').addClass('see_matt');
  })
  $('#tom').click(function(){
    $('.box').removeClass('see_matt');
    $('.box').addClass("see_tom");
  })
  $('.bottom').click(function(){
    $('.box').removeClass('see_matt');
  })
  $('.top').click(function(){
    $('.box').removeClass('see_tom');
  })

});