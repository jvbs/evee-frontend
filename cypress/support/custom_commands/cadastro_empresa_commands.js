import core from '../page/core'

const faker = require('faker');
const Core = new core

let email = faker.internet.email();
let senha = faker.internet.password();
let tela_cadastro_empresa = "Solicitar demonstração"


Cypress.Commands.add("acessar_solicitar_demo", () => {
    Core.click_element("home_botao_cadastrar")
    cy.contains(tela_cadastro_empresa)
})

Cypress.Commands.add("preencher_formulario_demo", () => {
   Core.click_element("home_botao_cadastrar")
   cy.contains(tela_cadastro_empresa)
})