'use strict'

const { expect } = require("chai")
const { SignupPage } = require("../contactList/pages/signup")
const { generateUser } = require("../utils/dataGeneraor")
const { interceptUsers } = require('../utils/api-helpers/interceptor')
const { assertUrlEquals } = require("../utils/cypress-wrappers/assert")

describe('signup test suite', () =>  {
    let newUser

    beforeEach(async()  => {
        newUser = await generateUser()
        console.log('new user is', newUser)
    })

    describe('Happy Scenarios', () => {
        it('should send correct parameters to signup api', () => {
            interceptUsers()

            SignupPage
                .navigate()
                .insertFirstName(newUser.firstName)
                .insertLastName(newUser.lastName)
                .insertEmail(newUser.email)
                .insertPassword(newUser.password)
                .clickSubmit()
                .wait('@signup')
                .then((interception) => {
                    const requestBody = interception.request.body;

                    Object.keys(newUser).forEach((key) => {
                        expect(requestBody).to.have.property(key, newUser[key]);
                    });
                })
        })

        it('should redirect user to contacts screen after successful signup', () => {
            SignupPage
                .navigate()
                .insertFirstName(newUser.firstName)
                .insertLastName(newUser.lastName)
                .insertEmail(newUser.email)
                .insertPassword(newUser.password)
                .clickSubmit()

            assertUrlEquals(`${process.env.BaseURL}/contactList`)
        })
    })
})
