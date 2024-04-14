/* 
    Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML

        Passo 1 - pegar o botão mostrar no JS para poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão

        Passo 3 - adicionar a classe "ativo" nos projetos escondidos        

    Objetivo 2 - esconder o botão de mostrar mais

        passo 1 - pegar o botão e esconder ele         
*/


/*
// Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML

// Passo 1 - pegar o botão mostrar no JS para poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

// Passo 2 - identificar o clique no botão
botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

    // Objetivo 2 - esconder o botão de mostrar mais
    //passo 1 - pegar o botão e esconder ele  
    botaoMostrarProjetos.classList.add("remover");
});
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
