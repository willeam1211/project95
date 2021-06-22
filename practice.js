
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyAsj8wS24BKo_yYB2-Aov6rnaN4hApShD8",
    authDomain: "class-test-fcb79.firebaseapp.com",
    databaseURL: "https://class-test-fcb79-default-rtdb.firebaseio.com",
    projectId: "class-test-fcb79",
    storageBucket: "class-test-fcb79.appspot.com",
    messagingSenderId: "676525662277",
    appId: "1:676525662277:web:22fdfae6c96b80432c832c",
    measurementId: "G-RRHHXTTCP0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          FannuLau : "hello"
      });
  }