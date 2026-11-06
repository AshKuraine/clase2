// Nueva pantalla: Pago de Servicios
// Ejemplo simple para clase. Ejecutar con: node src/pagosServicios.js

const servicios = [
  { id: 1, nombre: 'Luz', empresa: 'Enel', monto: 25000 },
  { id: 2, nombre: 'Agua', empresa: 'Aguas Andinas', monto: 12000 },
  { id: 3, nombre: 'Internet', empresa: 'Movistar', monto: 19990 },
];

function formatearMonto(monto) {
  return `$${monto.toLocaleString('es-CL')}`;
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

module.exports = { servicios, pagarServicio };
