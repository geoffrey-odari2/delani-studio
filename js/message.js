//Busines logic

const postDetails=data=>{
  const listId = 'fdc81344d9';
  const key = "605fdd28e1cb4ae0734ef550a4d89be5-us20"

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
