const males = ["timi", "funmi", "jasmine", "praise", "anna", "lisa", "bola"]
const females = ["bisi", "seun", "joseph", "frank", "daniel", "bayo", "david"]


function calculator(male, female){
    const calculator_name = male + "loves" + female
    console.log(calculator_name);

    let love_algorithm = ""

    for (let index = 0; index < calculator_name.length; index++){
        let count = 0
        const letter = calculator_name[index]
        for (x of calculator_name){
            if (x == letter){
                count+= 1
            }
        }
        love_algorithm += count
    }
    console.log(love_algorithm)

    while (love_algorithm.length > 2){
        let new_love_algorithm = ""
        index = 0;
        let index2 = love_algorithm.length - 1 
        const fixed_length = love_algorithm.length / 2;
        while (index < fixed_length){
            if (index != index2){
                const result = parseInt(love_algorithm[index]) + parseInt(love_algorithm[index2]);
                new_love_algorithm += result;
            }else {
                new_love_algorithm += love_algorithm[index];
            }
            index++
            index2 --
        }
        love_algorithm = new_love_algorithm
        console.log(love_algorithm)
        if (love_algorithm.length == 2){
            console.log(`The love percentage is ${love_algorithm}%`)
        }
    }
}
const male_random = Math.floor(Math.random() * males.length);
const female_random = Math.floor(Math.random() * females.length);

calculator(males[male_random], females[female_random])
