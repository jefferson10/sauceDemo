const loginElements = require('../elements/logarAplicacao.elements').LOGINFORM

//Criaçao do objeto 
class logarAplicacao{

    inputUserName(dado){
        cy.get(loginElements.inputUserName).type(dado)
    }

    inputSenha(dado){
        cy.get(loginElements.inputSenha).type(dado)
    }

    logarApp(){
        cy.get(loginElements.btLogin).click()
    }

}

export default new logarAplicacao();