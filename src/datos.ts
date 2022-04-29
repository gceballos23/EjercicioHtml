let btnEnv = document.getElementById("btnEnviar");
let datoAltura = document.getElementById("datosAltura");
let datoBase = document.getElementById("datosBase");
let baseRotulo = document.getElementById("baseRotulo");
let alturaRotulo = document.getElementById("alturaRotulo");
baseRotulo.innerHTML = "Ingrese la Base del Rectangulo";
alturaRotulo.innerHTML = "Ingrese la Altura del Rectangulo";

let altura = parseInt(datoAltura.value, 10);
let base = parseInt(datoBase.value, 10);
let area: number = altura * base;

btnEnv.addEventListener("click", () => {
  console.log("La Altura es ", datoAltura.value);
  console.log("La Base es ", datoBase.value);
  console.log("El area es", area);
});
