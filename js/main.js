$(".service").click(function(){
  $(this).children(".service-text").toggle()
  $(this).children(".icon").toggle() 
});


$( ".portfolio" ).hover(
  function(){$(this).children("p").toggle()}
  );


  $("#mouse-click").click(function(){
      $( "#about" ).scrollTop()
  });
 