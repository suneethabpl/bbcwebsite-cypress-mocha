class artPageObject {
    static loadArtPage() {
        cy.visit(Cypress.env('url'));
        cy.url().should('include', 'bbc'
        );

    }
    static ArtPageOpen() {
        cy.get("#global-navigation-menu").find('li a').then(function (listitems) {
            cy.log(listitems.text());
        }).contains('Arts').click({ force: true });
    }
    static ArtPageIframeHeading() {
        cy.get('h2').then((heading) => {
            var ArtIframeHeading = heading.text();
            cy.log('Women in Film: BBC Introducing Arts')
        })
    }
}
export default artPageObject;