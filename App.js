let Signup = ()=>{
    var Signupuser=document.getElementById('SignupUser')
    var Signuppassword=document.getElementById('password')
    var signupemail=document.getElementById('Emails')
  var Signupcountry=document.getElementById('counts')
   
        firebase.auth().createUserWithEmailAndPassword(signupemail.value, Signuppassword.value)
      .then((data) => {
        // firebase.database.ref("user").push(obj)
          console.log("auth ===>", data)
          windows.location.href="./signin.html"
     
      })
      .catch((error) => {
       ;
        var errorMessage = error.message;
        console.log("err =>", errorMessage)
      });
    }

let Signin=()=>{
    var Signinuser = document.getElementById('userin')
    var Signinpassword=document.getElementById('pass2')
    var signinemail=document.getElementById('Email2')
    var Signincountry=document.getElementById('country2')

    firebase.auth().signInWithEmailAndPassword(signinemail.value, Signinpassword.value)
  .then((data) => {
  windows.location.href="./menu.html"
    
    console.log(data)
    
  })
  .catch((error) => {
   
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}
