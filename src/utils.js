function greet(name) {
  return `Hola, ${name}!`;
}

function log(message, level = 'INFO', context = {}) {
  let timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message} ${JSON.stringify(context)}`);
}

module.exports = { greet, log };
