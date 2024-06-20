var idade, precoProduto;

idade = prompt("Digite a sua idade: ");
precoProduto = prompt("Digite o valor do produto: ex: 13.45 ");

if (idade < 18) {
 var total = precoProduto - precoProduto * 0.1;
  console.log(`O valor com desconto é: R$ ${total}`);
} else {
  console.log(
    `Você não tem desconto para essa oferta: o valor total da compra é: R$ ${precoProduto}`
  );
}
