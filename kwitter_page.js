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
    

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>" + name + " <img src = 'tick.png' class = 'user_tick'></h4>";
                        message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
                        like_button = "<button class = 'btn btn-warning' id ='"+firebase_message_id+"' value ='"+like+"' onclick= 'update_like(this.id)'>";
                        span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button>";

                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                  }
            });
      });
}
getData();

function update_like(message_id) {
      console.log("Clicked on Like Button- " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });

} 

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
    }
