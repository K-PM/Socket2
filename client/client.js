const net = require('net')
const readline = require('readline-sync')

console.log("hola inicio de todo")

var miIp = readline.question('\nintrodusca la ip del servidor:\t ')
var por = readline.question('\nintrodusca la port del servidor:\t ')

    const options = {      
        port: por,
        host: miIp
    }
 
const client = net.createConnection(options)

client.on('connect', ()=>{
    console.log('Conexion satisfactoria!')
    sendLine()
})

client.on ('data', (data)=>{
    console.log('El servidor dice:' + data)
    sendLine()
})

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