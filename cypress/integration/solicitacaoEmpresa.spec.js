describe('Cadastro Empresa', () => {

    beforeEach(() => {
        cy.acessar_aplicacao();
        cy.acessar_solicitar_demo()
      });      

    it('Solicitar Demonstracao', () => {
        cy.preencher_formulario_solicitacao()
        cy.finalizar_solicitacao()
        cy.solicitacao_efetuada()
        cy.validar_area_logada()
    })

    it('Validar alerta de campos obrigatórios', () => {
        cy.finalizar_solicitacao()
        cy.solicitacao_validar_alerta_campos_obrigatorios()
    })
    it('Tentativa de solicitacao duplicada', () => {
        cy.preencher_formulario_solicitacao()
        cy.finalizar_solicitacao()
        cy.alerta_solicitacao_duplicada()
    })

    it('Validar alerta de CNPJ invalido', () => {
        cy.preencher_formulario_solicitacao()
        cy.inserir_cnpj_invalido()
    })
})