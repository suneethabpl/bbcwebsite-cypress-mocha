// import newsPageObject from "../pageObjects/newsPageObject"
import newsPageObject from "@pageObjects/newsPageObject"
describe('Dropdown Element', () => {
    beforeEach(function () {
        newsPageObject.loadNewsPage();
        // cy.visit(cypress("url"));
        //we launch the site in beforeEach()hook because it needs to reat on every single method.
        //it's provided by mocha framework. it open before every test/it block. 
    })

    it('go to Taster page check header by using promises.', () => {
        // cy.wait(3000);
        // cy.get("#ls-c-search__input-label").scrollIntoView();
        // cy.get("#ls-c-search__input-label").should('be.enabled').type("rm6").type('{enter}');
        // cy.get('.nw-c-local__button--light').then((localnews) => {
        //     var localnewsvar = localnews.text();
        //     cy.wait(3000);
        //     cy.log(localnewsvar);
        // })
        // cy.get(".nw-c-local__button--light").contains("Change location").click();
        // cy.get("input#ls-c-search__input-label").should('be.enabled').type("rm");
        // cy.get('.ls-c-locations-list-list li a').find('span').contains('RM10, Postcode District').click();
        newsPageObject.dynamicSearchForPostcode();
        newsPageObject.getTextForInAutoSearch();
        newsPageObject.changelocationLink();
        newsPageObject.findLocationToChange();
    })
    it('reload teh page', () => {
        cy.reload();
    })

})