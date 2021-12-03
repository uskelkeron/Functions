const main = (()=>{
    const prompt = require("prompt-sync")();

    const factor = (number)=>{
        let value = "";
        
        for(let i=1; i <= number; i++)
        {
     
            if(number%i===0)
            {
                value = value.concat(i)+",";
                
            }
        }
        return value;
    }

    for (let i=1; i<=3; i++)
    {

        let number = parseInt(prompt("Please enter number: "));

        let factor_list = factor(number);
        console.log(`The factors of ${number} is: ${factor_list}`);
    }
    
})();