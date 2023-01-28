const net = require('net')
const readline = require('readline-sync')

var miIp=''

datoIp()
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
    var User = readline.question('\nIngrese su nombre:\t ')
    client.write(User)
    sendLine()
})

// client.on ('data', (data)=>{  // CHECAR AQUI
//    console.log('otro cliente:' + data)
//     sendLine()
// })

client.on('error', (err)=>{
    console.log(err.message)
})

function sendLine() {
    var line = readline.question('\ndigite alguna cosa:\t ')
    if (line == "0"){
        //fin del programa
        client.end()
    }else{
        client.write(line)
    }
}