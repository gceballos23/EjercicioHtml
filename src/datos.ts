let btnEnv = document.getElementById("btnEnviar");
let datoAltura = document.getElementById("datosAltura");
let datoBase = document.getElementById("datosBase");
let baseRotulo = document.getElementById("baseRotulo");
let alturaRotulo = document.getElementById("alturaRotulo");
baseRotulo.innerHTML = "Ingrese la Base del Rectangulo";
alturaRotulo.innerHTML = "Ingrese la Altura del Rectangulo";

let altura: number = Number(datoAltura.value);
let base: number = Number(datoBase.value);
let area: number = altura * base;

btnEnv.addEventListener("click", () => {
  console.log("La Altura es ", datoAltura.value);
  console.log("La Base es ", datoBase.value);
  console.log("El area es", datoAltura.value * datoBase.value);
});
