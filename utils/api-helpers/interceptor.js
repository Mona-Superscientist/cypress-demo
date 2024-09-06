'use strict'

const intercept = ({ method, url, alias, mockingSample }) => {
    mockingSample?
        cy.intercept(method, url, (req) => {
            req.reply(mockingSample)
        }).as(alias)
        : cy.intercept(method, url).as(alias)
}

export const interceptUsers = (mockingSample) => {
    intercept({
        method: 'POST',
        url: '**/users',
        alias: 'signup',
        mockingSample
    })
}

export const interceptLogin = (mockingSample) => {
    intercept({
        method: 'POST',
        url: '**/users/login',
        alias: 'login',
        mockingSample
    })
}

export const interceptCreateContact = (mockingSample) => {
    intercept({
        method: 'POST',
        url: '**/contacts',
        alias: 'create-contact',
        mockingSample
    })
}
