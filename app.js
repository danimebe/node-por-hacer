const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');



let comando = argv._[0];


switch(comando){
    case 'crear':
        porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        porHacer.getListado();
        break;
    case 'actualizar':
        porHacer.actualizar(argv.descripcion,argv.completado);
        break;
    case 'borrar':
        porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log('Comando no reconocido');
}
