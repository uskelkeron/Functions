const main = (()=>{

    const prompt = require("prompt-sync")();

    const isOdd = (num1,num2)=>{

        for (let i = num1; i <= num2; i++)
        {

            if(i===0)
            {
                console.log(`The number ${i} is Zero 0 `);
            }
            else if(i%2!==0)
            {
                console.log(`The number ${i} is Odd 1`);
            }

            else if(i%2===0)
            {
                console.log(`The number ${i} is Even 2`);
            }
        }


    }

    isOdd(-5,20);

})();