const boxes = document.querySelectorAll('.box');

// It will not work as this of arrow function inside event listener 
// will not point that selected box. It will point global object.
        boxes.forEach((box) => {
            box.addEventListener('click',()=>{
                const color = this.style.backgroundColor;
                document.body.style.backgroundColor = color;
            });
        });


        // boxes.forEach(box => {
        //     box.addEventListener('click', function () {
        //         const color = this.style.backgroundColor;    
        //         document.body.style.backgroundColor = color;
        //     });
        // });



















       
  