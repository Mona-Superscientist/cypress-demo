'use strict'

const { signup } = require('../endpoints/users')
const { generateUser } = require('../utils/dataGeneraor')
const { actions }  = require('../utils/cypress-wrappers/actions')
const { LoginPage } = require('../contactList/pages/login')
const { interceptLogin } = require('../utils/api-helpers/interceptor')
const { assertUrlEquals } = require('../utils/cypress-wrappers/assert')

describe.only('Login Testsuite', () => {
    let newUser

    beforeEach(async() => {
        newUser = await generateUser()

        cy.log('base url', Cypress.config('baseUrl'))
        await signup(newUser)
    })

    describe('Happy Scenarios', () => {
        it('should redirect user to contact list after successful login', () => {
            actions.visit('/')
            LoginPage
                .insertEmail(newUser.email)
                .insertPassword(newUser.password)
                .clickSubmit()

            assertUrlEquals(`${Cypress.config('baseUrl')}/contactList`)
        })

        it('should send correct params to login API', () => {
            interceptLogin()

            actions.visit('/')
            LoginPage
                .insertEmail(newUser.email)
                .insertPassword(newUser.password)
                .clickSubmit()
                .wait('@login')
                .then((interception) =>  {
                    const requestBody = interception.request.body;

                    Object.keys(requestBody).forEach((key) => {
                        expect(requestBody).to.have.property(key, newUser[key]);
                    });
                })
        })
    })
})
