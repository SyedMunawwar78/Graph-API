let myFacebookToken

$(document).ready(() => {
    myFacebookToken = prompt("Enter your Facebook token here");

    if(myFacebookToken==null || myFacebookToken=="") {
        alert("no user found");
    }
    else {
        getAllDetails();
    }
});

let getAllDetails = () => {

       //Api call to get details 

       $.ajax ({
    
              type : 'GET',
              dataType : 'JSON',
              async : true,
              url :' https://graph.facebook.com/me?fields=id,name,email,birthday,picture.type(large)&access_token='+myFacebookToken,
              success : (response) => {
                        
                    $("#data-section").css("display","block");
                    console.log(response);
                    $("#userName").append(response.name)
                    $("#birthday").append(response.birthday)
                    $("#userEmail").append(response.email)
                    $("#profilepic").html('<img src="' + response.picture.data.url +'"/>'  );

                  
                        
                        $("#idd").append(response.id)
                
              },

              error : (err) => {
                  alert(err.responseJSON.error.message);
              }








       })

}


