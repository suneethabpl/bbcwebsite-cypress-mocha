// import artPageObject from "../pageObjects/artPageObject"
// import homePageObject from '../pageObjects/homePageObject'
import artPageObject from "@pageObjects/artPageObject"
import homePageObject from '@pageObjects/homePageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
    artPageObject.loadArtPage();
        // /weather
        // cy.visit("https://www.bbc.co.uk/");
        //we launch the site in beforeEach()hook because it needs to reat on every single method.
        //it's provided by mocha framework. it open before every test/it block. 
    })
    it('go to Taster page check header by using promises.', () => {
        homePageObject.loadHomePage();
        homePageObject.moreDropdown();
        artPageObject.ArtPageOpen();
        artPageObject.ArtPageIframeHeading();
        // artPageObject.styleOfArtPageHeading();

//         cy.get("div.gel-layout__item").should('be.visible');
//         cy.get(".wr-c-uk-warnings__link").should('be.visible').wait(3000)
// .and('have.css','text-decoration','none');
//         cy.get(".wr-c-uk-warnings__link").trigger('mouseover').wait(2000).should('be.enabled')
// .and('have.css','text-decoration','underline');
//     })
})
})