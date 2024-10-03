const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let horaAtual = dateToday.getHours();
  let minutoAtual = dateToday.getMinutes();
  let segundoAtual = dateToday.getSeconds();

  if (horaAtual < 10) horaAtual = '0' + horaAtual;
  if (minutoAtual < 10) minutoAtual = '0' + minutoAtual;
  if (segundoAtual < 10) segundoAtual = '0' + segundoAtual;

  horas.textContent = horaAtual;
  minutos.textContent = minutoAtual;
  segundos.textContent = segundoAtual;
})