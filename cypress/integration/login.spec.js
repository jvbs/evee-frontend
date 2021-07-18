describe('Login', () => {

    beforeEach(() => {
        cy.acessar_aplicacao();
      });      

    it('Login com sucesso', () => {
        const email = Cypress.config('email');
        const senha = Cypress.config('senha');

        cy.autenticacao(email, senha)
        cy.validar_area_logada()
    })

    it('Validar alerta de campos obrigatórios', () => {
        cy.validar_campos_obrigatorios()
    })

    it('Validar alerta de email invalido', () => {
        cy.validar_email_invalido()
    })

    it('Tentativa de login com email nao cadastrado', () => {
        cy.validar_email_nao_cadastrado()
    })

    it('Tentativa de login com email cadastrado e senha incorreta', () => {
        cy.validar_senha_incorreta()
    })
})