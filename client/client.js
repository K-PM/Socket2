const net = require('net')
const readline = require('readline-sync')

var miIp=''


home()
function home(){
    do{
         var opc =readline.question('QUE DESEA HACER\n1.- Iniciar secion\t2. Registrar\n') 
        if (opc== 1){
            datoIp()
        }else if(opc==2){
            console.log(' DOS ')
        }    
    }while(opc<0 && opc>2)
       
}


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
     encontrar()
})

client.on ('data', (data)=>{  
    var bandera='true'

    bandera=data.toString().trim()

        if(bandera=='false'){
            client.end
        }else if(bandera=='true'){
        console.log( data.toString())
        sendLine()}
        else if(bandera!=''){
            console.log(data.toString())
            sendLine()}
        
})



function encontrar(){
var user =readline.question('Usuario:\t')
        client.write(user)
}

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
        var line = readline.question('Envie un mensaje: ')
    if (line == "0"){
        //fin del programa
        client.end()
    }else{
        client.write(line.trim())
    }
    
}