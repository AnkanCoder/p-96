var firebaseConfig = {
    apiKey: "AIzaSyDrzu0sxpbI6f-HEZTmb2hx5p4a_5NJ2gk",
    authDomain: "p-94-c200c.firebaseapp.com",
    databaseURL: "https://p-94-c200c-default-rtdb.firebaseio.com",
    projectId: "p-94-c200c",
    storageBucket: "p-94-c200c.appspot.com",
    messagingSenderId: "145290628263",
    appId: "1:145290628263:web:a326e4d21f1e75904e9f82",
    measurementId: "G-86DSGNZ21C"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML  = "Welcome " + user_name + "!";

  function addRoom()

  {
      room = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room).update({

          purpose : "adding room name"

      });

      localStorage.setItem("room_name", room);
      window.location = "kwitter_page.html";

  }

  function getData() 

{firebase.database().ref("/").on('value', function(snapshot) 

{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 

{childKey  = childSnapshot.key;

       Room_names = childKey;

      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
