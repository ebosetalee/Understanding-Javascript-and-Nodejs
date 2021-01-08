// var male = ["timi", "funmi", "jasmine", "praise", "anna", "lisa"];
// console.log(Math.random(male))
var male = "bola"
var female = "bisi"

var calculator_name = male + "loves" + female
console.log(calculator_name);

var love_algorithm = ""

var index = 0
while (calculator_name[index]){
    var count = 0
    var letter = calculator_name[index];
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
    var fixed_length = love_algorithm.length / 2;
    while (index < fixed_length){
        if (index != index2){
            var result = parseInt(love_algorithm[index]) + parseInt(love_algorithm[index2]);
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