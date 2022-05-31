var firebaseConfig = {
    apiKey: "AIzaSyAgcJ8bmALJAHKI7iPIT7vy-dbRNDm7bg8",
    authDomain: "kwitter-ripoff-46298.firebaseapp.com",
    databaseURL: "https://kwitter-ripoff-46298-default-rtdb.firebaseio.com",
    projectId: "kwitter-ripoff-46298",
    storageBucket: "kwitter-ripoff-46298.appspot.com",
    messagingSenderId: "18547805049",
    appId: "1:18547805049:web:f94cf100f6803d568f7da8"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "lets_chat_page.html"

}      

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Names - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='rdirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room", name);
       window.location = "lets_chat_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location = "index.html";
}
