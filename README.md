
# cypress-demo

This project serves as a well-structured example for implementing end-to-end (E2E) testing with Cypress. It leverages a functional programming approach combined with the Page Object Model (POM) for a robust and maintainable test suite.

**Target Application:**

- This demo focuses on testing the [Contact List App](https://thinking-tester-contact-list.herokuapp.com/).

## 📚Project Structure

The project adheres to a clear and organized structure, facilitating efficient testing and maintenance:

### contactList ( Components & Pages)

This directory houses files representing your frontend components and pages. Each file is dedicated to a specific page or component and encapsulates:

- Locators: Efficiently identify UI elements using robust selectors.
- Actions: Define methods to interact with UI elements, simulating user actions.
- Assertions: Verify expected outcomes after performing actions.

**components ( Shared Components)**

- Create helpers for reusable UI elements that appear across multiple pages (e.g., header, footer, navigation).

**pages ( Specific Pages)**

- Implement helpers for various application pages (e.g., signup, login, contact list, add contact).

### endpoints ( API Interactions)

- This folder contains helpers to interact with your application's APIs for:
  - Data generation or seeding: Generate test data using API calls instead of solely relying on UI interactions.
  - Improved test efficiency: Reduce test execution time by pre-populating necessary data via APIs.
  - Realistic test scenarios: Simulate realistic data creation workflows often performed by APIs.

### samples ( Data Samples)

- Store sample data objects (in JSON or JS) for different models to:
  - Simplify test creation: Define a single sample object and mutate it for various test cases.
  - Enhance maintainability: Keep test data readily accessible and modify it centrally.

### specs ( Test Cases)

- Organize test cases within this directory using subfolders and files aligned with your application's modules and flows.
- This structure promotes:
  - Test organization: Ensures tests are well-grouped for easier navigation.
  - Searchability: Enables efficient discovery of specific test cases.

### utils ( General Utilities)

Encapsulate generic utilities and helpers leveraged throughout your test suite, including common functionalities and helper utilities.

- **api-helpers ( API-Related Helpers)**
This directory houses functions for:
  - _**Requests**_: Create HTTP requests (POST, PUT, GET, DELETE, ..etc) for interacting with APIs.
  - _**Interceptors**_: Intercept specific API requests and mock their responses if needed.
- **cypress-wrappers ( Cypress-Specific Wrappers)**
This directory contains helpers that:
  - locators: Provide locators for UI elements.
  - assertions: Define assertions to verify expected outcomes.
  - actions: Implement actions to interact with UI elements.

  This encapsulate Cypress-specific functionality, making it easier to switch testing frameworks.

- **data-generation ( Data Generation)**
  - This file utilizes libraries like Faker and Lodash to generate diverse test data using sample objects.

**Note:** This project deviates from Cypress's default structure. This customization is managed through the `cypress.config.js` file, allowing for flexibility and better organization.
Know more about cypress configuration [here](https://docs.cypress.io/guides/references/configuration#__docusaurus_skipToContent_fallback)

## Benefits of This Structure

- **Improved maintainability:** Clear separation of concerns and modularity.
- **Efficient test creation and execution:** Promotes reuse and reduces redundancy.
- **Enhanced test organization:** Ensures tests are well-structured and easily discoverable.
- **Streamlined test execution:** Data seeding and functional testing are well-separated.
- **Realistic test scenarios:** Simulates API usage for more comprehensive testing.

## 🧪 Running tests

### Locally

- Install dependencies using `npm install` in the project directory.
- To run the tests locally in interactive mode, use the below command  `npm run cypress:interactive`
- To run tests in headless mode, use  `test:e2e`.
- To get test results in html report, run the below commands  `npm run posttest`. This report will be saved in  `/results`  directory.

### Via Docker

- Install and open docker desktop app on your machine.
- Run this command to build your docker image `docker build -t cypress-demo .`
-
