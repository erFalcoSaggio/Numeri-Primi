function view () {
    // array vuoto
    primeNums = [];
    isPrime = true;

    // carica fino a 10k e controlla se è primo
    for (let i = 2; i < 10000; i++) {
        // resetto isPrime
        isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i%j === 0) {
                isPrime = false;
                // esco dal for
                break;
            }
        }
        if (isPrime) {
            primeNums.push(i);
        }
    }

    document.getElementById('r').innerText = `The result is: \n
                                            ${primeNums}`;
    document.getElementById('view').style.display = 'none';
}