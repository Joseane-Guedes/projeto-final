class Terapeuta {
    constructor(nome, especialidade, contato) {
        this.nome = nome;
        this.especialidade = especialidade;
        this.contato = {telefone: contato.telefone, email: contato.email};
    }
}

module.exports = Terapeuta;