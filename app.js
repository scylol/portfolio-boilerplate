$('.contact').on('click',  function(){
  $('.contact-form').toggleClass('hidden');
  $('.about').toggleClass('hidden');
  if($(this).text() === 'Contact Me') {
    $(this).text('Hide');
  }
  else {
    $(this).text('Contact Me');
  }
 
});

