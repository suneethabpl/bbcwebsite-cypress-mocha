// import threePageObject from "../pageObjects/threePageObject"
// import homePageObject from '../pageObjects/homePageObject'
import threePageObject from "@pageObjects/threePageObject"
import homePageObject from '@pageObjects/homePageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
        // cy.visit("https://www.bbc.co.uk/", { failOnStatusCode: false });
        // cy.visit("https://www.bbc.co.uk/");
        threePageObject.loadThreePage();
    })
    it('get the language dropdown elemets in Bitesize page', () => {
        //check how many items in the page and click first item and check the new url.
        //retrieve the particular item through the loop and cypress commands. check index is correct of the particular element/item.
        // cy.get("ul.ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li").last().click();
        // cy.get(".ssrcss-16gbqah-MenuLabel.eki2hvo14").should('be.hidden').invoke('show');
        homePageObject.listOfMainNavMenu();
        homePageObject.moreDropdown();
        // cy.get("#global-navigation-menu").find('li a').contains('Three').click();
        threePageObject.threePageOpen();
        // cy.get(".Promo-headline.Headline").should('have.length', 21).then(function
        //     (listofitems){
        //         cy.log(listofitems.text());
        //     })
        threePageObject.listOfItemsInThreePage();
        //    .should('contain.text', 'PRU').first().click();
        // cy.url().should('include', '/pru');
        threePageObject.PRUItemPage();
        // cy.go(-1);
        // cy.get(".Promo-headline.Headline").should('have.length', 21).and('contain.text', 'Jellyfish').eq(4).click();
        // cy.url().should('include', '/jellyfish');
        // cy.go(-1);
        threePageObject.jellyfishPageOpen();
        // cy.get(".Promo-headline.Headline").should('have.length', 21).and('contain.text', 'We Are Who We Are').eq(-2).click();
        // cy.url().should('include', '/we-are-who-we-are-series-1-1-right-here-right-now');
        // cy.go(-1);
        threePageObject.whowearePageOpen();
        // cy.get(".Promo-headline.Headline").should('have.length', 21).each(($el, index, $listOfElements) => {
        //     cy.log($listOfElements.length);
        //     cy.log($el.text());
        // })
        threePageObject.listThroughLoop();
        // cy.get(".Promo-headline.Headline").should('have.length', 21).each(($el, index, $listOfElements) => {
        //     cy.log($listOfElements.length);
        //     cy.log($el.text());
        //     if (index == 2) {
        //         $el.click();
        //     }
        // })
        threePageObject.secondIndexItem();
        // cy.url().should('contains', '/f6b95f7d-4c13-47f3-a038-2cf450dd7ea8');
        // //each()method syntax===
        // //we need to pass the function in each()method.
        // //within the function, this is the first element, which is the type jquery html element.
        // //second we put index which is teh type number.
        // //third we put list which is the type jquery html element and it contains  list of all elements. 
        // //we are going to retrieve each index of particuler single element. 
        // //here $list is whole array.
        // //$el is single element in the whole list array.
        // //index is single element index in the whole list array.
        // cy.go(-1);
        // cy.get(".Promo-headline.Headline").should('have.length', 21).each(($el, index, $listOfElements) => {
        //     if ($el.text() == "Why one woman filmed her transition: ‘I want to show young trans kids it gets better’") {
        //         $el.click();
        //     }
        // })
        threePageObject.openPageByText();
        // cy.url().should('contains', '/20d41ea8-42df-4bcd-92e6-692e204d3894');
        // cy.go(-1);
        // cy.get(".Promo-headline.Headline").should('have.length', 21).each(($el, index, $listOfElements) => {
        //     if ($el.text().includes("Travelling during Covid: 'I was nervous using a fake Covid-19 test certificate'")) {
        //         $el.click();
        //     }
        // })
        threePageObject.openPageByTextIncluded();
    })
})