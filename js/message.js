//Busines logic

const postDetails=(name,email,message)=>{
  const listId = "";
  const key = ""
  let data = {
    members: [
      {
        email_address: email,
        status : "subscribed",
        merge_fields: {
          FNAME: name,
          MESSAGE: message
        }
      }
    ]
  };

  let myHeaders = new Headers();
  myHeaders.append("Authorization", key);
  myHeaders.append("Content-Type", "application/json");


  let raw = JSON.stringify(data);

  let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
      
    };

  fetch("https://us20.api.mailchimp.com/3.0/lists/"+listId, requestOptions)
      .then(response => response.json())
      .then(result => (result.new_members.length()==0)? alert(new_members.error.error_code):alert("you have been sucessfully subscribed"))
      .catch(error => alert('error', error));
}
