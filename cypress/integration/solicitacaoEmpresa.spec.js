describe('Cadastro Empresa', () => {

    beforeEach(() => {
        cy.acessar_aplicacao();
      });      

    it('Nova Empresa - Solicitar Demonstracao', () => {
        cy.acessar_solicitar_demo()
        cy.preencher_formulario_solicitacao()
    })

    // it('Validar alerta de campos obrigatórios', () => {
    //     cy.validar_campos_obrigatorios()
    // })

    // it('Validar alerta de email invalido', () => {
    //     cy.validar_email_invalido()
    // })

    // it('Tentativa de login com email nao cadastrado', () => {
    //     cy.validar_email_nao_cadastrado()
    // })

    // it('Tentativa de login com email cadastrado e senha incorreta', () => {
    //     cy.validar_senha_incorreta()
    // })
})