function isEven(number) {
    if (number % 2 === 0) {
        console.log("Is even");
    } else {
        console.log("is odd");
    }
}

  ///////////////////////////////////

  function getLastEvenNumber(limit) {
    let lastEven = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            lastEven = i;
        }
    }

    console.log("Último número par:", lastEven);
}

getLastEvenNumber(10087);