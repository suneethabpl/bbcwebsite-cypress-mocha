
import newsPageObject from "@pageObjects/newsPageObject"
describe('Dropdown Element', () => {
    beforeEach(function () {
        newsPageObject.loadNewsPage();
    })

    it('go to Taster page check header by using promises.', () => {
        newsPageObject.dynamicSearchForPostcode();
        newsPageObject.getTextForInAutoSearch();
        newsPageObject.changelocationLink();
        newsPageObject.findLocationToChange();
    })
    it('reload teh page', () => {
        cy.reload();
    })

})