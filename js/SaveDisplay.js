// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyDtdOrkmzEWai4wm_-3PbD8SUcdl5kvIU4',
  authDomain: 'firstproject-db449.firebaseapp.com',
  projectId: 'firstproject-db449',
  storageBucket: 'firstproject-db449.appspot.com',
  messagingSenderId: '154793108981',
  appId: '1:154793108981:web:4c4fc179a9f48ca1adecbc',
  measurementId: 'G-N0WQDBNKX9',
};
firebase.initializeApp(firebaseConfig);
// save the data
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();
  // get the value of the form using serializeArray method
  var inputdata = $('form').serializeArray();
  console.log(inputdata);
  var inputJSON = {};
  inputdata.forEach((entry) => {
    inputJSON[entry.name] = entry.value;
  });
  console.log(inputJSON);
  firebase.firestore().collection('surveydata').add(inputJSON);
});

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log(user.email);
  }else{
    console.log('logged out');
  }
});

$('#signout').click(function() {
firebase
  .auth
  .signOut()
  .then(() => {
    window.location.href = 'index.html';
  });
});

var ansA = 0;
var ansB = 0;
var ansC = 0;
var ansD = 0;
var ansE = 0;
firebase
  .firestore()
  .collection('surveydata')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    ansA = 0;
    ansB = 0;
    ansC = 0;
    ansD = 0;
    ansE = 0;
    querySnapshot.forEach(function (doc) {
      //if(doc.data().choice != null){
      //console.log('document -- ', doc.data().choice)};
      var c = doc.data().choice;
      switch (c) {
        case 'A':
          ansA++;
          $('#ans1').text(ansA);
          break;
        case 'B':
          ansB++;
          $('#ans2').text(ansB);
          break;
        case 'C':
          ansC++;
          $('#ans3').text(ansC);
          break;
        case 'D':
          ansD++;
          $('#ans4').text(ansD);
          break;
        case 'E':
          ansE++;
          $('#ans5').text(ansE);
          break;

        default:
          break;
      }
    });
  });

// update the result in table
