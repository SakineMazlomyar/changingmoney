

function SwedishUsd(){
    var swedishInputMoney = document.getElementById("swedish").value;
    var englishInputMoney = document.getElementById("usd").value;
    console.log(swedishInputMoney, englishInputMoney)
    var x=3;
    var y =5;
    if ( x<y){
        var totalMoney= swedishInputMoney * englishInputMoney;
        alert(totalMoney)
        

    }
}

function myPictureSlide(){
    var myPictureInput = document.getElementById("content");
    console.log(myPictureInput)
   /*  myPictureInput.classList("classDisplayNone"); */
  

    if(myPictureInput.classList.contains("picture")){
        myPictureInput.classList.replace("classDisplayNone");
        console.log(myPictureInput)
    }

}