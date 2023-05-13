// declaration of variables
var messages  = document.getElementById("message");
var textbox = document.getElementById("textbox");
var button  = document.getElementById("btn");

//adding fuctionality to the submit button
button.addEventListener("click", function(){
    // creating a new element and assigning it to a new variable
    var newMessage = document.createElement("li");
    // assigning new variable to the value of the textbox
    newMessage.innerHTML = textbox.value;
    // adding the new textbox value to the messages section
    messages.appendChild(newMessage);
    textbox.value="";

})