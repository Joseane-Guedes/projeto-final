// TODO: PROJETO SOCIALIZE - OBJETIVO: AJUDAR PESSOAS COM FOBIA SOCIAL. Estruturar o projeto através de POO - Programação Orientada a Objetos e realizar os testes unitarios.

class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.pontos = 0;
        this.medalhas = [];
        this.desafiosConcluidos = [];
    }

    ganharPontos(pontos) {
        this.pontos += pontos;
        // Lógica para verificar se o usuário ganhou medalhas
    }

    completarDesafio(desafio) {
        this.desafiosConcluidos.push(desafio);
        // Lógica para atualizar pontos e verificar conquistas
    }
}

class Desafio {
    constructor(nome, pontos) {
        this.nome = nome;
        this.pontos = pontos;
    }
}

class Aplicativo {
    constructor() {
        this.usuarios = [];
        this.desafios = [];
    }

    adicionarUsuario(nome) {
        const novoUsuario = new Usuario(nome);
        this.usuarios.push(novoUsuario);
        return novoUsuario;
    }

    adicionarDesafio(nome, pontos) {
        const novoDesafio = new Desafio(nome, pontos);
        this.desafios.push(novoDesafio);
        return novoDesafio;
    }

    iniciarDesafio(usuario, desafio) {
        usuario.completarDesafio(desafio);
        usuario.ganharPontos(desafio.pontos);
    }
}

// Criar uma instância do aplicativo
const aplicativo = new Aplicativo();

// Adicionar usuários
const usuario1 = aplicativo.adicionarUsuario("Josie");
const usuario2 = aplicativo.adicionarUsuario("Maria");

// Adicionar desafios
const desafio1 = aplicativo.adicionarDesafio("Conheça uma pessoa nova", 10);
const desafio2 = aplicativo.adicionarDesafio("Dê sua opinião durante uma conversa", 15);

// Iniciar desafios para usuários
aplicativo.iniciarDesafio(usuario1, desafio1);
aplicativo.iniciarDesafio(usuario2, desafio2);

// Verificar resultados
console.log(usuario1);
console.log(usuario2);
