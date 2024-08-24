// utils/api-helpers/request.js
const baseURL = Cypress.config('baseUrl'); // Ensure this is set in your Cypress environment variables

const postRequest = (url, data, headers = {}) => {
  return cy.request({
    method: 'POST',
    url: `${baseURL}${url}`,
    body: data,
    headers,
  });
};

const getRequest = (url, headers = {}) => {
  return cy.request({
    method: 'GET',
    url: `${baseURL}${url}`,
    headers,
  });
};

const putRequest = (url, data, headers = {}) => {
  return cy.request({
    method: 'PUT',
    url: `${baseURL}${url}`,
    body: data,
    headers,
  });
};

const deleteRequest = (url, headers = {}) => {
  return cy.request({
    method: 'DELETE',
    url: `${baseURL}${url}`,
    headers,
  });
};

module.exports = {
  postRequest,
  getRequest,
  putRequest,
  deleteRequest,
};
