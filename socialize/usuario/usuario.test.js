const Usuario = require("./usuario.js");
const Aplicativo = require("../aplicativo/aplicativo.js");

describe("Testes para a classe Usuario", () => {
    let usuario;
    let aplicativo;

    aplicativo = new Aplicativo();
    aplicativo.adicionarDesafio("Converse com uma amizade", 10, "diario");
    
    beforeEach(() => {
        usuario = new Usuario("Stella Luna");
    });

    test("Deve adicionar pontos ao usuário", () => {
        usuario.ganharPontos(100);
        expect(usuario.pontos).toBe(100);
    });

    test("Deve atualizar a lista de desafios do usuário", () => {
        usuario.atualizarDesafios();
        expect(usuario.desafios.diarios.length).toBe(1);
        expect(usuario.desafios.semanais.length).toBe(0);
        expect(usuario.desafios.mensais.length).toBe(0);
    });

    test("Deve completar um desafio", () => {
        usuario.atualizarDesafios();
        let desafio = usuario.desafios.diarios[0];

        usuario.completarDesafio(desafio);
        expect(usuario.desafiosConcluidos.length).toBe(1);
        expect(usuario.desafiosConcluidos).toContain(desafio);
    });

});
