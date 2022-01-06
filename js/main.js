//ui logic
$(document).ready(function(){

  $(".service").click(function(){
    $(this).children(".service-text").toggle()
    $(this).children(".icon").toggle() 
  });
  
  
  $( ".portfolio" ).hover(
    function(){$(this).children("p").toggle()}
    );
  
  
    $("#mouse-click").click(function(){
      $("body,html,document").scrollTop($("#about").offset().top);
    });


    $("#send").click(()=>{
      if($("#name").val()== "" || $("#email").val()== "" || $("#message").val()== ""){
          alert("Please fill in all the details")
      }
      else
      {
            alert("Thank you! Your message has been received")
            $("#name").val("")
            $("#email").val("")
            $("#message").val("")
         
      }
  })
  
  
})

 

  