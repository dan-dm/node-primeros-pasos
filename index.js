require('dotenv').config();

console.log(process.arch);

// process.exit(0); -> exit with code OK (0)

console.log("Hola mundo!");

// process.on('SIGKILL') -> EventEmmitter spy & acto on..

console.log(process.env); 
console.log(process.env.USER_ID);
process.stdout.write('Hola Mundo!!');
//process.stdin();

