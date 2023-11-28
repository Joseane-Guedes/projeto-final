// TODO: PROJETO SOCIALIZE - OBJETIVO: AJUDAR PESSOAS COM FOBIA SOCIAL. Estruturar o projeto através de POO - Programação Orientada a Objetos e realizar os testes unitarios.

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

class Desafio {
    constructor(nome, pontos, categoria) {
        this.nome = nome;
        this.pontos = pontos;
        this.categoria = categoria;
    }
}

class Medalha {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}

class Feedback {
    constructor(usuario, desafio, comentario){
        this.usuario = usuario;
        this.desafio = desafio;
        this.comentario = comentario;
    }
}

class Aviso {
    constructor(titulo, mensagem, data) {
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.data = data;
    }
}

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

    iniciarDesafio(usuario, desafio) {
        usuario.completarDesafio(desafio);
        usuario.ganharPontos(desafio.pontos);
    }
}

class Terapeuta {
    constructor(nome, especialidade, contato) {
        this.nome = nome;
        this.especialidade = especialidade;
        this.contato = {telefone: contato.telefone, email: contato.email};
    }
}

class RelatorioProgresso {
    constructor(usuario, data, pontuacao) {
        this.usuario = usuario;
        this.data = data;
        this.pontuacao = pontuacao;
    }
}

// Criar uma instância do aplicativo
const aplicativo = new Aplicativo();

// Adicionar usuários
const usuario1 = aplicativo.adicionarUsuario("Josie");
const usuario2 = aplicativo.adicionarUsuario("Maria");

// Adicionar desafios
const desafio1 = aplicativo.adicionarDesafio("Conheça uma pessoa nova", 30, "semanal");
const desafio2 = aplicativo.adicionarDesafio("Dê sua opinião durante uma conversa", 10, "diario");
const desafio3 = aplicativo.adicionarDesafio("Participar de um evento social", 50, "mensal");
const desafio4 = aplicativo.adicionarDesafio("Fazer uma ligação telefônica", 15, "diario");
const desafio5 = aplicativo.adicionarDesafio("Iniciar uma conversa com um estranho", 20, "semanal");
const desafio6 = aplicativo.adicionarDesafio("Participar de uma reunião de grupo", 25, "mensal");
const desafio7 = aplicativo.adicionarDesafio("Fazer uma apresentação em público", 40, "mensal");
const desafio8 = aplicativo.adicionarDesafio("Conversar com um colega de trabalho", 10, "diario");
const desafio9 = aplicativo.adicionarDesafio("Participar de um evento esportivo", 30, "mensal");
const desafio10 = aplicativo.adicionarDesafio("Iniciar uma conversa em um ambiente social", 20, "semanal");
const desafio11 = aplicativo.adicionarDesafio("Fazer uma pergunta em uma aula", 15, "diario");
const desafio12 = aplicativo.adicionarDesafio("Participar de um encontro com amigos", 25, "mensal");
const desafio13 = aplicativo.adicionarDesafio("Conversar com um desconhecido em um transporte público", 15, "diario");
const desafio14 = aplicativo.adicionarDesafio("Participar de uma atividade em grupo", 20, "semanal");
const desafio15 = aplicativo.adicionarDesafio("Fazer uma apresentação de trabalho", 30, "mensal");
const desafio16 = aplicativo.adicionarDesafio("Conversar com um vizinho", 10, "diario");
const desafio17 = aplicativo.adicionarDesafio("Participar de uma festa", 40, "mensal");
const desafio18 = aplicativo.adicionarDesafio("Iniciar uma conversa com um colega de classe", 20, "semanal");
const desafio19 = aplicativo.adicionarDesafio("Fazer uma pergunta em uma reunião", 15, "diario");
const desafio20 = aplicativo.adicionarDesafio("Participar de um evento cultural", 30, "mensal");



// Iniciar desafios para usuários
usuario1.atualizarDesafios();

// Verificar resultados
console.log(usuario1.desafios);
console.log(usuario2);
