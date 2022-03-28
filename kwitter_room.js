const firebaseConfig = {
  apiKey: "AIzaSyBAwCW-FrgPp5UFT-U_665lpQ9wRYgk_RA",
  authDomain: "let-s-chat-9d2f1.firebaseapp.com",
  databaseURL: "https://let-s-chat-9d2f1-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-9d2f1",
  storageBucket: "let-s-chat-9d2f1.appspot.com",
  messagingSenderId: "692103846648",
  appId: "1:692103846648:web:8beb56115e3feb0ba9790d"
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
      console.log("room name - " + Room_names);
      row = "<div class = 'room_name' id = ' " + Room_names + "' onclick = 'redirectToRoomName(this.id)'>#" + Room_names + " </div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location.replace("kwitter_page.html");
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}