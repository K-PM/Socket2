const net = require('net');

const server = net.createServer()
var IPS =[]

var bandera=false
var name=''
var userName=[{name:'julissa',entro:false},{name:'kris',entro:false},{name:'up',entro:false}]
var usuariosActivos=[]
var bandera2=false


server.on('connection', (socket)=>{
    
    IPS.push(socket)

    
    
    console.log(socket.remoteAddress+ ' conectado')
    bandera=true
    

    socket.on('data', (data)=>{
        const remitente =socket
        
        
        if(bandera==true){
            //userName.push(name)
            //PARA UN ARRAY DE OBJETO
            // let newUser1 = new Useres ({name:'julissa',ip:socket.remoteAddress,entro:true})
            // usuariosActivos.push(newUser)
            
        
            socket.write('Introduzca un usuario existente')


            // name =data.toString().trim()
            
            // userName.some((encontrar) => { 
            //     if(encontrar===name){
            //         console.log('encontrando verdadero')
                    
            //         bandera2='true' 

            //         return bandera2

            //     }else if(encontrar!=name){
            //         console.log('encontrando FALSO')
                     
            //     }
               
            // })

        }
        
        
        for(var j=0;j<userName.length;j++){
            if(data.toString().trim()==userName[j].name){
                userName[j].entro=true
               
            }
        }
        
        for(var j=0;j<userName.length;j++){
            if(userName[j].entro==true){
            IPS.map((anotherUser) => { 
                if(anotherUser!=remitente){
                    anotherUser.write('\n'+userName[j].name + ":  " + data.toString().trim())
                }
            })
            socket.write(userName[j].name+': ')
            userName[j].entro=false
        }
        }   
        // userName.some((encontrar) => { 
            //     if(encontrar===name){
            //         console.log('encontrando verdadero')
                    
            //         bandera2='true' 

            //         return bandera2

            //     }else if(encontrar!=name){
            //         console.log('encontrando FALSO')
                     
            //     }
               
            // })

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
            console.log(socket.remoteAddress + "usuario cancelo la coneccion con ctrl+c ")

        } else {
            console.error(err)
        }

       
    })

})

server.on('error', (err) => {
    console.log(err)
})

server.listen(4010, ()=> {
    console.log('servidor esta escuchando en el puerto', server.address().port)
})

//PARA CREAR UNA PERSONA
class Useres {
    constructor(nombre, ip,entro) {
      this.nombre = nombre;
      this.ip = ip;
    }
  }