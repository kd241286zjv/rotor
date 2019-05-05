$(document).ready(function(){
  $('.select2').select2();

  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('.bottomHeader').slideToggle('300');
  });
})
