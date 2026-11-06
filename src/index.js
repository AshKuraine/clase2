const { greet, log } = require('./utils');

log(greet('mundo'));

const { decimalToBinary, capitalize } = require('./utils');

log(capitalize('hola'));
log(`10 en binario es ${decimalToBinary(10)}`);
