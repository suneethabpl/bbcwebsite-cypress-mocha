// import homePageObject from '../pageObjects/homePageObject'
import homePageObject from '@pageObjects/homePageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
        homePageObject.loadHomePage;
        // cy.visit("https://www.bbc.co.uk/");
        //we launch the site in beforeEach()hook because it needs to reat on every single method.
        //it's provided by mocha framework. it open before every test/it block. 
    })
    it('home page heading and select more serachable dropdown and go to foodpage test case', () => {
        homePageObject.getTitle();
        homePageObject.listOfMainNavMenu();
        homePageObject.moreDropdown();
        homePageObject.listOfInnerNaveMenu();
    })

    it.skip('find a link in more serachable dropdown', () => {
        // cy.visit("https://www.bbc.co.uk/");
        // cy.get("ul.ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li").should('have.length', 11);
        // cy.get("ul.ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li").find("a[href*='/news']").click();
        cy.get("ul.gs-o-list-ui--top-no-border.nw-c-nav__wide-sections li").find("a[href*='/news/uk']").click();
        // cy.get("[name='q']").type('b');
        // cy.get("ul.gs-o-list-ui--top-no-border.nw-c-nav__wide-sections li").find('li a').contains('books').click();
        // cy.get("#suggestion-0").find('.se-g-layout a').contains('bing').click();
        // cy.get('.se-searchbox__input').contains('bing').click();
    })

    it('open in iphone-x', () => {
        cy.viewport('iphone-x');
        cy.screenshot();
        // cy.wait(200);
    })
    
    it.skip('go to Taster page in  more serachable dropdown', () => {
        // cy.visit("https://www.bbc.co.uk/");
        // cy.xpath("//div[@id='global-navigation-menu']").each(($el, index, $list) => {
        cy.get("ul.ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li").last().click();
        // cy.get(".ssrcss-16gbqah-MenuLabel.eki2hvo14").click({ force: true });
        cy.get(".ssrcss-16gbqah-MenuLabel.eki2hvo14").should('be.hidden').invoke('show');
        cy.xpath("//div[@id='global-navigation-menu']").find('li a').contains('Arts').click();
    })
})
