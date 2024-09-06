'use strict'

const _ = require('lodash')
const { faker } = require('@faker-js/faker/locale/en_US')

const { contact, user } = require('../samples')

const firstName = (gender) => faker.person.firstName(gender)
const lastName = (gender) =>  faker.person.lastName(gender)
const email = () => faker.internet.email()
const password = () => faker.internet.password()
const phone =  () => faker.phone.number()
const country = () => faker.location.country()
const city = () => faker.location.city()
const state = ()  => faker.location.state()
const addresss = () => faker.location.secondaryAddress()
const address2 = () =>  faker.location.secondaryAddress()
const birthdate = () => faker.date.birthdate()


export const generateUser = async(gender) =>  {
    const newUser = _.cloneDeep(user)
    await _.set(newUser, 'firstName', firstName(gender))
    await _.set(newUser, 'lastName', lastName(gender))
    await _.set(newUser, 'email', email())
    await _.set(newUser, 'password', password())

    return newUser
}

export const generateContact = async() => {
    const newContact = _.cloneDeep(contact)
    await _.set(newContact, 'firstname', firstName())
    await _.set(newContact, 'lastname', lastName())
    await _.set(newContact, 'email', email())
    await _.set(newContact, 'phone', phone())
    await _.set(newContact, 'birthdate', birthdate())
    return  newContact
}

export const generate =  {
    firstName,
    lastName,
    email,
    password,
    phone,
    country,
    city,
    state,
    addresss,
    address2,
    birthdate
}
