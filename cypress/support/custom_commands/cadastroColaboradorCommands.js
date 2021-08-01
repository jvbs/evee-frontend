import core from '../page/core'

const faker = require('faker');
const faker_br = require('faker-br');
const Core = new core

let cpf = faker_br.br.cpf()
let nome_colaborador = faker.name.findName();
let email_colaborador = faker.internet.email();

let tela_cadastro_colaboradores = "Cadastro de Colaboradores"

Cypress.Commands.add("acessar_cadastro_colaboradores", () => {
    Core.click_element("cadastro_colaboradores_botao_menu")
    cy.contains(tela_cadastro_colaboradores)
})


Cypress.Commands.add("preencher_formulario_cadastro_colaborador", (typeDepart, typeCargo, typeUsuario) => {
   Core.fill_field_value("cadastro_colaborador_campo_nome", `${nome_colaborador}`)
   Core.fill_field_value("cadastro_colaborador_campo_cpf", `${cpf}`)
   Core.fill_field_value("cadastro_colaborador_campo_email", `${email_colaborador}`)
   Core.fill_field_value("cadastro_colaborador_campo_celular", `11999999999999`)
   Core.click_element("cadastro_colaborador_campo_departamento")  
   cy.contains(`${typeDepart}`).click();
   Core.click_element("cadastro_colaborador_campo_cargo")
   cy.contains(`${typeCargo}`).click();
   Core.click_element("cadastro_colaborador_campo_usuario")
   cy.get('.MuiMenu-list').contains(`${typeUsuario}`).click();
   Core.fill_field_value("cadastro_colaborador_campo_senha", `123`)
   Core.fill_field_value("cadastro_colaborador_campo_confirma_senha", `123`)
})

Cypress.Commands.add("finalizar_cadastro", () => {
   cy.contains('Salvar').click()
})

Cypress.Commands.add("validar_cadastro_efetuado", () => {
   cy.contains('Colaborador cadastrado com sucesso!')
})

Cypress.Commands.add("validar_colaborador_criado", () => {
   Core.click_element("colabores_botao_menu")
   cy.contains(nome_colaborador).click()
})
