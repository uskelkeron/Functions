
const main = (()=>{

    const prompt = require("prompt-sync")();

    const CubeFunction = (num)=>{
        return num*num*num;
    }

    const number = parseInt(prompt("Pleae enter number to display cube: "));

    console.log(`The Cube of ${number} is ${CubeFunction(number)}`);

})();