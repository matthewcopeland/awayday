$(function() {
  
  $('.one').click(function(){
    $('.box').addClass('show-two');
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
  });


  $('.stamp').click(function(){
    $(this).toggleClass('fly');
  })

});