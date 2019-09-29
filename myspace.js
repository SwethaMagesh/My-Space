
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        
    } else {
        window.location='login.html';
    }
  });

  function logout()
  {
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      window.alert("Error logging out!");
    });  
  }