const main = (()=>{
    const prompt = require("prompt-sync")();
    const VAT = .15;

    const subTotalVat = (subtotal,VAT)=>{

        return (subtotal + (subtotal*VAT));
    }

    const discount = (total, discount)=>{
        return (total - (total * (discount/100)));

    }


    const name = prompt("Please enter members name: ");
    const memNumber = prompt(`Please enter ${name} membership number:`);
    const costPrice = parseFloat(prompt("Please enter total amount"));
    const discountcode = parseInt(prompt("Please enter discount code %"));

    const subTotalCost = subTotalVat(costPrice,VAT);
    const finalCost = discount(subTotalCost,discountcode);

    console.log(` Name: ${name} \n Membership Code: ${memNumber} \n Cost Price: ${costPrice} \n Sub Total Vat Inc: ${subTotalCost} \n Final Price: ${finalCost}`)


})();