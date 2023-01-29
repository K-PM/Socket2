const net = require('net')
const readline = require('readline-sync')

var miIp=''
datoIp()
// home()
// function home(){
    
//         if (readline.question('QUE DESEA HACER\n1.- Iniciar secion\t2. Registrar') == '1'){
            
//             bandera=true
//         }
    
    
// }
function datoIp(){
    miIp = readline.question('\nIntroduzca la ip del servidor:\t ')
}
const options = {      
    port: 4009,
    host: miIp
}
 
const client = net.createConnection(options)


client.on('connect', ()=>{
    console.log('Conexion satisfactoria')
    sendLine()
})

client.on ('data', (data)=>{ 
  console.log( data.toString())
 
  sendLine()
})




client.on('error', (err)=>{
    console.log(err.message)
})

// client.on('ready', ()=>{
//     sendLine()
// })


function sendLine() {

    // process.stdin.on('data', (data) => {
    //     if (data.toString() != 0){
    //         client.write('escribe algo '+ data.toString())
    
    //     }else if (data.toString() == 0){
    //         client.end()
    //         process.exit(0)
    //     }
       
    // });
        var line = readline.question()
    if (line == "0"){
        //fin del programa
        client.end()
    }else{
        client.write(line.trim())
    }
    
}