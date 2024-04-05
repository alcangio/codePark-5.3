// MÉTODO SIMPLES
// TODO 1 : adicione um título simples ao site com o id 'titulo'
let elementoH1 = document.createElement("h1");
elementoH1.innerText = "Smartphones: lançamentos";
elementoH1.id = "titulo";

let elementoBody = document.querySelector("body");
elementoBody.appendChild(elementoH1);

// MÉTODO COMPLEXO
// TODO 2 : adicione um elemento que represente um produto à venda
const produtoVenda = document.createElement("div");
//TODO 3 : O produto precisa incluir pelo menos o nome, a descrição e o preço; opcional outros elementos filho como imagem
produtoVenda.innerHTML = `
<h2>Apple iPhone 15 Pro Max de 256 Gb</h2>
<p><em>Cor: titânio natural. Muito robusto. Muito leve. Muito Pro.</em></p>
<p>Preço: <strong>R$ 8.499,00</strong> no PIX</p>
<img src="https://www.iplace.com.br/file/general/iplace-modelos-iphone-15-pro-max-titanio-natural-min.png" alt="imagem de um smartphone na tonalidade cinza médio com slogan da Apple" width="300">
`
elementoBody.appendChild(produtoVenda);
