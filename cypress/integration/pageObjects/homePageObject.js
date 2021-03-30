class homePageObject {
    static loadHomePage() {
        cy.visit(Cypress.env('url'));
        cy.url().should('include', 'bbc');
    }
    static getTitle() {
        cy.get(".ssrcss-cl4b5i-MastheadText.e9p57e2").wait(4000).invoke('text').then((text1) => {
               //text1 variable holds the text of the heading element.
            expect(text1).to.eq("Welcome to the BBC")
        })
    }
    static listOfMainNavMenu() {
        cy.get(".ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li").should('have.length', 11).children().then((moreDropdownEle) => {
            cy.log(moreDropdownEle.text());
        })
    }
    static moreDropdown() {
        cy.get(".ssrcss-16gbqah-MenuLabel.eki2hvo14").should('be.hidden').invoke('show');
    }
    static listOfInnerNaveMenu() {
        cy.xpath("//div[@id='global-navigation-menu']").contains('Food').click({ force: true });
        cy.url().should('include', '/food')
    }
    static homeSearchInput() {
        cy.get(".ssrcss-k1vu3q-SearchText").click();
    }
    static booksSearchPage() {
        cy.get(".ssrcss-k1vu3q-SearchText").type('books').click();
        cy.url().should('include', '/search');
    }
    static lockdownLearningHeading() {
        cy.get('.ssrcss-6a27d2-InlineLink').should('have.text', 'Lockdown Learning')
            .and('have.css', 'text-decoration');
    }
}
export default homePageObject;