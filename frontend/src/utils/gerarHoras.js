export default function gerarHoras(inicio, fim, intervalo = "") {
  let horas = [];

  for (let i = inicio; i <= fim; i++) {
    let zero = 0;

    if (i > 9) {
      zero = "";
    }

    if (i === intervalo) {
      i = 13;
    }

    for (let y = 0; y <= 45; y += 15) {
      let minutoZero = "00";

      if (y > 0) {
        minutoZero = y;
      }

      if (i === 16 && minutoZero > 0) {
        break;
      }

      const hora = `${zero}${i}:${minutoZero}`;
      horas.push(hora);
    }
  }

  return horas;
}
