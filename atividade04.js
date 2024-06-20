var letra;

letra = prompt("Digite uma letra: ");

if (
  letra == "a" ||
  letra == "e" ||
  letra == "i" ||
  letra == "o" ||
  letra == "u"
) {
  console.log(`Esta letra é uma vogal`);
} else if (
  letra == "A" ||
  letra == "E" ||
  letra == "I" ||
  letra == "O" ||
  letra == "U"
) {
  console.log("Esta letra é uma vogal");
} else if (isNaN(letra) == false) {
  console.log("Isso é um número, por favor digite uma letra");
} else {
  console.log("Esta letra é uma consoante");
}
