// Nueva pantalla: Pago de Servicios
// Ejemplo simple para clase. Ejecutar con: node src/pagosServicios.js
const { log } = require('./utils')

const servicios = [
  { id: 1, nombre: 'Luz', empresa: 'Enel', monto: 25000 },
  { id: 2, nombre: 'Agua', empresa: 'Aguas Andinas', monto: 12000 },
  { id: 3, nombre: 'Internet', empresa: 'Movistar', monto: 19990 },
];

function formatearMonto(monto) {
  return `$${monto.toLocaleString('es-CL')}`;
}

function mostrarServicios() {
  log('=== Pago de Servicios ===\n');
  servicios.forEach((s) => {
    log(`${s.id}. ${s.nombre} (${s.empresa}) - ${formatearMonto(s.monto)}`);
  });
  log('');
}

function pagarServicio(id, saldo) {
  const servicio = servicios.find((s) => s.id === id);

  if (!servicio) {
    return { ok: false, mensaje: 'Servicio no encontrado' };
  }

  if (saldo < servicio.monto) {
    return { ok: false, mensaje: `Saldo insuficiente para pagar ${servicio.nombre}` };
  }

  return {
    ok: true,
    mensaje: `Pago de ${servicio.nombre} realizado por ${formatearMonto(servicio.monto)}`,
    saldoRestante: saldo - servicio.monto,
  };
}

function totalServicios() {
  return servicios.reduce((suma, s) => suma + s.monto, 0);
}

module.exports = { servicios, mostrarServicios, pagarServicio, totalServicios };

// Demo al ejecutar el archivo directamente
if (require.main === module) {
  let saldo = 40000;

  mostrarServicios();
  log(`Saldo disponible: ${formatearMonto(saldo)}\n`);

  [1, 3, 99].forEach((id) => {
    const resultado = pagarServicio(id, saldo);
    log(resultado.ok ? `✔ ${resultado.mensaje}` : `✘ ${resultado.mensaje}`);
    if (resultado.ok) saldo = resultado.saldoRestante;
  });

  log(`\nSaldo final: ${formatearMonto(saldo)}`);
  log(`Total de todos los servicios: ${formatearMonto(totalServicios())}`);
}
