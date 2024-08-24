'use strict'

const { actions } =  require('../../utils/cypress-wrappers/actions')
const { inputs, buttons } = require('../../utils/cypress-wrappers/locators')

export const LoginPage = {
    // #### Elements  ####
    emailInput: () => inputs.getById('email'),
    passwordInput: () =>  inputs.getById('password'),
    submitButton: () =>  buttons.getById('submit'),
    errorSpan: () => spans.getById('error'),
    signupButton: () => buttons.getById('signup'),

    // #### Actions  ####
    clickSignup: () =>  {
        actions.click(LoginPage.signupButton)
        return LoginPage
    },

    insertEmail: (email) => {
        actions.click(LoginPage.emailInput)
        actions.type(LoginPage.emailInput, email)
        return LoginPage
    },

    insertPassword: (password) => {
        actions.click(LoginPage.passwordInput)
        actions.type(LoginPage.passwordInput, password)
        return LoginPage
    },

    clickSubmit: () => {
        actions.click(LoginPage.submitButton)
        return LoginPage
    },

    wait: (input) => {
        return actions.wait(input)
    }


    // #### Assertions  ####
}
