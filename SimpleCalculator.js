const main = (()=>{

const prompt = require("prompt-sync")();

const Sum = (num1,num2)=>{
    return num1+num2;
}

const subtract = (num1,num2)=>{
    return num1-num2;
}

const product = (num1,num2)=>{
    return num1*num2;
}

const quotient = (num1,num2)=>{
    return num1/num2;
}

const printResult = (num1,num2,symbol,answer)=>{
    console.log(`The value ${num1} ${symbol} ${num2} is equal = ${answer}`);
}

const code = parseInt(prompt("Please Enter Code you utilize program: (1) to sum (2) to subtract (3) to multiply and (4) to divide: "));

const number1 = parseFloat(prompt("Please Enter First Number: "));

let number2 = parseFloat(prompt("Please Etner Second Number: "));
let symbol = "", answer;

if(code === 1)
{
    symbol = " + ";
    answer = Sum(number1,number2);
    printResult(number1,number2,symbol,answer);
}
else if (code === 2)
{
    symbol = " - ";
    answer = subtract(number1,number2);
    printResult(number1,number2,symbol,answer);
}
else if ( code === 3)
{
    symbol = " x ";
    answer = product(number1,number2);
    printResult(number1,number2,symbol,answer);
}
else if ( code === 4)
{
    while(number2===0)
    {
    
            number2=parseFloat(prompt("You can't devide by Zero, Please re-enter second number: "));
    }

    symbol = " / ";
    answer = quotient(number1,number2);
    printResult(number1,number2,symbol,answer);

}
else
{
    console.log("Please enter valid code in order to perform Arithmetic")
}
    
})();