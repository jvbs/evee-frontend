/// <reference types="cypress"/>

import elements from '../elements/element'
const EL = new elements

class core {

    click_element(nome_elemento){
        cy.get(EL[nome_elemento]).click()
    }
    fill_field_value(nome_elemento, massa_dado){
        cy.get(EL[nome_elemento]).type(massa_dado)
    }
    validate_alert(nome_elemento, massa_dado){
        cy.get(EL[nome_elemento]).contains(massa_dado)
    }
    select_element(nome_elemento, massa_dado){
        cy.get(EL[nome_elemento]).select(massa_dado)
    }
    
}
export default core;