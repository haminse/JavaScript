// Have the function StringChallenge(num) 
// take the num parameter being passed and 
// return all the numbers from 1 to num separated 
// by spaces, but replace every number that is 
// divisible by 3 with the word "Fizz", replace 
// every number that is divisible by 5 with the word
// "Buzz", and every number that is divisible by 
// both 3 and 5 with the word "FizzBuzz". 
// For example: if num is 16, then your program 
// should return the string 
// "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16". 
// The input will be within the range 1 - 50.


var StringChallenge = function(num){

    var rst = ""
    for(let i = 1; i < num+1; i++){
        if(i % 15 == 0){
            rst += "FizzBuzz ";
        }
        else if(i % 3 == 0){
            rst += "Fizz ";
        }
        else if(i % 5 == 0){
            rst += "Buzz ";
        }else{
            rst += i + " ";
        }
    }
    return rst
}

//test
console.log(StringChallenge(16) == '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 '); //true
