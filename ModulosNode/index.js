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

// const fs = require('fs');

// fs.readFile('./Texto.txt',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

const http = require('http');
const colors = require('colors');

const handleServer = function(req, res){
    res.writeHead(200,{'Content-type': 'text/html' });
    res.write('<h1>Hola mundo desde node js</h1>');
    res.end();
}
const server = http.createServer(handleServer);

server.listen(3000,function(){
    console.log('Server on port 3000'.yellow);
});