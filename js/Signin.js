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
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $('#login').val();
  var password = $('#pwd').val();
  console.log(email);
  console.log(password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

