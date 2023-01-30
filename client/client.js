const net = require('net')
const readline = require('readline-sync')

var miIp=''

datoIp()
function datoIp(){
    miIp = readline.question('\nIntroduzca la ip del servidor:\t ')
}
const options = {      
    port: 4010,
    host: miIp
}
const client = net.createConnection(options)

client.on('connect', ()=>{
    console.log('Conexion satisfactoria')
    console.log('continuar')
     sendLine()
})

client.on ('data', (data)=>{  
   console.log(data.toString().trim())
   sendLine()
    
        
})

client.on('error', (err)=>{
    console.log(err.message)
})




function sendLine() {
        var line = readline.question(' ')
    if (line == "0"){
        //fin del programa
        client.end()
    }else{
        client.write(line.trim())
    }
    
}