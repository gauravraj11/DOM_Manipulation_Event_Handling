let heart = document.getElementById('heart');
let likesCount = document.getElementById('likesCount');
let likes = parseInt(likesCount.textContent);

console.log(heart.textContent);
console.log(likesCount.textContent);
console.log(likes);


let content = heart.textContent;
let count = 2;

heart.addEventListener('click', ()=>{

    if(count%2 === 0){
        heart.innerHTML = "&#10084;";
        likes++;
        count++;
        likesCount.textContent = likes + " " + "likes";
    }else{
       heart.innerHTML = "&#9825;";
       count++;
       likes--;
       likesCount.textContent = likes + " " + "likes";
    }

})
