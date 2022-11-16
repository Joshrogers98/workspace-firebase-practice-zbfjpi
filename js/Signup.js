const firebaseConfig = {
  apiKey: 'AIzaSyDtdOrkmzEWai4wm_-3PbD8SUcdl5kvIU4',
  authDomain: 'firstproject-db449.firebaseapp.com',
  projectId: 'firstproject-db449',
  storageBucket: 'firstproject-db449.appspot.com',
  messagingSenderId: '154793108981',
  appId: '1:154793108981:web:4c4fc179a9f48ca1adecbc',
  measurementId: 'G-N0WQDBNKX9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var email = "josh.rogers098@gmail.com";
  var password = "asdf1234";

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
