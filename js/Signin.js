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
  console.log('email:' + email + '   pass:' + password);
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
        window.location.href="../Surveyresult.html";
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

$('#googleSignIn').click(function(){
  //import { GoogleAuthProvider } from "firebase/auth";
  /*const provider = new GoogleAuthProvider();

  //import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });*/
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      const user = result.user;
      console.log(user.email);
    }).catch((error) => {
      console.log("Error Message " + error.message);
    });
});