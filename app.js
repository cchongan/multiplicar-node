const argv = require('./config/yargs').argv;



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let base = argv.base;

console.log('base:', argv.base);
console.log('limite', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite).
        then(archivo => console.log(`Archivo creado: ${archivo} `)).
        catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconociddo');
}


// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);