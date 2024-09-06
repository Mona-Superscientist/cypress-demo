'use strict'

const { actions } = require( '../../utils/cypress-wrappers/actions')
const { buttons } =  require('../../utils/cypress-wrappers/locators')

export const ContactListPage = {
    // #### Elements ####
    logoutButton: () => buttons.getById('logout'),
    addContactButton: () => buttons.getById('add-contact'),

    // #### Actions #####
    clickAddContact: () => {
        actions.click(ContactListPage.addContactButton)
        return ContactListPage
    }

    // ####  Assertions ####
}
