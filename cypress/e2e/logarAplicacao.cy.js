/// <reference types="cypress" />


import logarAplicacacoPageObjects from "../support/pageObjects/logarAplicacao.pageObjects";

describe('Realizar login', () => {

    beforeEach(() => {
        cy.visit('/')
    });
    
    it('Logar na aplicação', () => {
        logarAplicacacoPageObjects.inputUserName("standard_user")
        logarAplicacacoPageObjects.inputSenha("secret_sauce")
        logarAplicacacoPageObjects.logarApp()
    
    });
})