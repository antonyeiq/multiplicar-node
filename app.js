const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listar } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(resp => console.log(resp))
            .catch(e => console.log('Error: ', e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resp => console.log(`Archivo creado: ${ colors.green(resp)} `))
            .catch(e => console.log('Error:', e));
        break;
    default:
        console.log('Comando no reconocido');
}