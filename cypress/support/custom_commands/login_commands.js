import core from '../page/core'

const faker = require('faker');
const Core = new core

let email_valido = Cypress.config('email');
let senha_valida = Cypress.config('senha');

let email_invalido = faker.internet.email();
let senha_invalida = faker.internet.password();
let tela_login = "Acesse sua conta"


Cypress.Commands.add("acessar_aplicacao", () => {
    const url = Cypress.config('baseUrl');
    cy.visit(url);
})

Cypress.Commands.add("acessar_login", () => {
    Core.click_element("home_botao_entrar")
    cy.contains(tela_login)
})

Cypress.Commands.add("autenticacao", (email, senha) => {
    cy.acessar_login();
    Core.fill_field_value("login_campo_email", `${email}`)
    Core.fill_field_value("login_campo_senha", `${senha}`)
    Core.click_element("login_botao_entrar")
})

Cypress.Commands.add("validar_area_logada", () => {
   cy.contains("Bem-vindo(a) ao EVEE!")
})

Cypress.Commands.add("validar_campos_obrigatorios", () => {
   cy.acessar_login();
   Core.click_element("login_botao_entrar")
   cy.contains(`O campo "E-mail" é obrigatório.`)
   cy.contains(`O campo "Senha" é obrigatório.`)
   cy.contains(tela_login)
})

Cypress.Commands.add("validar_email_invalido", () => {
    cy.autenticacao("teste@", "senha")  
    Core.click_element("login_botao_entrar")
    cy.contains(`Digite um e-mail válido`)
    cy.contains(tela_login)
 })

 Cypress.Commands.add("validar_senha_incorreta", () => {
    cy.autenticacao(`${email_valido}`, `${senha_invalida}`)
    Core.click_element("login_botao_entrar")
    cy.contains("Usuário ou senha inválidos.")
    cy.contains(tela_login)
 })

 Cypress.Commands.add("validar_email_nao_cadastrado", () => {
    cy.autenticacao(`${email_invalido}`, `${senha_valida}`)    
    Core.click_element("login_botao_entrar")
    cy.contains("Credenciais não encontradas. Você tem cadastro?")
    cy.contains(tela_login)
 })

 