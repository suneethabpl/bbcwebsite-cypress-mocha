class tasterPageObject {
    static loadTasterPage() {
        cy.visit(Cypress.env('url') + '/taster/');
        cy.url().should('include', '/taster/');
    }
    static getheadingOfPage() {
        cy.get('h1').then(function (tasterpageheading) {
            var headingstring = tasterpageheading.text();
            cy.log('welecome to Taster page')
            cy.log(headingstring);
            // console.log('I am inside')
        })
    }
    static listOfTasterDropdowmEle() {
        cy.get("ul.taster-filter__list").children().then(function (TasterdropdownEle) {
            cy.log(TasterdropdownEle.text());
        })
    }
}
export default tasterPageObject;