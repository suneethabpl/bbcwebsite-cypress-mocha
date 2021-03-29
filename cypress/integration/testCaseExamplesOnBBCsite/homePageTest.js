
import homePageObject from '@pageObjects/homePageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
        homePageObject.loadHomePage;
    })
    it('home page heading and select more serachable dropdown and go to foodpage test case', () => {
        homePageObject.getTitle();
        homePageObject.listOfMainNavMenu();
        homePageObject.moreDropdown();
        homePageObject.listOfInnerNaveMenu();
    })

    it.skip('find a link in more serachable dropdown', () => {
        cy.get("ul.gs-o-list-ui--top-no-border.nw-c-nav__wide-sections li").find("a[href*='/news/uk']").click();
    })

    it('open in iphone-x', () => {
        cy.viewport('iphone-x');
        cy.screenshot();
    })
    it.skip('go to Taster page in  more serachable dropdown', () => {
        cy.get("ul.ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li").last().click();
        cy.get(".ssrcss-16gbqah-MenuLabel.eki2hvo14").should('be.hidden').invoke('show');
        cy.xpath("//div[@id='global-navigation-menu']").find('li a').contains('Arts').click();
    })
})
