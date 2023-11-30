// TODO: PROJETO SOCIALIZE - OBJETIVO: AJUDAR PESSOAS COM FOBIA SOCIAL. Estruturar o projeto através de POO - Programação Orientada a Objetos e realizar os testes unitarios.

const Desafio = require("../desafio/desafio.js");
const Usuario = require( "../usuario/usuario.js");

class Aplicativo {
    static desafios = [];
    static usuarios = [];

    adicionarUsuario(nome) {
        const novoUsuario = new Usuario(nome);
        Aplicativo.usuarios.push(novoUsuario);
        return novoUsuario;
    }

    adicionarDesafio(nome, pontos, categoria) {
        const novoDesafio = new Desafio(nome, pontos, categoria);
        Aplicativo.desafios.push(novoDesafio);
        return novoDesafio;
    }
}

module.exports = Aplicativo;

