
const main = (()=>{

    const prompt = require("prompt-sync")();

    const SqrFunction = (num)=>{
        return num*num;
    }

    const number = parseInt(prompt("Pleae enter number to Sq."));

    console.log(`The Square of ${number} is ${SqrFunction(number)}`);

})();