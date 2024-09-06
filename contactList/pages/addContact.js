'use strict'

const { actions } = require( '../../utils/cypress-wrappers/actions')
const { buttons, inputs } =  require('../../utils/cypress-wrappers/locators')

export const AddContactPage = {
    // #### Elements ####
    firstnameInput: () => inputs.getById('firstName'),
    lastnameInput: () => inputs.getById('lastName'),
    birthdateInput: () => inputs.getById('birthdate'),
    emailInput: () => inputs.getById('email'),
    phoneInput: () => inputs.getById('phone'),
    address1Input: () => inputs.getById('street1'),
    address2Input: () => inputs.getById('street2'),
    cityInput: () => inputs.getById('city'),
    stateInput: () => inputs.getById('stateProvince'),
    postalCodeInput: () => inputs.getById('postalcode'),
    countryInput: () => inputs.getById('country'),
    submitButton: () => buttons.getById('submit'),
    cancelButton: () =>  buttons.getById('cancel'),

    // #### Actions ####
    insertFirstName: (firstName) => {
        actions.click(AddContactPage.firstnameInput)
        actions.type(AddContactPage.firstnameInput, firstName)
        return AddContactPage
    },

     insertLastName: (lastName) => {
        actions.click(AddContactPage.lastnameInput)
        actions.type(AddContactPage.lastnameInput, lastName)
        return AddContactPage
    },

    insertDateOfBirth: (date) => {
        actions.click(AddContactPage.birthdateInput)
        actions.type(AddContactPage.birthdateInput, date)
        return AddContactPage
    },

    insertEmail: (email) =>  {
        actions.click(AddContactPage.emailInput)
        actions.type(AddContactPage.emailInput, email)
        return AddContactPage
    },

    insertPhone: (phone) => {
        actions.click(AddContactPage.phoneInput)
        actions.type(AddContactPage.phoneInput, phone)
        return AddContactPage
    },

    insertAddress1: (address) => {
        actions.click(AddContactPage.address1Input)
        actions.type(AddContactPage.address1Input, address)
        return AddContactPage
    },

    insertAddress2: (address) => {
        actions.click(AddContactPage.address2Input)
        actions.type(AddContactPage.address2Input, address)
        return address
    },

    insertCity: (city) => {
        actions.click(AddContactPage.cityInput)
        actions.type(AddContactPage.cityInput, city)
        return AddContactPage
    },

    insertState: (state) => {
        actions.click(AddContactPage.stateInput)
        actions.type(AddContactPage.stateInput, state)
        return AddContactPage
    },

    insertPostalCode: (postalcode) => {
        actions.click(AddContactPage.postalCodeInput)
        actions.type(AddContactPage.postalCodeInput, postalcode)
        return AddContactPage
    },

    insertCountry: (country) => {
        actions.click(AddContactPage.countryInput)
        actions.type(AddContactPage.countryInput, country)
        return AddContactPage
    },

    clickSubmit: () => {
        actions.click(AddContactPage.submitButton)
        return AddContactPage
    },

    clickCancel: () => {
        actions.click(AddContactPage.cancelButton)
        return AddContactPage
    },

    wait: (input) => {
        return actions.wait(input)
    },

    navigate: () => {
        actions.visit('/addContact')
        return AddContactPage
    }

    // #### Assertions

}
