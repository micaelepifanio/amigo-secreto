let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;

    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
    } else if (amigos.includes(nomeAmigo)) {
        alert('Esse nome já foi adicionado!');
    } else {
        amigos.push(nomeAmigo); // Adiciona o nome ao array
    }
    console.log(amigos); // Exibe no console os amigos adicionados
    atualizarLista(); // Atualiza a lista no HTML
    limparCampo();
}

function limparCampo() {
    let limparNome = document.querySelector('input');
    limparNome.value = ''; // Limpa o campo de entrada
    limparNome.focus(); // Coloca o foco de volta no campo de entrada
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos'); // Seleciona a <ul>
    lista.innerHTML = ''; // Limpa os itens existentes na lista

    //Percorre o array de amigos e cria um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li'); // Cria um novo <li>
        item.textContent = amigos[i]; // Define o texto do <li> como o nome do amigo
        lista.appendChild(item); // Adiciona o <li> à <ul>
    }
}

function sortearAmigo(array) {
    if (amigos.length != 0) {
        let indiceAmigo = Math.floor(Math.random() * amigos.length);
        let nomeEscolhido = document.getElementById('resultado');
        nomeEscolhido.innerHTML = '<span style="color: black;">O amigo sorteado foi: </span>' + amigos[indiceAmigo];
        
    } else {
        alert('Não há nomes para sortear.');
    }
   
}

// Seleciona o campo de entrada
const campoNome = document.getElementById('amigo');

// Adiciona um ouvinte de eventos 'keypress' ao campo de entrada
campoNome.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});