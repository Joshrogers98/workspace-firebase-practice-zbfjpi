/* Change the configuration */

const firebaseConfig = {
  apiKey: "AIzaSyDtdOrkmzEWai4wm_-3PbD8SUcdl5kvIU4",
  authDomain: "firstproject-db449.firebaseapp.com",
  projectId: "firstproject-db449",
  storageBucket: "firstproject-db449.appspot.com",
  messagingSenderId: "154793108981",
  appId: "1:154793108981:web:4c4fc179a9f48ca1adecbc",
  measurementId: "G-N0WQDBNKX9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form

  /* save the data to database */
  var inputdata = $('form').serializeArray();
  console.log(inputdata);
  var inputJSON = {};
  inputdata.forEach((entry) => {
    inputJSON[entry.name] = entry.value;
  });
  console.log(inputJSON);
  firebase.firestore().collection('hotelCollection').add(inputJSON);
  /* clear the entry */
  $('form')[0].reset();
});


/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

/*firebase
  .firestore()
  .collection('myList')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });*/

