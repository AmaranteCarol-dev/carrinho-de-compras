let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

// Função para adicionar um produto ao carrinho
function adicionar() {  
    // Pega o produto selecionado no menu suspenso
    let produtoSelecionado = document.getElementById("produto").value;
    // Pega a quantidade digitada e garante que seja um número válido
    let quantidade = parseInt(document.getElementById("quantidade").value) || 0;
    
    // Pega a área onde os produtos do carrinho aparecem
    let listaProdutos = document.getElementById("lista-produtos");
    // Pega a área onde o total é mostrado
    let totalElement = document.getElementById("valor-total");

    // Se a quantidade for menor ou igual a zero, mostra um alerta
    if (quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida!");
        return; // Sai da função para evitar erro
    }

    // Pega o preço do produto, removendo "R$" e convertendo para número
    let preco = parseFloat(produtoSelecionado.split("R$")[1]);
    // Pega o valor atual do total e converte para número
    let totalAtual = parseFloat(totalElement.textContent.replace("R$", ""));
    // Calcula o novo total
    let novoTotal = totalAtual + (preco * quantidade);
    // Atualiza o valor total na tela
    totalElement.textContent = `R$ ${novoTotal.toFixed(2)}`;

    // Cria um novo elemento HTML para adicionar o produto no carrinho
    let novoProduto = document.createElement("section");
    novoProduto.classList.add("carrinho__produtos__produto");
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoSelecionado.split(" - ")[0]} <span class="texto-azul">R$ ${(preco * quantidade).toFixed(2)}</span>`;

    // Adiciona o novo produto à lista de produtos do carrinho
    listaProdutos.appendChild(novoProduto);
}

// Função para limpar o carrinho
function limpar() {
    // Pega a área onde os produtos do carrinho aparecem e apaga tudo
    document.getElementById("lista-produtos").innerHTML = "";
    // Reseta o valor total para R$0
    document.getElementById("valor-total").textContent = "R$ 0.00";
}
