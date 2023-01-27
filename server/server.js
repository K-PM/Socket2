const net = require('net');

const server = net.createServer()

server.on('connection', (socket)=>{
    
    socket.on('data', (data)=>{
        console.log('\nMensaje recibido desde el cliente:' + data)
        socket.write('Recibido!') //escribe servidor  y se va al cliente
    })

    socket.on('close', ()=>{
        console.log('Comunicacion finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})

server.listen(4000, ()=> {
    console.log('servidor esta escuchando en el puerto', server.address().port)
})
