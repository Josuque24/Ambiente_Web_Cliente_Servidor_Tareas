function calcular() {
  const bruto = parseFloat(document.getElementById("salarioBruto").value);

  if (isNaN(bruto) || bruto <= 0) {
      alert("Por favor ingrese un salario bruto válido.");
      return;
  }

  // 1. Calcular cargas sociales.
  const cargas = bruto * 0.105;

  // 2. Calcular impuesto sobre la renta.
  let renta = 0;
      if (bruto > 922000 && bruto <= 1352000) {
          renta = (bruto - 922000) * 0.10;
      } else if (bruto > 1352000 && bruto <= 2373000) {
          renta = (bruto - 1352000) * 0.15 + (1352000 - 922000) * 0.10;
      } else if (bruto > 2373000 && bruto <= 4745000) {
          renta = (bruto - 2373000) * 0.20
              + (2373000 - 1352000) * 0.15
              + (1352000 - 922000) * 0.10;
      } else if (bruto > 4745000) {
          renta = (bruto - 4745000) * 0.25
              + (4745000 - 2373000) * 0.20
              + (2373000 - 1352000) * 0.15
              + (1352000 - 922000) * 0.10;
      }


  // 3. Salario neto.
  const neto = bruto - cargas - renta;

  // Mostrar resultados.
  document.getElementById("cargasSociales").textContent = cargas.toFixed(2);
  document.getElementById("impuestoRenta").textContent = renta.toFixed(2);
  document.getElementById("salarioNeto").textContent = neto.toFixed(2);
}

function cambiarParrafo() {
      document.getElementById("miParrafo").innerHTML = "¡El texto ya cambio! <br> <i>Nota: No se si es a esto que se referia profe.</i>";
    }


const estudiantes = [
  { nombre: "Juan", apellido: "Perez", nota: 85 },
  { nombre: "Luis", apellido: "Mora", nota: 90 },
  { nombre: "Carl", apellido: "Rojas", nota: 78 },
  { nombre: "Jose", apellido: "Vega", nota: 92 }
];

function mostrarEstudiantes() {
  let lista = "";
  let sumaNotas = 0;

  estudiantes.forEach(est => {
    lista += `<p>${est.nombre} ${est.apellido} -> Nota: <strong>${est.nota}</strong></p>`;
    sumaNotas += est.nota;
  });

  const promedio = (sumaNotas / estudiantes.length).toFixed(2);
  lista += `<hr><p><em>Promedio de notas:</em> <strong>${promedio}</strong></p>`;

  document.getElementById("listaEstudiantes").innerHTML = lista;
}