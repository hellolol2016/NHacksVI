

  function initMap() {
	var mapOptions = {
		zoom: 12,
		center: new google.maps.LatLng(33.6966906, -117.6992637),
		mapTypeId: 'roadmap'
	};
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  //Irvine, CA
	var recyclingCenter = {lat: 33.6761216,lng: -117.7660269};
	var marker = new google.maps.Marker({
			position: recyclingCenter,
			map: map,
			title: 'Irvine Household Hazardous Waste Collection Center'
			});
  
  //Irvine, CA
  var recyclingCenter2 = {lat: 33.6428299,lng: -117.7398098};
  var marker2 = new google.maps.Marker({
      position: recyclingCenter2,
      map: map,
      title: 'YouRenew'
      });

  //Kalamazoo, MI
  var recyclingCenter3 = {lat: 42.2849097,lng: -85.5708447};
  var marker3 = new google.maps.Marker({
      position: recyclingCenter3,
      map: map,
      title: 'Michigan Recycling Industries, LLC'
      });
  
  //NYC, NY
  var recyclingCenter4 = {lat: 40.7245292,lng: -73.9320297};
  var marker4 = new google.maps.Marker({
      position: recyclingCenter4,
      map: map,
      title: 'City Recycling'
      });

  //Austin, TX
  var recyclingCenter5 = {lat: 30.2132704,lng: -97.7381713};
  var marker5 = new google.maps.Marker({
      position: recyclingCenter5,
      map: map,
      title: 'Austin Recycle & Reuse Drop-off'
      });

  var recyclingCenter5 = {lat: 30.2132704,lng: -97.7381713};
  var marker5 = new google.maps.Marker({
      position: recyclingCenter5,
      map: map,
      title: 'Austin Recycle & Reuse Drop-off'
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

//https://maps.googleapis.com/maps/api/place/textsearch/xml?query=tennis+court+near+92618s&key=AIzaSyB7SK2BBMhJ9SUnxYZQW4Bd_gpc-4XCum0

let user, item;

//checks for password and name blank, also sets up values for sending to database
function ready(){ 
    let Nname = document.getElementById("name").value;
    let Nitem = document.getElementById('items').value;
    if(Nname === "" || Nitem === ""){
        alert("You must fill out all fields!");
        return false;
    } else {
        user = Nname;
        item = Nitem;
        return true;
    }
}

//pushes the location to database
document.getElementById("submit").onclick = function(){
  if(ready()){
      console.log("sending")
      database.ref("user items").push({
          user : user,
          item : item
      })
      console.log("send info");

      document.querySelector('#name').value="";
      document.querySelector('#items').value="";
  }
}

document.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
      if(ready()){
          console.log("sending")
          database.ref("user items").push({
            user : user,
            item : item

          })
          console.log("send info");

          document.querySelector('#name').value="";
          document.querySelector('#items').value="";
      }
  }
});

database.ref("user items").on('child_added', function(item){
  console.log("new item");
  let items = document.querySelector("#item-list");
  let name = item.val().user;
  let value = item.val().item;

  let div = document.createElement("div");
  document.createElement("span");
  let span = document.createElement("span")
  span.innerHTML = name;
  let p = document.createElement("p");
  p.innerHTML = value;

  let check = document.createElement("button")
  check.addEventListener('click',functi)
  div.appendChild(span);
  div.appendChild(p);
  items.appendChild(div);

});