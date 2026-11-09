function greet(name) {
  return `Hola, ${name}!`;
}

function log(message, level = 'INFO', context = {}) {
  let timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message} ${JSON.stringify(context)}`);
}

module.exports = { greet, log };

function decimalToBinary(n) {
  return Number(n).toString(2);
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

module.exports.decimalToBinary = decimalToBinary;
module.exports.capitalize = capitalize;
