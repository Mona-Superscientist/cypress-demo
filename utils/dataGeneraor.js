'use strict'

const _ = require('lodash')
const { faker } = require('@faker-js/faker/locale/en_US')

const user = require('../samples/user')

const firstName = (gender) => faker.person.firstName(gender)
const lastName = (gender) =>  faker.person.lastName(gender)
const email = () => faker.internet.email()
const password = () => faker.internet.password()

export const generateUser = async(gender) =>  {
    const newUser = _.cloneDeep(user)
    await _.set(newUser, 'firstName', firstName(gender))
    await _.set(newUser, 'lastName', lastName(gender))
    await _.set(newUser, 'email', email())
    await _.set(newUser, 'password', password())

    return newUser
}
