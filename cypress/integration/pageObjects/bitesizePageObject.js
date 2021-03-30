class bitesizePageObject {
    static loadBitesizePage() {
        cy.visit(Cypress.env('url'));
        cy.url().should('include', 'bbc');
    }

    static BitesizePageOpen() {
        cy.get("#global-navigation-menu").find('li a').then(function (listitems) {
            cy.log(listitems.text());
        }).contains('Bitesize').click({ force: true });
    }

    static changeLanguageDropdown() {
        cy.get("div.global-language-selector").click();
    }

    static childLanguageDropdown() {
        cy.get("div.global-language-selector__container").children().then((changeLanguageDropdown) => {
            cy.log(changeLanguageDropdown.text());
        })
    }

    static selectEngLanguageDropdown() {
        cy.get("div.global-language-selector__container").find('span')
            .each(($el, index, $list) => {
                //we can iterate the loop by each method.
                var langaugesdiv = $el.text()
                if (langaugesdiv == 'English') {
                    cy.wrap($el).click();
                }
            })
    }

}
export default bitesizePageObject;