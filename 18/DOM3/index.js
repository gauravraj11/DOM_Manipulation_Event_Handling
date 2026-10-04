let addToCartBtn = document.getElementById('addToCartBtn');
let wishlistIcon = document.getElementById('wishlistIcon');
let cartCount = document.getElementById('cartCount');
let count = 0;


console.log(addToCartBtn.textContent);

addToCartBtn.addEventListener('click', ()=>{

    addToCartBtn.textContent = "Added";
    console.log(addToCartBtn.textContent);
    addToCartBtn.style.backgroundColor = "aqua";
    addToCartBtn.style.color = "green";
    wishlistIcon.innerHTML = "&#10084;";
    count++;
    cartCount.textContent = count;

})