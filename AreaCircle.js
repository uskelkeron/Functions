
const main = (()=>{

    const PIE = 3.14;

    const prompt = require("prompt-sync")();

    const areaCircle = (radius)=>{     

        return PIE *(radius * radius);
    }

    const circumference = (radius)=>{
        return PIE * (radius * 2);
    }

    const printCircle = (areaCircle, circumference, radius)=>{
        console.log(` The area of a circle, with a radius ${radius} \n Area: ${areaCircle} \n Circumference: ${circumference}`);
    }


    const radius = parseInt(prompt(" Pleae enter radius: "));
    const area = areaCircle(radius).toFixed(2);
    const circum = circumference(radius).toFixed(2);

    printCircle(area, circum,radius );




})();