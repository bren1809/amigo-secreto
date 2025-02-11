let amigos = [];
let botao = document.querySelector('button');
let botaoSortear = document.querySelector('#botao-sortear');
let input = document.querySelector('input');
let listaDeAmigos = document.querySelector('#listaAmigos');


botao.addEventListener('click', function() {
    let textoInseridoPeloUsuario = input.value;
    if (textoInseridoPeloUsuario == '') {
       listaDeAmigos.textContent = 'Por favor, insira um nome';
    } else {
        amigos.push(textoInseridoPeloUsuario);
        console.log(amigos);
        input.value = '';
        atualizarListaDeAmigos();
        listaDeAmigos.textContentL = amigos;
    }
});

function atualizarListaDeAmigos() {
    listaDeAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        listaDeAmigos.appendChild(itemLista);
    }
}

botaoSortear.addEventListener('click', function() {
    if (amigos.length == 0) {
        listaDeAmigos.textContent = 'Por favor, insira um nome';
        return;
    } else {
        let numeroSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[numeroSorteado];
        resultado.textContent = 'O amigo sorteado foi: ' + amigoSorteado;
        amigos.splice(numeroSorteado, 1);
        atualizarListaDeAmigos();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        botao.click();
    }
});

function ocultarNomeSecreto() {
    let botaoOcultar = document.getElementById('botao-ocultar');
    document.getElementById('#botao-ocultar')
    listaDeAmigos.classList.toggle('oculto');
    resultado.classList.toggle('oculto');
    
    if (listaDeAmigos.classList.contains('oculto')) {
        botaoOcultar.textContent = 'Mostrar nomes';
    } else {
        botaoOcultar.textContent = 'Ocultar nomes';
    }
}