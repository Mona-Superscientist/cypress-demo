/**
 * Save a cookie using Cypress's cy.setCookie.
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {object} options - Optional settings for the cookie.
 */
export const saveCookie = (name, value, options = {}) => {
    cy.setCookie(name, value, options);
};

/**
 * Get a cookie value using Cypress's cy.getCookie.
 * @param {string} name - The name of the cookie.
 * @returns {Promise<string>} - A promise that resolves with the cookie value.
 */
export const getCookie = (name) => {
    return cy.getCookie(name).then((cookie) => {
        return cookie ? cookie.value : null;
    });
};

/**
 * Delete a cookie using Cypress's cy.clearCookie.
 * @param {string} name - The name of the cookie.
 */
export const deleteCookie = (name) => {
    cy.clearCookie(name);
};
