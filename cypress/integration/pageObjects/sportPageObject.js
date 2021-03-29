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
        cy.url().should('include', '/american-football');
    }
}
export default sportPageObject;