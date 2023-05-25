let guests = [];
let addButton = document.querySelector(".addButton");
let guestList = document.querySelector(".guestList"); 
let number = document.querySelector(".number"); 

addButton.onclick = function() {
    let guestInput = document.querySelector(".guestName").value;
    guests.push(guestInput);
    console.log(guests);
	  guestList.insertAdjacentHTML("afterbegin", "<li>" + guestInput + "</li>");
    let guestAmount = guest.length
  console.log(guestAmount);
}; 
