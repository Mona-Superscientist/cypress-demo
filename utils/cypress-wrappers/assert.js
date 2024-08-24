'use strict';

/**
 * Asserts that the URL includes the expected substring.
 * @param {string} substring - The substring expected to be in the URL.
 */
export const assertUrlIncludes = (substring) => {
    cy.url().should('include', substring);
};

/**
 * Asserts that the URL exactly matches the expected value.
 * @param {string} url - The expected full URL.
 */
export const assertUrlEquals = (url) => {
    cy.url().should('eq', url);
};

/**
 * Asserts that the URL matches the provided regular expression.
 * @param {RegExp} regex - The regular expression to match the URL against.
 */
export const assertUrlMatches = (regex) => {
    cy.url().should('match', regex);
};

/**
 * Asserts that the page title contains the expected text.
 * @param {string} title - The text expected to be in the page title.
 */
export const assertPageTitleIncludes = (title) => {
    cy.title().should('include', title);
};

/**
 * Asserts that the page title exactly matches the expected text.
 * @param {string} title - The expected page title.
 */
export const assertPageTitleEquals = (title) => {
    cy.title().should('eq', title);
};

/**
 * Asserts that an element exists on the page.
 * @param {Function} getElement - Function to find the element.
 */
export const assertElementExists = (getElement) => {
    getElement().should('exist');
};

/**
 * Asserts that an element contains the expected text.
 * @param {Function} getElement - Function to find the element.
 * @param {string} text - The expected text.
 */
export const assertElementContainsText = (getElement, text) => {
    getElement().should('contain.text', text);
};

/**
 * Asserts that an element has a specific value.
 * @param {Function} getElement - Function to find the element.
 * @param {string} value - The expected value.
 */
export const assertElementHasValue = (getElement, value) => {
    getElement().should('have.value', value);
};
