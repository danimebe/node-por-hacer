const fs = require('fs')
const colors = require('colors');
let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido guardado!');
      });
      
    
}

const getListado = () => {
    
    cargarDB();

    listadoPorHacer.forEach( element => {
        console.log(colors.green('=========POR HACER========='));
        console.log(element.descripcion);
        console.log('Estado: ', element.completado);
        console.log(colors.green('==========================='));
    })
}

const cargarDB = () => {
    try {
       listadoPorHacer = require('../db/data.json') 
    } catch (error) {
        
    }
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    }
    cargarDB();

    listadoPorHacer.push(porHacer);

    guardarDB();
}

const actualizar = (descripcion, completado) => {

    cargarDB();

    indice = listadoPorHacer.findIndex( elemento => {
        return elemento.descripcion === descripcion
    })

    listadoPorHacer[indice].completado = completado;

    guardarDB();
}

const borrar = descripcion => {
    cargarDB();

    listadoPorHacer = listadoPorHacer.filter( element => {
        return element.descripcion !== descripcion
    })

    guardarDB();
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}