// document.getElementById("btn").addEventListener ("Click", function(){
//     alert("You Clicked Me!");
// });


function updateDisplay(){
   let Textbox = document.getElementById("Textbox");
   let displaytext = document.getElementById("display");

    displaytext.textContent = Textbox.value;


}