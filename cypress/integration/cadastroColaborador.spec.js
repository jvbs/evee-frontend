describe('Cadastrar Colaboradores', () => {

    beforeEach(() => {
        cy.acessar_aplicacao();
        const email = Cypress.config('email');
        const senha = Cypress.config('senha');

        cy.autenticacao(email, senha)
      });      

    it.only('Cadastar Colaborador', () => {
        cy.acessar_cadastro_colaboradores()
        cy.preencher_formulario_cadastro_colaborador(`Comercial`, `Gerente`, `Mentor`)
        cy.finalizar_cadastro()
        cy.validar_cadastro_efetuado()
        // cy.validar_colaborador_criado()
    })

    it('Tentativa de Cadastro de Mentorado diferente de Usuario Aprendiz e Estagiario', () => {
        cy.acessar_cadastro_colaboradores()
        cy.preencher_formulario_cadastro_colaborador(`Comercial`, `Gerente`, `Mentorado`)
        cy.finalizar_cadastro()
        cy.contains(`Ops! O cargo "Gerente" não pode ser cadastrado como mentorado.`)
    })

    it('Tentativa de Cadastro de Mentor com Usuario Aprendiz Estagiario', () => {
        cy.acessar_cadastro_colaboradores()
        cy.preencher_formulario_cadastro_colaborador(`Comercial`, `Aprendiz`, `Mentor`)
        cy.finalizar_cadastro()
        cy.contains("Ops! Aprendiz e Estagiários podem apenas ser cadastrados como mentorados.")
    })

})