
  var firebaseConfig = {
    apiKey: "AIzaSyAr7lc6boBAUinjs0oSoLW1MSgITiITHYo",
    authDomain: "meme-atob.firebaseapp.com",
    databaseURL: "https://meme-atob-default-rtdb.firebaseio.com",
    projectId: "meme-atob",
    storageBucket: "meme-atob.appspot.com",
    messagingSenderId: "429488617509",
    appId: "1:429488617509:web:9d23fc62185644ae0167cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser(){
      user_name = document.getElementById("username").value
      mesag = document.getElementById("message").value
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user",
          username:user_name ,
          message:mesag
      })
  }