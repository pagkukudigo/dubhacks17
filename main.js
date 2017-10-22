// Main Javascript file; Firebase functionality + jQuery

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
  addContact(size);
 });


 function addContact(size) {
  $("#contactInfo").after("<div id='contacts'>");
  for (i = size; i > 0; i--) { 
   $("#contacts").prepend("<br><div class='familyContact'><p>Family member #" + i + "</p><input type='text' class='nam' id='name" + i + "'><p>Phone #</p><input type='text' class='num' id='number" + i + "'>");
  }
 }

 /*function getContacts(contactDiv) {
  var name = $(".name").val();
  var num = $(".number").val();
  familyContacts.push({familyMemberName:name, familyMemberNumber:num});
 }*/

 $("#sub").click(function() {
  event.preventDefault();

  var lastName = $("#surname").val();
  var sizeOfFamily = $("#familySize").val();
  var howManyKids = $("#children").val();
  var childEvacPoint = $("#childEvac").val();

  var familyContacts = [{familyMemberName:'',familyMemberNumber:''}];
  
  
  $(".familyContact").each(function() {
   
   // $(this).append("<p>does this even work</p>");
   var name = $(".nam").val();
   var numb = $(".num").val();

   console.log(name);
   console.log(numb);
   
   
   familyContacts.push({familyMemberName:name, familyMemberNumber:numb});

  });

  info.push({
   lastName: lastName,
   familySize: sizeOfFamily,
   numberOfChildren: howManyKids,
   childEvacuationPoint: childEvacPoint,
   familyContactInfo: familyContacts
  });

 });


});