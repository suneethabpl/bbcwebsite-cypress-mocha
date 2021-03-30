class sportPageObject {
    static loadSportsPage(){
        cy.visit(Cypress.env('url'));
        cy.url().should('include','bbc');
    }
    static SportPageOpen() {
        cy.get(".ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0").contains('Sport').click();
    }
    static allSportMenu(){
        cy.get("#sp-nav-all-sport-button").click();
        cy.contains('American Football').click({ force: true })
        cy.url().should('include', '/american-football')
        //to show the hidden element or apply any action in a hidden element like clcik action 
        //we can force it in selenium.click({force:true}) command is applicable which is hidden this cy.contains('American Football') element.
     
    }
}
export default sportPageObject;