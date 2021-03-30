class newsPageObject {
    static loadNewsPage() {
        cy.visit(Cypress.env('url') + "/news");
        cy.location('pathname').should('eq','//news');
    }
    // static MainNavMenu() {
    //     cy.get(".ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0");
    //     MainNavMenu().contains('News').click();
    //     cy.wait(3000);
    // }

    static dynamicSearchForPostcode() {
        cy.get("#ls-c-search__input-label")
            .scrollIntoView();
        cy.get("#ls-c-search__input-label").should('be.enabled').type("rm6").type('{enter}');
    }

    static getTextForInAutoSearch() {
        cy.get('.nw-c-local__button--light').then((localnews) => {
            var localnewsvar = localnews.text();
            cy.wait(3000);
            cy.log(localnewsvar);
        })
    }
    // static changeLocation(){
    // cy.get(".nw-c-local__button--light").contains("Change location").click();
    // }
    static changelocationLink() {
        cy.get(".nw-c-local__button--light").contains("Change location").click();
    }
    static findLocationToChange() {

        cy.get("#ls-c-search__input-label").should('be.enabled').type("rm5").should('have.value','rm5').clear().should('have.value','').type('rm');
        // cy.get('.ls-c-locations-list-list li a').find('span').contains('RM10, Postcode District').click();
        cy.get('.ls-c-locations-list-list').each(($el, index, $list) => {
            if ($el.text() === 'rm') {
                cy.wrap($el).click();
            }
        })
    }
}
export default newsPageObject;