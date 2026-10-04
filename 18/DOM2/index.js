let addBtn = document.getElementById('addBtn');
let stepper = document.getElementById('stepper');
let cartTotal = document.getElementById('cartTotal');
let qty = document.getElementById('qty');

let decreaseBtn = document.getElementById('decreaseBtn');
let increaseBtn = document.getElementById('increaseBtn');

// let price = parseInt(cartTotal.textContent) //It will not work, why ?
let price = 250;
let count = 0;
console.log(cartTotal.textContent);

addBtn.addEventListener('click', ()=>{
    addBtn.classList.add("hidden");
    stepper.classList.remove('hidden');
    // price = price + 250;
    cartTotal.textContent = "₹" + " " + price;
    count++;
    qty.textContent = count;
})
 
decreaseBtn.addEventListener('click', ()=>{
    if(price>250){
        price = price - 250;
        cartTotal.textContent = "₹" + " " + price;
        count--;
        qty.textContent = count;
    }else{
            addBtn.classList.remove("hidden");
            stepper.classList.add('hidden');
             price = price - 250;
             cartTotal.textContent = "₹" + " " + price;
             price = 250;
             count = 0;
    }
})

increaseBtn.addEventListener('click', ()=>{
    price = price + 250;
    cartTotal.textContent = "₹" + " " + price;
    count++;
    qty.textContent = count;

})