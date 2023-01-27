const net = require('net');

const server = net.createServer()
let IPS =[]
var i=0;

server.on('connection', (socket)=>{
    i++
    IPS.push[i]

    console.log('usuario 1'+IPS.pop[i])



    socket.on('data', (data)=>{

        IPS.push[i]

        console.log('usuario 2'+IPS.pop[i])
        
        console.log('\nMensaje recibido desde el cliente:' + data)
            socket.write('Usuario Externo: '+data) //escribe servidor  y se va al cliente
            
    })

    socket.on('close', ()=>{
        console.log('Comunicacion finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})

server.listen(4005, ()=> {
    console.log('servidor esta escuchando en el puerto', server.address().port)
})
