var firebaseConfig = {
    apiKey: "AIzaSyAygEy64wJXh4wGcknZd9FDRer1yuNgKEY",
    authDomain: "ripoff-of-twitter-86a69.firebaseapp.com",
    databaseURL: "https://ripoff-of-twitter-86a69-default-rtdb.firebaseio.com",
    projectId: "ripoff-of-twitter-86a69",
    storageBucket: "ripoff-of-twitter-86a69.appspot.com",
    messagingSenderId: "141633031158",
    appId: "1:141633031158:web:3c00cf7850ba97567b95d7"
  };
  
  // Initialize Firebase
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
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  