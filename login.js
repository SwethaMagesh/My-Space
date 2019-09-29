firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location='myspace.html';
    } else {
      
    }
  });

  var input = document.getElementById("password_field");//listening to user's input and if enter is pressed, button onclick function is called
  input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("login").click();
  }
  });

  function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
  
      document.getElementById("error2").style.visibility="visible";
      // ...
    });
  }

  function logout()
  {
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      // An error happened.
    });  
  }