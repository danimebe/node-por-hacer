const crear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const actualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        default: true,
        alias: 'c'
    }
}


const argv = require('yargs').command('crear','Crear una tarea por hacer', crear)
                                .command('actualizar','Actualiza el estado completado de una tarea', actualizar)
                                .command('borrar','Elimina una tarea por hacer',crear)
                                    .help().argv;


module.exports = {
    argv
}                                    