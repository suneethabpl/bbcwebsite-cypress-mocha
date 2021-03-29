class threePageObject {
    static loadThreePage() {
        cy.visit(Cypress.env('url'));
        cy.url().should('include', 'bbc');
    }
    static threePageOpen() {
        cy.get("#global-navigation-menu").find('li a').contains('Three').click({ force: true });
    }
    static listOfItemsInThreePage() {
        cy.get(".Promo-headline.Headline").should('have.length', 21).then(function
            (listofitems) {
            cy.log(listofitems.text());
        })
    }
    static PRUItemPage() {
        cy.get(".Promo-headline.Headline").should('contain.text', 'PRU').first().click();
        cy.url().should('include', '/pru');
        cy.go(-1);
    }
    static jellyfishPageOpen() {
        cy.get(".Promo-headline.Headline").should('have.length', 21).and('contain.text', 'Jellyfish').eq(4).click();
        cy.url().should('include', '/jellyfish');
        cy.go(-1);
    }

    static whowearePageOpen() {
        cy.get(".Promo-headline.Headline").should('have.length', 21).and('contain.text', 'We Are Who We Are').eq(-2).click();
        cy.url().should('include', '/we-are-who-we-are-series-1-1-right-here-right-now');
        cy.go(-1);
    }
    static listThroughLoop() {
        cy.get(".Promo-headline.Headline").should('have.length', 21).each(($el, index, $listOfElements) => {
            cy.log($listOfElements.length);
            cy.log($el.text());
        })
    }
    static secondIndexItem() {
        cy.get(".Promo-headline.Headline").should('have.length', 21).each(($el, index, $listOfElements) => {
            cy.log($listOfElements.length);
            cy.log($el.text());
            if (index == 2) {
                $el.click();
            }
        })
        cy.url().should('contains', '/f6b95f7d-4c13-47f3-a038-2cf450dd7ea8');
        cy.go(-1);
    }
    static openPageByText() {
        cy.get(".Promo-headline.Headline").should('have.length', 21).each(($el, index, $listOfElements) => {
            if ($el.text() == "Why one woman filmed her transition: ‘I want to show young trans kids it gets better’") {
                $el.click();
            }
        })
        cy.url().should('contains', '/20d41ea8-42df-4bcd-92e6-692e204d3894');
        cy.go(-1);
    }
    static openPageByTextIncluded() {
        cy.get(".Promo-headline.Headline").should('have.length', 21).each(($el, index, $listOfElements) => {
            if ($el.text().includes("Travelling during Covid: 'I was nervous using a fake Covid-19 test certificate'")) {
                $el.click();
            }
        })
    }
}
export default threePageObject;