const male = "bola"
const female = "bisi"


function calculator(male, female){
    const calculator_name = male + "loves" + female
    console.log(calculator_name);

    let love_algorithm = ""

    let index = 0
    for (index in calculator_name){
        let count = 0
        let letter = calculator_name[index];
        for (x of calculator_name){
            if (x == letter){
                count+= 1
            }
        }
        index++
        love_algorithm += count
    }
    console.log(love_algorithm)

    while (love_algorithm.length > 2){
        let new_love_algorithm = ""
        index = 0;
        let index2 = love_algorithm.length - 1 
        let fixed_length = love_algorithm.length / 2;
        while (index < fixed_length){
            if (index != index2){
                let result = parseInt(love_algorithm[index]) + parseInt(love_algorithm[index2]);
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
calculator(male, female)