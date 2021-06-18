let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBC1wJWfMgKxG99mUxn4YHkQVS_-MnBx_0",
    authDomain: "recy-dc387.firebaseapp.com",
    projectId: "recy-dc387",
    storageBucket: "recy-dc387.appspot.com",
    messagingSenderId: "205601819575",
    appId: "1:205601819575:web:a0f5e587d1036ccd073632",
    measurementId: "G-RL5PSZZ9CL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let database = firebase.database();