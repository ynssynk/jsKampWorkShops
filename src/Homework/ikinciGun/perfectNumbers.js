//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function perfectNumbers() {
    for (let i = 1; i < 1000; i++) {
        let perfectNumber = 0;
    for (let j = 1; j <i; j++) {
        if (i%j==0) {
            perfectNumber = perfectNumber + j;
        }        
    }
    if (perfectNumber==i) {
        console.log("sen mükkemmel sayısın : "+i);
    }        
    }
    
    
}
perfectNumbers()
