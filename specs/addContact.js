'use strict'

const { generateUser, generateContact } = require('../utils/dataGeneraor')
const { signup, login } = require('../endpoints/users')
const { AddContactPage } = require('../contactList/pages/addContact')
const { deleteCookie }  =  require('../utils/cypress-wrappers/cookies')
const { interceptCreateContact } = require('../utils/api-helpers/interceptor')
const { assertUrlEquals } = require('../utils/cypress-wrappers/assert')

describe('Add contacts testsuite', () => {
    let newUser
    let newContact

    const signupAndLogin = async(user) => {
        await Promise.all([
            signup(user),
            login(user.email, user.password)
        ]);
    }

    describe('Happy Scenarios', () => {
        beforeEach(async()  => {
            /*
                1. Generate a new user and a new contact to be used in test
                2. Register the new user through API.
                3. Login with the new user
                4. Save login token in cookies
            */

            newUser = await generateUser()
            newContact = await generateContact()

            await signupAndLogin(newUser)
        })

        afterEach(() => {
            // Clean up - delete token from cookies
            deleteCookie('token')
        })

        it('should redirect to contact list after saving a new contact', () => {
            AddContactPage
                .navigate()
                .insertFirstName(newContact.firstname)
                .insertLastName(newContact.lastname)
                .insertEmail(newContact.email)
                .insertPhone('012733723')
                .clickSubmit()

            assertUrlEquals(`${Cypress.config('baseUrl')}/contactList`)
        }),

        it.skip('should send contact details correctly to backend while saving a new contact', () => {
            interceptCreateContact()

            AddContactPage
                .navigate()
                .insertFirstName(newContact.firstname)
                .insertLastName(newContact.lastname)
                .insertEmail(newContact.email)
                .insertPhone('012733723')
                .clickSubmit()
                .wait('@create-contact')
                .then((interception) => {
                    console.log('interception',JSON.stringify(interception))
                    cy.log('interception', JSON.stringify(interception))

                    const requestBody = interception.Request.body;

                    Object.keys(requestBody).forEach((key) => {
                        expect(requestBody).to.have.property(key, newUser[key]);
                    });
                })
        })
    })

    describe('Validations', () => {

    })
})
