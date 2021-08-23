let Signup = ()=>{
    var Signupuser=document.getElementById('SignupUser')
    var Signuppassword=document.getElementById('passs')
    var signupemail=document.getElementById('Email')
  var Signupcountry=document.getElementById('counts')

   
  
        firebase.auth().createUserWithEmailAndPassword(signupemail.value, Signuppassword.value)
      .then((data) => {
        // windows.location.href"./"
        // firebase.database.ref("user").push(obj)
      // windows.location.href("./login.html")
          console.log("auth ===>", data)
     
      })
      .catch((error) => {
       ;
        var errorMessage = error.message;
        console.log("err =>", errorMessage)
      });
    }




let Signin = ()=>{
    var Signinuser = document.getElementById('userin')
    var Signinpassword=document.getElementById('pass2')
    var signinemail=document.getElementById('Email2')
    var Signincountry=document.getElementById('country2')

    firebase.auth().signInWithEmailAndPassword(signinemail.value, Signinpassword.value)
  .then((data) => {
  windows.location.href("admin.html")
    
    console.log(data)
    
  })
  .catch((error) => {
   
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}

