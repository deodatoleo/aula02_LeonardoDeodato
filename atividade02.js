var peso, altura;

peso = prompt("Digite a seu peso em KG (ex:98.2): ");
altura = prompt("Digite a sua altura em Metros (ex:1.87): ");

imc = peso / Math.pow(altura, 2);


if (imc < 18.5) {
  console.log("Magreza");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Normal");
} else if (imc > 24.9 && imc <= 29) {
  console.log("sobrepeso");
} else if (imc > 29 && imc <= 39.9) {
  console.log("Obesidade");
} else {
  console.log("Obesidade Grave");
}
