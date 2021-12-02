const main = (()=>{

    const prompt = require("prompt-sync")();

    const isEven = (number)=>{
        if(number%2===0){
            return "Even";
        }
        else
        {
            return "Odd";
        }
    }

    const printResult = (num,value)=>{
        console.log(`The number ${num} is an ${value} integer`);
    }

    const number1 = parseInt(prompt("Please enter a number: "));

    const value = isEven(number1);

    printResult(number1,value);
})();