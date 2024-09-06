'use strict'

const req = require('../utils/api-helpers/request')

export const signup = (user) => {
    console.log('user is', user)
    return req.postRequest('/users', user)
}

export const login = async(email, password) => {
    const response = await req.postRequest('/users/login', {
        email: email,
        password: password
    })

    console.log('Actual Response (Async/Await):', response)
    return response
}
