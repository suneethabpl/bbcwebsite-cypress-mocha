class localPageObject {
    static loadLocalPage(){
        cy.visit(Cypress.env('url'));
        cy.url().should('include','bbc');
    }
    static localPageOpen() {
        cy.get("#global-navigation-menu").find('li a').then(function (listitems) {
            cy.log(listitems.text());
        }).contains('Arts').click({ force: true });
    }
}