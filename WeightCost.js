const main = (()=>{

    const prompt = require("prompt-sync")();

    const weightCalculator = (weight)=>{

        if(weight < 2.5)
        {
            return weight * 3.50;
        }
        else if (weight>= 2.5 && weight < 5)
        {
            return weight * 2.85;
        }
        else if(weight >=5 && weight <7)
        {
            return weight * 2.45;
        }
        else
        {
            return weight * 3.25;
        }
        
    }

    const printPrice = (weight,price)=>{
        console.log(`The cost of ${weight}kg is equal: ${price}`);
    }

    const weight_value = parseFloat(prompt("Please enter the weight "));

    const cost = weightCalculator(weight_value).toFixed(2);

    printPrice(weight_value, cost);
})();