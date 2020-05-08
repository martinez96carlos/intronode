const math = {

};

function add(x1, x2) { 
    return x1 + x2;
}
function substract(x1, x2) { 
    return x1 - x2;
}
function multiply(x1, x2) { 
    return x1 * x2;
}
function divide(x1, x2) { 
   if(x2 === 0){
       console.log("No se puede dividir entre 0");
   } else {
    return x1 / x2;
   }
}

// exports.sumar = add;
// exports.restar = substract;
// exports.multiplicar = multiply;
// exports.dividir = divide;

math.sumar  = add;
math.restar = substract;
math.multiplicar = multiply;
math.dividir = divide;

module.exports = math;
