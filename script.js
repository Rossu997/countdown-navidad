
/* const dias = document.getElementById("dias")
const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

const fechaNavidad = new Date("25 Dec 2022, 00:00");

setInterval(() => {
  let fechaAhora = new Date();
  let resultadoEnSegundos = new Date(fechaNavidad - fechaAhora) / 1000;

  let diasFaltantes = Math.floor(resultadoEnSegundos / 3600 / 24);
  let horasFaltantes = Math.floor(resultadoEnSegundos / 3600) % 24;
  let minutosFaltantes = Math.floor(resultadoEnSegundos / 60) % 60;
  let segundosFaltantes = Math.floor(resultadoEnSegundos) % 60;

  /* dias.innerText = diasFaltantes;
  horas.innerText = horasFaltantes;
  minutos.innerText = minutosFaltantes;
  segundos.innerText = segundosFaltantes;

  console.log(diasFaltantes, horasFaltantes, minutosFaltantes, segundosFaltantes)
}, 1000);
*/


//*********************





const fechaNavidad = new Date("25 Dec 2022, 00:00")
let resultadoAnterior = undefined

setInterval(() => {
  const fechaAhora = new Date()
  /* const resultado = new Date(fechaNavidad - fechaAhora) / 1000; */
  const resultado = Math.ceil((fechaNavidad - fechaAhora) / 1000)
  calcularCifras(resultado)
  resultadoAnterior = resultado
}, 250);


//* Funcion para calcular y separar los dias, horas, minutos y segundos que faltan para navidad. En cada caso llama a la funcion "flip" para producir el cambio en el DOM.

const calcularCifras = tiempo => {
  const diasFaltantes = Math.floor(tiempo / 3600 / 24)
  const horasFaltantes = Math.floor(tiempo / 3600) % 24
  const minutosFaltantes = Math.floor(tiempo / 60) % 60
  const segundosFaltantes = tiempo % 60

  flip(document.querySelector("[data-dias-centena]"), Math.floor(diasFaltantes / 100))
  flip(document.querySelector("[data-dias-decena]"), Math.floor(diasFaltantes % 100 / 10))
  flip(document.querySelector("[data-dias-unidad]"), diasFaltantes % 10)
  flip(document.querySelector("[data-horas-decena]"), Math.floor(horasFaltantes / 10))
  flip(document.querySelector("[data-horas-unidad]"), horasFaltantes % 10)
  flip(document.querySelector("[data-minutos-decena]"), Math.floor(minutosFaltantes / 10))
  flip(document.querySelector("[data-minutos-unidad]"), minutosFaltantes % 10)
  flip(document.querySelector("[data-segundos-decena]"), Math.floor(segundosFaltantes / 10))
  flip(document.querySelector("[data-segundos-unidad]"), segundosFaltantes % 10)
}


//* Funcion para cambiar las cifras que se muestran en el DOM.

const flip = (flipCard, nuevaCifra) => {
  const topHalf = flipCard.querySelector(".top")
  const cifraInicial = parseInt(topHalf.textContent)
  if (nuevaCifra === cifraInicial) return 

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  topHalf.textContent = cifraInicial
  bottomHalf.textContent = cifraInicial
  topFlip.textContent = cifraInicial
  bottomFlip.textContent = nuevaCifra

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = nuevaCifra
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = nuevaCifra
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}

