var numDiaDaSemana = prompt(
  "Digite um número correspondente ao dia da semana: "
);

switch (numDiaDaSemana) {
  case 1:
    console.log("Hoje é Segunda");
    break;
  case 2:
    console.log("Hoje é Terça");
    break;
  case 3:
    console.log("Hoje é Quarta");
    break;
  case 4:
    console.log("Hoje é Quinta");
    break;
  case 5:
    console.log("Hoje é Sexta");
    break;
  case 6:
    console.log("Hoje é Sábado");
    break;
  case 7:
    console.log("Hoje é Domingo");
    break;
  default:
    console.log("Nenhuma das alternativas");
}
