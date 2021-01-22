const males = ["timi", "funmi", "jasmine", "praise", "anna", "lisa", "bola"];
const females = ["bisi", "seun", "joseph", "frank", "daniel", "bayo", "david"];


function calculator(male, female){
    const calculatorName = male + "loves" + female;
    console.log(calculatorName);

    let loveAlgorithm = "";

    for (let index = 0; index < calculatorName.length; index++){
        let count = 0;
        const letter = calculatorName[index];
        for (x of calculatorName){
            if (x == letter){
                count+= 1;
            }
        }
        loveAlgorithm += count;
    }
    console.log(loveAlgorithm);

    while (loveAlgorithm.length > 2){
        let newLoveAlgorithm = "";
        countFromFront = 0;
        let countFromBack = loveAlgorithm.length - 1 ;
        const fixedLength = loveAlgorithm.length / 2;
        while (countFromFront < fixedLength){
            if (countFromFront != countFromBack){
                const result = parseInt(loveAlgorithm[countFromFront]) + parseInt(loveAlgorithm[countFromBack]);
                newLoveAlgorithm += result;
            }else {
                newLoveAlgorithm += loveAlgorithm[countFromFront];
            }
            countFromFront++
            countFromBack--
        }
        loveAlgorithm = newLoveAlgorithm
        console.log(loveAlgorithm)
        if (loveAlgorithm.length == 2){
            console.log(`The love percentage is ${loveAlgorithm}%`)
        }
    }
}
const maleRandom = Math.floor(Math.random() * males.length);
const femaleRandom = Math.floor(Math.random() * females.length);

calculator(males[maleRandom], females[femaleRandom])
