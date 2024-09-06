'use strict'

const { actions } = require("../../utils/cypress-wrappers/actions")
const { buttons, inputs } = require("../../utils/cypress-wrappers/locators")

export const SignupPage = {
    // #### Elements  ####
    firstNameInput: () => inputs.getById('firstName'),
    lastNameInput: () => inputs.getById('lastName'),
    emailInput: () => inputs.getById('email'),
    passwordInput: () => inputs.getById('password'),
    submitButton: () => buttons.getById('submit'),
    cancelButton: () => buttons.getById('cancel'),

    // #### Actions  ####
    navigate: () => {
        actions.visit('/addUser')
        return SignupPage
    },

    insertFirstName: (firstName) => {
        actions.click(SignupPage.firstNameInput)
        actions.type(SignupPage.firstNameInput, firstName)
        return SignupPage
    },

    insertLastName: (lastName) => {
        actions.click(SignupPage.lastNameInput)
        actions.type(SignupPage.lastNameInput, lastName)
        return SignupPage
    },

    insertEmail: (email) => {
        actions.click(SignupPage.emailInput)
        actions.type(SignupPage.emailInput, email)
        return SignupPage
    },

    insertPassword: (password) => {
        actions.click(SignupPage.passwordInput)
        actions.type(SignupPage.passwordInput, password)
        return SignupPage
    },

    clickSubmit: () => {
        actions.click(SignupPage.submitButton)
        return SignupPage
    },

    clickCancel: () =>  {
        actions.click(SignupPage.cancelButton)
        return SignupPage
    },

    wait: (input) => {
        return actions.wait(input)
    }


    // #### Assertions  ####
}
