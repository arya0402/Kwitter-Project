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

username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username + " :";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location.replace("kwitter_page.html");
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class = 'room_name' id = ' " + Room_names + "' onclick = 'redirectToRoomName(this.id)'>#" + Room_names + " </div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location.replace("kwitter_page.html");
}
