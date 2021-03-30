// import signInPageObject from "../pageObjects/signInPageObject"
// import homePageObject from '../pageObjects/homePageObject'
import signInPageObject from "@pageObjects/signInPageObject"
import homePageObject from '@pageObjects/homePageObject'
describe('UI Element', () => {
    beforeEach(function () {
        signInPageObject.loadsigninPage();
    })
    it('verify inputbox and radio buttons', () => {
        // cy.visit("https://www.bbc.co.uk/");//open the url chrome browser.
        // cy.url().should('include', 'bbc')
        // cy.url() returns current page url and should is the conditional statments
        // here, value of the key , it should be part of the url. so,here verify the url should include bbc.
        // cy.get(".ssrcss-waaubd-NavigationLink-AccountLink").click();
        signInPageObject.signInLocator();
        // cy.get('#submit-button').should('be.visible').click();
        // cy.on('window:alert', (str) => {
        //     expect(str).to.equal("Something's missing.Please check and try again.")
        // })
        signInPageObject.emptyFieldSignin();
        // cy.get('#user-identifier-input').should('be.visible').should('be.enabled').type("s@gmail.com");
        signInPageObject.getEmailId("s@gmail.com");
        //get method to get you the element based on the css seletor. and then verify whether the
        //element is not visible or not and it is enabled or not.and then i will send the
        //value into the inputbox. be.visible,be.enabled are conditions of should method.once these conditions are satisfied
        //then give value/text to inputbox.


        // cy.get('#password-input').should('be.visible').should('be.enabled').type("skodali81");
        signInPageObject.getPassword("skodali81")
        // cy.get('#submit-button').should('be.visible').click().wait(2000);//submit
        signInPageObject.submitButton();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sorry, your account is locked')
        })
        // cy.get(":nth-child(4) > span > .link").click();
        signInPageObject.signinAgainLink();
        // cy.get(".page__content--secondary > .link > span").click();
        signInPageObject.registerNowLink();

        // cy.title().should('eq', 'BBC – Register')//title verification
        //  cy.title() returns give the title of the current page and eq is the condition and give expecting title as Find a flight:Mercury Tours:
        // signInPageObject.getTitle();
        // cy.get("[data-bbc-result='/register/details/age']").click();
        signInPageObject.thirtheenOrOverButton();
        // cy.get('#dateOfBirthDay').type("28");
        // cy.get('#dateOfBirthMonth').type("8");
        // cy.get('#dateOfBirthYear').type("1984");
        signInPageObject.dateOfBirth();
        signInPageObject.monthOfBirth();
        signInPageObject.yearOfBirth();
        // cy.get('button#submit-button').should('be.visible').click();//submit
        signInPageObject.submitButtonWithoutPopup();
        // cy.title().should('eq', 'BBC – Register – enter your details')//title verification
        // cy.get('#user-identifier-input').should('be.visible').should('be.enabled').type("s@gmail.com");
        signInPageObject.getEmailId("s@gmail.com");
        // cy.get('#password-input').should('be.visible').should('be.enabled').type("skodali81");
        signInPageObject.getPassword("skodali81")
        // cy.get('#postcode-input').should('be.visible').should('be.enabled').type("rm6 4yx");
        signInPageObject.postcode();
        // cy.get("#gender-input").select('female').should('have.value', 'female');
        signInPageObject.genderDropdown();
        // cy.get("#submit-button").click();
        signInPageObject.submitButtonWithoutPopup();
        // cy.root().submit();//we can do this button when it has type='button' 
        // cy.title().should('eq', 'BBC – Register – enter your details');
        // cy.on('window:alert', (str) => {
        //     expect(str).to.equal('Looks like you’ve already registered with this email')
        // })
        // cy.on('window:confirm', (str) => {
        //     expect(str).to.equal('Looks like you’ve already registered with this email');
        // })
        signInPageObject.registerButtonwithregpopup();
        // cy.get(".form-message__text > :nth-child(1) > :nth-child(3) > .link").click();
        signInPageObject.signinLinkInAlert();
    });

});

