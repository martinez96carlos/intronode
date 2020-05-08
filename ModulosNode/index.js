// const os = require('os');

// console.log(os.platform());
// console.log(os.release());
// console.log('Memoria Libre: ' + os.freemem());
// console.log('Memoria Total: ' + os.totalmem());


// const fs = require('fs');

// fs.writeFile('./Texto.txt', 'Linea uno', function (err) {
//     if(err){
//         console.log(err);
//     }
//     console.log('Archivo Creado');
// });
// console.log('ultima linea de código');

const fs = require('fs');

fs.readFile('./Texto.txt',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

