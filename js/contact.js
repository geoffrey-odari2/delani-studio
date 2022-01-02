$("#send").click(()=>{
    if($("#name").val()== "" || $("#email").val()== "" || $("#message").val()== ""){
        alert("Please fill in all the details")
    }
    else
    {
        $("#name").val("")
        $("#email").val("")
        $("#message").val("")
        alert("Your request has been submitted successfully")
    }
})