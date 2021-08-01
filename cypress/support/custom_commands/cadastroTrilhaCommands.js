import core from '../page/core'

const faker = require('faker');
const faker_br = require('faker-br');
const Core = new core

let tela_trilha = "Trilhas - Gerenciamento de Atividades & Capacitação Interna"

Cypress.Commands.add("acessar_trilha_departamento", () => {
    Core.click_element("trilha_botao_menu")
    cy.contains(tela_trilha)
})

Cypress.Commands.add("preencher_formulario_trilha", (typeNivel, typePrograma, typePrazo ) => {
   cy.contains(`Cadastrar Trilha`).click()
   Core.click_element("trilha_campo_nivel")  
   cy.contains(`${typeNivel}`).click();
   Core.click_element("trilha_campo_programa")
   cy.contains(`${typePrograma}`).click(); 
   Core.fill_field_value("trilha_campo_nome", `${faker.name.title()}`)
   Core.fill_field_value("trilha_campo_descricao", `${faker.lorem.sentence()}`)
   Core.click_element("trilha_campo_prazo")
   cy.contains(`${typePrazo}`).click();
})

Cypress.Commands.add("salvar", () => {
   cy.contains('Salvar').click()
})

Cypress.Commands.add("validar_trilha_criada", () => {
   cy.contains('Trilha cadastrada com sucesso!')
})

// Cypress.Commands.add("inativar_trilha", () => {
//    Core.click_element("trilha_botao_menu")
//    cy.contains(`Programa de Aprendizagem`).click()
//    cy.contains(`Trilha - Básico II`).click()
// })