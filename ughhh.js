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

 var info = firebase.database().ref('info');


 $("#contactInfo").click(function() {
  var famSize = $("#familySize").val();
  var size = parseInt(famSize);

  /*$("#contactInfo").append("<div>family size: " + size +"</div>"); */
  addContact(size);
 });


 function addContact(size) {
  $("#contactInfo").after("<div id='contacts'>");
  for (i = size; i > 0; i--) { 
   $("#contacts").prepend("<br><div class='familyContact'><p>Family member #" + i + "</p><input type='text' id='name'><p>Phone #</p><input type='text' id='number'>");
  }
 }

 function getContacts(contactDiv) {
  var name = $("#name").val();
  var num = $("#number").val();
  familyContacts.push({familyMemberName:name, familyMemberNumber:num});
 }

 $("#sub").click(function() {
  event.preventDefault();
  alert("heads up i'm submitting data");

  var lastName = $("#surname").val();
  var sizeOfFamily = $("#familySize").val();
  var howManyKids = $("#children").val();
  var childEvacPoint = $("#childEvac").val();

  var familyContacts = [{familyMemberName:'',familyMemberNumber:''}];

  $("<div class='contacts'>").each(function() {
   
   var contactDiv = "bruH";

  });

  info.push({
   lastName: lastName,
   familySize: sizeOfFamily,
   numberOfChildren: howManyKids,
   childEvacuationPoint: childEvacPoint,
   familyContactInfo: familyContacts
  });

  /*$(this).after("<div>Your child's name is " + childName + ". The emergency number to contact is " + emergencyNo + ".</div>");

  $(this).reset();*/

 });


});