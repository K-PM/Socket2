const net = require('net');

const server = net.createServer()
var IPS =[]
var bandera=false
var name=''
var userName=[]


server.on('connection', (socket)=>{
    
    IPS.push(socket)
    console.log(socket.remoteAddress+ ' conectado')
    bandera=true


    socket.on('data', (data)=>{
        
        console.log("valor de bandera "+ bandera )
        const remitente =socket

        if(bandera==true){
            name =data.toString().trim()
            let newUser = new Useres (name,remitente)
            userName.push(newUser)
        }else{
            IPS.map((anotherUser) => { 
                if(anotherUser!=remitente){
                    anotherUser.write('\n'+remitente.remoteAddress + ":  " + data.toString().trim())
                }
            })
        }
    
        // console.log('lista de usuarios '+userName[0].nombre)
        // console.log("lista de IPS "+ IPS[0].remoteAddress)
        // console.log('Usuario Externo: '+data) 
        // console.log('Usuario Externo 2: '+data.toString().trim()) 
        bandera=false
    })













    socket.on('close', ()=>{
        
        console.log('Comunicacion finalizada')

    })

    socket.on('error', (err)=>{
        if (err.errno == -4077) {
            IPS.map((anotherUser) => {
                anotherUser.write(socket.remoteAddress + " ha salido del servidor")
            })
            console.log(socket.remoteAddress + " ha salido del servidor")

        } else {
            console.error('usuario cancelo la coneccion con ctrl+c  =>'+err)
        }
    })

})

server.on('error', (err) => {
    console.log(err)
})

server.listen(4009, ()=> {
    console.log('servidor esta escuchando en el puerto', server.address().port)
})












class Useres {
    constructor(nombre, ip) {
      this.nombre = nombre;
      this.ip = ip;
    }
  }