'use strict'

// Actions wrappers for cypress

/**
 * Navigates to a specified URL.
 * @param {string} url - The URL to visit.
 */
const visitUrl = (url) => {
    cy.visit(url)
}

/**
 * Clicks on an element found by the provided locator function.
 * @param {Function} getElement - Function to find the element.
 */
const clickElement = (getElement) => {
    getElement().should('exist').click()
}

/**
 * Types text into an element found by the provided locator function.
 * @param {Function} getElement - Function to find the element.
 * @param {string} text - The text to type.
 */
const typeText = (getElement, text) => {
    getElement().type(text)
}

/**
 * Clears the value of an element found by the provided locator function.
 * @param {Function} getElement - Function to find the element.
 */
const clearValue = (getElement) => {
    getElement().clear()
}

/**
 * Selects a value from a dropdown element found by the provided locator function.
 * @param {Function} getElement - Function to find the element.
 * @param {string} value - The value to select.
 */
const selectValue = (getElement, value) => {
    getElement().select(value)
}

/**
 * Focuses on an element found by the provided locator function.
 * @param {Function} getElement - Function to find the element.
 */
const focus = (getElement) => {
    getElement().focus()
}


/**
 * Waits for a specified amount of time or for a network request.
 * @param {number|string} input - Time in milliseconds or request alias.
 * @returns {Cypress.Chainable} - The Cypress chainable object.
 */
const wait = (input) => {
    return cy.wait(input);
}


export const actions = {
    click: (getElement) => clickElement(getElement),
    type: (getElement, text) => typeText(getElement, text),
    clearValue: (getElement) => clearValue(getElement),
    selectValue: (getElement, value) => selectValue(getElement, value),
    focus: (getElement) => focus(getElement),
    visit: (url) => visitUrl(url),
    wait: (input) =>  wait(input)
}
