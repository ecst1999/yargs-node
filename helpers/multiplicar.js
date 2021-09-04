const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar, hasta ) =>{

    try{
        
        let salida, consola = '';
        
        
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} =  ${base * i}\n`;
            consola += `${base} ${ 'x'.blue } ${i} =  ${base * i}\n`;
        }
        
        if(listar){
            
            console.log('==============================='.blue);
            console.log('Tabla del:'.red, colors.green(base));
            console.log('==============================='.blue);
    
            console.log(consola);

        }

    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    }catch (err){
        throw err;
    }

   

}

module.exports = { 
    crearArchivo
 }