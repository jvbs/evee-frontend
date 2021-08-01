describe('Cadastrar Colaboradores', () => {

    beforeEach(() => {
        cy.acessar_aplicacao();
        const email = Cypress.config('email');
        const senha = Cypress.config('senha');

        cy.autenticacao(email, senha)
      });      

    it('Cadastar Colaborador', () => {
        cy.acessar_cadastro_colaboradores()
        cy.preencher_formulario_cadastro_colaborador(`Comercial`, `Gerente`, `Mentor`)
        cy.finalizar_cadastro()
        cy.validar_cadastro_efetuado()
        cy.validar_colaborador_criado()
    })

})