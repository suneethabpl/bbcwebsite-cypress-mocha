class signInPageObject {
    static loadsigninPage(){
    cy.visit(Cypress.env('url'));
    cy.url().should('include','bbc');
}

static signInLocator(){
    cy.get(".ssrcss-waaubd-NavigationLink-AccountLink").click();
}
static emptyFieldSignin(){
    cy.get('#submit-button').should('be.visible').click();
    cy.on('window:alert', (str) => {
        expect(str).to.equal("Something's missing.Please check and try again.")
    })
}
static getEmailId(emailId){
    console.log("First Log");
    cy.get('#user-identifier-input').type(emailId,{delay:30}).should('have.value',emailId)
    //in type command we know when we type something we can pass also there is a delay inside there.
    //so, we can put implicity delay. 
    //we enter email id as s@gmail.com so, we confirm the same is in the input field through asertion should('have.value')
    console.log("second Log");
}

static getPassword(pwd){
    cy.get('#password-input').type(pwd,{delay:30}).should('have.value',pwd)
    console.log("third Log");
}

static submitButton(){
cy.get('#submit-button').should('be.visible').click().wait(2000);
console.log("fourth log");
//here we noticed fist run console.log commands and then run cypress commands because cypress commads are asynchronous.
cy.on('window:alert', (str) => {
    expect(str).to.equal('Sorry, your account is locked')
})
}

static signinAgainLink(){
    cy.get(":nth-child(4) > span > .link").wait(3000).click();
}
static registerNowLink(){
    cy.get(".page__content--secondary > .link > span").click();
    cy.title().should('eq', 'BBC – Register')
}

static thirtheenOrOverButton(){
    cy.get("[data-bbc-result='/register/details/age']").click();
}
static dateOfBirth(){
    cy.get('#dateOfBirthDay').type("28");
}
static monthOfBirth(){
    cy.get('#dateOfBirthMonth').type("8");
}
static yearOfBirth(){
    cy.get('#dateOfBirthYear').type("1984");
}
static submitButtonWithoutPopup(){
    cy.get('button#submit-button').should('be.visible').click();
    cy.title().should('eq', 'BBC – Register – enter your details')
}
static postcode(){
    cy.get('#postcode-input').should('be.visible').should('be.enabled').type("rm6 4yx");
}
static genderDropdown(){
    cy.get("#gender-input").select('female').should('have.value', 'female');
}
static registerButtonwithregpopup(){
    cy.title().should('eq', 'BBC – Register – enter your details');
    cy.on('window:confirm', (str) => {
        expect(str).to.equal('Looks like you’ve already registered with this email');
    })
}
static signinLinkInAlert(){
    cy.get(".form-message__text > :nth-child(1) > :nth-child(3) > .link").click();
}
}
export default signInPageObject ;