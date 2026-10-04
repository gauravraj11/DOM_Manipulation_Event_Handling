let cart = document.querySelector("#cartTotal");
let price = document.querySelector(".price");
let price1 = parseInt(price.textContent.replace("₹", ""), 10);
let addbtn = document.querySelector("#addBtn");
let dec = document.querySelector("#decreaseBtn");
let step = document.querySelector("#stepper");
let inc = document.querySelector("#increaseBtn");
let qty = document.querySelector("#qty");

addbtn.addEventListener("click", () => {
    console.log(cart.textContent);
    
  if (cart.textContent === "₹0") {
    let number = parseInt(cart.textContent.replace("₹", ""), 10);
    cart.textContent = "₹" + (number + price1);
    addbtn.setAttribute("class", "add-btn hidden");
    step.setAttribute("class", "stepper");
    qty.textContent = "1"; 
  }
});

// Attached ONCE, not nested inside addBtn's handler
inc.addEventListener("click", () => {
  let number = parseInt(cart.textContent.replace("₹", ""), 10);
  cart.textContent = "₹" + (number + price1);
  qty.textContent = parseInt(qty.textContent, 10) + 1;
});

dec.addEventListener("click", () => {
  let number = parseInt(cart.textContent.replace("₹", ""), 10);
  cart.textContent = "₹" + (number - price1);
  qty.textContent = parseInt(qty.textContent, 10) - 1;

  if (cart.textContent === "₹0") {
    addbtn.setAttribute("class", "add-btn");
    step.setAttribute("class", "stepper hidden");
    price1 = 250;
  }
});