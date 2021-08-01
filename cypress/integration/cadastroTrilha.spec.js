describe('Cadastrar Colaboradores', () => {

    beforeEach(() => {
        cy.acessar_aplicacao();
        const email = Cypress.config('email_mentor');
        const senha = Cypress.config('senha');

        cy.autenticacao(email, senha)
      });      

    // it.only('Cadastrar Trilha', () => {
    //     cy.acessar_trilha_departamento()
    //     cy.preencher_formulario_trilha(`Trilha - Básico II`, `Aprendizagem`, `30 dias`)
    //     cy.salvar()
    //     cy.validar_trilha_criada()
    //     cy.inativar_trilha()
    // })

    it.only('Tentativa de cadastro de trilha duplicada', () => {
        cy.acessar_trilha_departamento()
        cy.preencher_formulario_trilha(`Trilha - Básico I`, `Aprendizagem`, `30 dias`)
        cy.salvar()
        cy.contains("Trilha inválida")
    })

})