class headerObject {
    static loadHomePage(){
        cy.visit(Cypress.env('url'));
        cy.url().should('include','bbc');
    }
    static headerInAllPages(){
        cy.xpath("//header[@id='header-content']").should('be.visible')
    }
}
export default headerObject;