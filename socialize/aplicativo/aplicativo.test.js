const Aplicativo = require('./aplicativo');
const Usuario = require('../usuario/usuario');
const Desafio = require('../desafio/desafio');

describe('Aplicativo', () => {
    let aplicativo;

    beforeEach(() => {
        aplicativo = new Aplicativo();
    });

    describe('adicionarUsuario', () => {
        test('Deve adicionar um novo usuário ao aplicativo', () => {
            aplicativo.adicionarUsuario('Stella Luna');
            expect(Aplicativo.usuarios.length).toBe(1);
        });

        test('Deve criar uma instância de Usuario ao adicionar usuário', () => {
            const novoUsuario = aplicativo.adicionarUsuario('Josie');
            expect(novoUsuario).toBeInstanceOf(Usuario);
        });
    });

    describe('adicionarDesafio', () => {
        test('Deve adicionar um novo desafio à lista de desafios do aplicativo', () => {
            aplicativo.adicionarDesafio('Visite uma amizade', 20, 'Semanal');
            expect(Aplicativo.desafios.length).toBe(1);
            expect(Aplicativo.desafios[0].nome).toBe('Visite uma amizade');
            expect(Aplicativo.desafios[0].pontos).toBe(20);
            expect(Aplicativo.desafios[0].categoria).toBe('Semanal');
        });

        test('Deve criar uma instância de Desafio ao adicionar desafio', () => {
            const novoDesafio = aplicativo.adicionarDesafio('Faça uma nova amizade', 30, 'semanal');
            expect(novoDesafio).toBeInstanceOf(Desafio);
        });
    });

});
