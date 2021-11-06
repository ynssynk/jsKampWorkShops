//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function listPrimeNumbers() {
    for (let i = 2; i < 1000; i++) {
        let isPrime=true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime=false
            }            
        }
        if (isPrime) {
            console.log("asal : "+i);
        }
        isPrime=true
    }    
}
listPrimeNumbers()