# Powerside Testing Challenge 

## Project Overview
This repository contains **Cypress automation tests** for the Powerside application.  
Tests cover **UI workflows and functional validation, along wih the validation results**. The suite is designed partially with **reusability, maintainability, and scalability** in mind.

---
## Prerequisites
Before running the tests, ensure your environment has:

- Node.js v14+ and npm
- Google Chrome, Chromium, or Edge (for browser testing)
- Git (to clone repository)
---
## Installation
### Node.js
Install Node.js (which includes npm):
- Go to the official website: https://nodejs.org and download the latest version.

Run the installer:
- On Windows/Mac, follow the prompts.
- On Linux, you can use a package manager like apt or yum.

Verify installation:
```bash
node -v
npm -v
```
You should see versions for both, e.g.:
```bash
node: v20.3.0
npm: 10.1.0
```

---
## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-link>
cd <repo>
```
### 2. Initialize the cypress project
Open a terminal in your project folder.
Run:
```bash 
npm init -y
```
This will create a package.json file, which keeps track of dependencies.

### 3. Install Cypress
```bash 
npm install cypress --save-dev
```
This will download Cypress into your node_modules folder. 

## Running the Test Suite
### 1. Interactive Mode (Cypress Test Runner)
```bash
npx cypress open
```
- Opens Cypress UI
- Allows selecting individual test files to run
- Useful for debugging or visual verification

### 2. Headless Mode (CI/CD Friendly)
```bash
npx cypress run
```
- Runs all tests in the terminal
- Ideal for automated pipelines
  
### 3. Run Tests in a Specific Browser
```bash
npx cypress run --browser chrome
```
### 4. Running a Specific Test
```bash
npx cypress run --spec "cypress/e2e/user_login_spec.cy.js"
```
Allows running a single test file

Useful during development

## Test Structure
```bash
cypress/
|-- e2e/       -> Test files (login, sort, search, etc.)
|--  fixtures/ -> Commonly used test data for UI such as user login credentials
|--  pages/    -> Reusable fixtures and helper functions
|--  testcases -> Lsit of functional test cases used to validate the application 
cypress.config.ts -> Configuration (baseUrl, timeouts, retries)
README.md
```
## Configuration

Make sure to add a <b>User.json</b> file to the <b>cypress/fixtures/</b> directory with the details of your username and password.
```bash
{ 
"username": "Johndoe"
"password": "Test1234"
}
```
## Reporting

- Cypress logs results are provided in the terminal
- Screenshots and videos are captured on test failures (but needs to be configured in cypress.config.ts in order to be generated)
  
## Screenshots 
### Test results in headless mode
<img width="548" height="194" alt="image" src="https://github.com/user-attachments/assets/7a3ef808-31f0-4708-9756-ddf5a739a774" />

### Test reults in Interactive Mode
<img width="914" height="393" alt="image" src="https://github.com/user-attachments/assets/be23f6b1-9086-4cc6-8e10-25c4b94a8f76" />
