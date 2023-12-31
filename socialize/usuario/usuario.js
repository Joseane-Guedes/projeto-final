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
        this.desafios.diarios = this.sortearDesafios(3, "diario");
        
        //Lógica pra checar se já fazem 7 dias que os desafios semanais foram atualizados
        this.desafios.semanais = this.sortearDesafios(3, "semanal");

        //Lógica pra checar se já fazem 30 dias que os desafios mensais foram atualizados
        this.desafios.mensais = this.sortearDesafios(3, "mensal");
    }

    sortearDesafios(quantidade, categoria) {
        let desafiosPossiveis = Aplicativo.desafios.filter(desafio => desafio.categoria === categoria);
        let desafiosSorteados = [];

        for(let index = 0; index < quantidade; index++) {
            if(desafiosPossiveis.length === 0) break;
            const indexAleatorio = Math.floor(Math.random() * desafiosPossiveis.length);
            const desafioSorteado = desafiosPossiveis[indexAleatorio];
            desafiosSorteados.push(desafioSorteado);
            desafiosPossiveis.splice(indexAleatorio, 1);
        }
        return desafiosSorteados;
    }
}

module.exports = Usuario;