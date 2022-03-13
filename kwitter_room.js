const firebaseConfig = {
    apiKey: "AIzaSyCln03sniPGoutm7zsb3OqQTxi-gH49uhM",
    authDomain: "kwitter-1439d.firebaseapp.com",
    databaseURL: "https://kwitter-1439d-default-rtdb.firebaseio.com",
    projectId: "kwitter-1439d",
    storageBucket: "kwitter-1439d.appspot.com",
    messagingSenderId: "992526589782",
    appId: "1:992526589782:web:ddeaf46279255cc57f00f7"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
    getData();