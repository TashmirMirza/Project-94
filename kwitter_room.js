var firebaseConfig = {
      apiKey: "AIzaSyDJp1IkMOSxd1r72HFL2eJf4bI4JNBAab0",
      authDomain: "kwitter-13d15.firebaseapp.com",
      databaseURL: "https://kwitter-13d15-default-rtdb.firebaseio.com",
      projectId: "kwitter-13d15",
      storageBucket: "kwitter-13d15.appspot.com",
      messagingSenderId: "304786431619",
      appId: "1:304786431619:web:800d3e68258dd842eb45b6",
      measurementId: "G-N11BSZK60R"
    };
firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
