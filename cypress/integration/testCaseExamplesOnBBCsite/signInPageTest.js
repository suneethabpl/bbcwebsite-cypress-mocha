
import signInPageObject from "@pageObjects/signInPageObject"
import homePageObject from '@pageObjects/homePageObject'
describe('UI Element', () => {
    beforeEach(function () {
        signInPageObject.loadsigninPage();
    })
    it('verify inputbox and radio buttons', () => {
        signInPageObject.signInLocator();
        signInPageObject.emptyFieldSignin();
        signInPageObject.getEmailId("s@gmail.com");
        signInPageObject.getPassword("skodali81")
        signInPageObject.submitButton();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sorry, your account is locked')
        })
        signInPageObject.signinAgainLink();
        signInPageObject.registerNowLink();
        signInPageObject.thirtheenOrOverButton();
        signInPageObject.dateOfBirth();
        signInPageObject.monthOfBirth();
        signInPageObject.yearOfBirth();
        signInPageObject.submitButtonWithoutPopup();
        signInPageObject.getEmailId("s@gmail.com");
        signInPageObject.getPassword("skodali81")
        signInPageObject.postcode();
        signInPageObject.genderDropdown();
        signInPageObject.submitButtonWithoutPopup();
        signInPageObject.registerButtonwithregpopup();
        signInPageObject.signinLinkInAlert();
    });

});

