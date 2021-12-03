const main = (()=>{

    const prompt = require("prompt-sync")();

    let average, count=0, sum=0;

    const isOdd = (number)=>{

        if(number%2!==0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    const averageNum = (sum1, numOdd)=>{

        return sum1/numOdd;
    }

    for(let i=0;i<6;i++)
    {
        
        let number = parseInt(prompt("Please enter a number"));
        let value = isOdd(number);
       
        if(value === true)
        {
           sum = sum + number; 
           count++;
        }
        else
        {
            
        }

    }


    average = averageNum(sum,count);

    console.log(` The number of Odd numbers generated: ${count}, \n The sum of all odd numbers: ${sum}, \n The average of all odd numbers: ${average} `);



})();