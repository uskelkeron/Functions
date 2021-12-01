

const main = (()=>{
    const prompt = require("prompt-sync")();

    const sumFunction = (num1,num2)=>{
        return num1+num2;
    }

    const PrintFunction = (num1,num2,value)=>{
        console.log(`The Sum of ${num1} + ${num2} = ${value}`);
    }


    const number1 = parseFloat(prompt(`Please enter a number: `));
    const number2 = parseFloat(prompt(`Please enter another number: `));
    const answer = sumFunction(number1,number2);
    PrintFunction(number1,number2,answer);
})();