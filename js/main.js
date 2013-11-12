$(document).ready(function() {
  $('header').waypoint('sticky');

  $('#service .content i').hover(function() {
      $(this).parent().find('p').toggleClass('active');
      $(this).parent().find('span').toggleClass('active');
  });

  function hideAllProcess() {
      $('#process-idea').hide();
      $('#process-plan').hide();
      $('#process-puff').hide();
      $('#process-boil').hide();
      $('#process-lab').hide();
      $('#process-launch').hide();
  }

  hideAllProcess();
  $('#process-idea').show();

  $('.large-7.columns.ideapuffProcess i').on('click', function() {
      $('.large-7.columns.ideapuffProcess h4').removeClass('active');
      $('.large-7.columns.ideapuffProcess i').removeClass('active');
      $(this).addClass('active');
      $(this).parent('h4').addClass('active');
      var processId = $(this).find('input').val();
      hideAllProcess();
      $('#' + processId).show();
  });

  $('a.right.processBtn').click(function(){
      $(this).parents('.large-5.columns').hide();
      $(this).parents('.large-5.columns').next('.large-5.columns').show();
      $('.large-7.columns.ideapuffProcess i.active').removeClass('active');
      $('.large-7.columns.ideapuffProcess h4.active').removeClass('active').next('h4').addClass('active').find('i').addClass('active');
//      $('.large-7.columns.ideapuffProcess i.active').removeClass('active').next('h4').find('i').addClass('active');
  });

  $('a.left.processBtn').click(function(){
      $(this).parents('.large-5.columns').hide();
      $(this).parents('.large-5.columns').prev('.large-5.columns').show();
      $('.large-7.columns.ideapuffProcess i.active').removeClass('active');
      $('.large-7.columns.ideapuffProcess h4.active').removeClass('active').prev('h4').addClass('active').find('i').addClass('active');
//      $('.large-7.columns.ideapuffProcess i.active').removeClass('active').prev('h4 i').addClass('active');
  });
});