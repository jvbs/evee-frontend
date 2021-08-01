import core from '../page/core'

const faker = require('faker');
const faker_br = require('faker-br');
const Core = new core

let email_valido = Cypress.config('email');
let senha_valida = Cypress.config('senha');

let nome_empresa = faker.company.companyName();
let cnpj = faker_br.br.cnpj()
let nome_solicitante = faker.name.findName();
let email_solicitante = faker.internet.email();
let telefone_solicitante = "11999999999"
let senha_solicitante = faker.internet.password();

let tela_demonstracao = "Solicitar demonstração"

Cypress.Commands.add("acessar_solicitar_demo", () => {
    Core.click_element("cadastro_empresa_botao_solicitacao")
    cy.contains(tela_demonstracao)
})

Cypress.Commands.add("preencher_formulario_solicitacao", () => {
   Core.fill_field_value("cadastro_empresa_campo_empresa", `${nome_empresa}`)
   Core.fill_field_value("cadastro_empresa_campo_cnpj", `${cnpj}`)
   Core.fill_field_value("cadastro_empresa_campo_solicitante_nome", `${nome_solicitante}`)
   Core.fill_field_value("cadastro_empresa_campo_solicitante_email", `${email_solicitante}`)
   Core.fill_field_value("cadastro_empresa_campo_solicitante_celular", `${telefone_solicitante}`)
   Core.fill_field_value("cadastro_empresa_campo_solicitante_senha", `${senha_solicitante}`)
})

Cypress.Commands.add("finalizar_solicitacao", () => {
   cy.contains('Finalizar').click()
})

Cypress.Commands.add("solicitacao_efetuada", () => {
   cy.contains('Demonstração solicitada com sucesso!')
})

Cypress.Commands.add("alerta_solicitacao_duplicada", () => {
   cy.contains('Demonstração já solicitada, empresa ou usuário já cadastrados.')
})

Cypress.Commands.add("inserir_cnpj_invalido", () => {
   cy.get(`[data-testid=fieldCNPJ]`).clear()
   cy.get(`[data-testid=fieldEmailSolicitante]`).clear()
   Core.fill_field_value("cadastro_empresa_campo_cnpj", `01795104000170`)
   Core.fill_field_value("cadastro_empresa_campo_solicitante_email", `cypress@teste.com`)
   cy.finalizar_solicitacao()
   cy.contains('CNPJ inválido, verifique e tente novamente.')
})


Cypress.Commands.add("solicitacao_validar_alerta_campos_obrigatorios", () => {
   cy.contains('Finalizar').click()
   cy.contains('O campo "Empresa" é obrigatório.')
   cy.contains('O campo "CNPJ" é obrigatório.')
   cy.contains('O campo "Nome" é obrigatório.')
   cy.contains('O campo "E-mail" é obrigatório.')
   cy.contains('O campo "Celular" é obrigatório.')
   cy.contains('O campo "Senha" é obrigatório.')
   cy.contains(tela_demonstracao)
})