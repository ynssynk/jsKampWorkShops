
/*
2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)*/
function amicableNumbers(friendNumberOne, friendNumberTwo) {
    if (friendNumberOne>0 &&friendNumberTwo>0) {
        let numberOne = 0
        let numberTwo = 0
        for (let i = 1; i < friendNumberOne; i++) {
            if (friendNumberOne%i==0) {
                numberOne=numberOne+i
            }
            
        }
        for (let j = 1; j < friendNumberTwo; j++) {
            if (friendNumberTwo%j==0) {
                numberTwo=numberTwo+j
            }
            
        }
        if (friendNumberOne==numberTwo &&friendNumberTwo==numberOne) {
            console.log("%cBu sayılar arkadaş!  :"+ friendNumberOne+" "+friendNumberTwo,"color:green" );
        } else {
            console.log("%cBu sayılar arkadaş değillermiş","color:red");
        }
    }
    else {
        console.log("%cGirilen değerler 0'dan büyük ve/veya sayısal olmalıdır","color:yellow");
    }

}

amicableNumbers(210, 284)
amicableNumbers(17296,18416)
amicableNumbers(1184, 1210)
amicableNumbers(-100,"eksiyüz")
