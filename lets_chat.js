function adduser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "lets-chat_room.html";
}

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