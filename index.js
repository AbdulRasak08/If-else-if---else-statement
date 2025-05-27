const personName = document.getElementById("Name");
const submitbtn = document.getElementById("Submit");
const mainContent = document.getElementById("Paragraph");
let inputedName;

submitbtn.onclick = function() {
   inputedName = personName.value
   

   if(inputedName == "AbdulRasak"){
    mainContent.textContent = "AbdulRasak, your name is on the list.";
   } else if(inputedName == "Muiz"){
    mainContent.textContent = "Muiz, your name is on the list."
   } else if(inputedName == "Barakat") {
    mainContent.textContent = "Barakat, your name is on the list."
   } else {
    mainContent.textContent = "Your name was not found"
   }
}