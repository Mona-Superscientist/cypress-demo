'use strict'

const req = require('../utils/api-helpers/request')

export const signup = async(user) => {
    console.log('user is', user)
    return await req.postRequest('/users', user)
}
