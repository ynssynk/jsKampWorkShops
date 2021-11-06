

/*
2.gün ödevi 
1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
 */

//Asal sayı
function findPrimeNumbers(...numbers) {
    let isPrime=true
    for (let i = 0; i < numbers.length; i++) {        
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i]%j==0) {
                isPrime=false
            }            
        }
        if (isPrime) {
            console.log("asal: "+numbers[i]);
        } 
        isPrime=true
    }
}
findPrimeNumbers(2,3,5,10,15,18,19,23,35,100,101,102,103)