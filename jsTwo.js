var pictures;
var index = 0;
function bringPictures(){
    pictures = document.querySelectorAll("#content img");
    console.log(pictures)

   setInterval(operationPicture, 3000);
}



function operationPicture(){
    pictures[index].classList.remove("show");
    console.log("here")
}


