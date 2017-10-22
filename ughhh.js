// Main Javascript file (ughhhhhhh) (i hate javascript)

$(function(){

 var config = {
  apiKey: "AIzaSyARpu_8IyhaHqBysC04hzJO497s7tkXNSc",
  authDomain: "dubhacks2017-4df7e.firebaseapp.com",
  databaseURL: "https://dubhacks2017-4df7e.firebaseio.com",
  projectId: "dubhacks2017-4df7e",
  storageBucket: "dubhacks2017-4df7e.appspot.com",
  messagingSenderId: "790915466653"
 };
 firebase.initializeApp(config);
 // jQuery methods go here...

 var info = firebase.database().ref('info');


 $("#sub").click(function() {
  event.preventDefault();
  alert("hey does this work");
  
  var childName = $("#child").val();
  var emergencyNo = $("#emerno").val();
  
  info.push({
   child: childName,
   phone: emergencyNo
  });
  
  $(this).after("<div>your child's name is " + childName + " and the emergency number to contact is " + emergencyNo);
  
  $(this).reset();
 });


});