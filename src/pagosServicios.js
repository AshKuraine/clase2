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

function mostrarServicios() {
  console.log('=== Pago de Servicios ===');
  console.log('Selecciona uno de los siguientes servicios para consultar o realizar un pago:\n');
  servicios.forEach((s) => {
    console.log(`${s.id}. ${s.nombre} (${s.empresa}) - Monto a pagar: ${formatearMonto(s.monto)}`);
  });
  console.log('');
}

function pagarServicio(id, saldo) {
  const servicio = servicios.find((s) => s.id === id);

  if (!servicio) {
    return {
      ok: false,
      mensaje: 'No fue posible realizar el pago porque el servicio solicitado no fue encontrado.',
    };
  }

  if (saldo < servicio.monto) {
    return {
      ok: false,
      mensaje: `No puedes pagar ${servicio.nombre} porque el saldo disponible no alcanza para cubrir el monto total.`,
    };
  }

  return {
    ok: true,
    mensaje: `El pago de ${servicio.nombre} fue realizado correctamente por ${formatearMonto(servicio.monto)}.`,
    saldoRestante: saldo - servicio.monto,
  };
}

module.exports = { servicios, mostrarServicios, pagarServicio };

// Demo al ejecutar el archivo directamente
if (require.main === module) {
  let saldo = 40000;

  mostrarServicios();
  console.log(`Saldo disponible para realizar pagos: ${formatearMonto(saldo)}\n`);

  [1, 3, 99].forEach((id) => {
    const resultado = pagarServicio(id, saldo);
    console.log(resultado.ok ? `✔ ${resultado.mensaje}` : `✘ ${resultado.mensaje}`);
    if (resultado.ok) saldo = resultado.saldoRestante;
  });

  console.log(`\nProceso finalizado. Tu saldo disponible es: ${formatearMonto(saldo)}`);
}
