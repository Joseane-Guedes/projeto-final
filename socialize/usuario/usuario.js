const Aplicativo = require("../aplicativo/aplicativo.js");

class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.pontos = 0;
        this.medalhas = [];
        this.desafiosConcluidos = [];
        this.desafios = {diarios: [], semanais: [], mensais: []};

    }

    ganharPontos(pontos) {
        this.pontos += pontos;
        // Lógica para verificar se o usuário ganhou medalhas
    }

    completarDesafio(desafio) {
        this.desafiosConcluidos.push(desafio);
        this.ganharPontos(desafio.pontos)
        // Lógica para atualizar pontos e verificar conquistas
    }

    atualizarDesafios() {
        //Lógica pra checar se já fazem 24 horas que os desafios diarios foram atualizados
        this.desafios.diarios = this.gerarDesafios(3, "diario");
        
        //Lógica pra checar se já fazem 7 dias que os desafios semanais foram atualizados
        this.desafios.semanais = this.gerarDesafios(3, "semanal");

        //Lógica pra checar se já fazem 30 dias que os desafios mensais foram atualizados
        this.desafios.mensais = this.gerarDesafios(3, "mensal");
    }

    gerarDesafios(quantidade, categoria) {
        let desafiosPossiveis = Aplicativo.desafios.filter(desafio => desafio.categoria === categoria);
        let desafiosSelecionados = [];

        for(let index = 0; index < quantidade; index++) {
            const indexAleatorio = Math.floor(Math.random() * desafiosPossiveis.length);
            const desafioSelecionado = desafiosPossiveis[indexAleatorio];
            desafiosSelecionados.push(desafioSelecionado);
            desafiosPossiveis.splice(indexAleatorio, 1);
        }

        return desafiosSelecionados;
    }
}

module.exports = Usuario;