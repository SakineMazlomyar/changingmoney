
function eventUp(){

    /* here is a functin for changing swedish sek to english dollar */
    function SwedishUsd(){
        var swedishInputMoney = document.getElementById("swedish").value;
        var valueEnglishUsdMoneyOfOneDollar = 0.11;

        var x=3;
        var y =5;
        if ( x<y){
            var totalMoneyToUsd= swedishInputMoney * valueEnglishUsdMoneyOfOneDollar;
            var englishInputMoney = document.getElementById("usd").value = totalMoneyToUsd;
        }
    }
    /* here is a function for changing usd to swedish sek */
    function Usdswedish(){
        var englishInputMoney = document.getElementById("usdTwo").value;
        var valueSwedishMoneyOfOneSek = 8.95;
        var x=3;
        var y =5;
        if ( x<y){
            var totalMoneyToSwedish=  englishInputMoney * valueSwedishMoneyOfOneSek;
            var swedishInputMoney = document.getElementById("swedishSekTwo").value = totalMoneyToSwedish ;
        }
    }

    /* here is a function for our slideshow */
    var pictures;
    var index=0
    function myPictureSlide(){
        /* take all of your pictures */
        pictures = document.querySelectorAll("#content img");
        console.log(pictures)
        /* set time to your content page */
        setInterval(operationOfUsingPicturesAndTimer, 3000);
    }

    function operationOfUsingPicturesAndTimer(){
        pictures[index].classList.remove("show");
        
        // Increment index and make sure it´s reset to zero if larger or equal to the number of images
        index += 1;
        if (index >= pictures.length) {
            index = 0;
        }
        // Show next image
        pictures[index].classList.add("show");
    }
};

