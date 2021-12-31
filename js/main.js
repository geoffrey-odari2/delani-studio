$(".icon").click(function(){
  $(this).siblings("p").toggle() 
});



$( ".portfolio" ).hover(
  function(){$(this).children("p").toggle()}
  );