


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


