
function calculateAmoutPerPerson(amount,tip,persons){

   return  ((amount*(tip/100))/persons).toFixed(2);  
}


function calculateAmountTotal(amount,tipperson,persons){
    
    return ((amount/persons)+tipperson).toFixed(2); 
}

export {calculateAmoutPerPerson,calculateAmountTotal} ;