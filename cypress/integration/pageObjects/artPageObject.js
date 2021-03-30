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
            // heading.text().contains('Women in Film: BBC Introducing Arts').should('be.visible').and('have.css','color','rgb(51,51,51)');
            // cy.get('a').contains('Women in Film: BBC Introducing Arts').trigger('mouseover').should('have.css','color','red') 
        })
    }
    // static styleOfArtPageHeading(){
    //     cy.get('.index-page-title').should('be.visible').should('have.css','box-sizing:border-box').should('have.css','background-color','rgba(0,0,0,0)');
    // }
    // .should('be.visible').and('have.css','color','#333')
    // var ArtIframeHeading = heading.text().trigger('mouseover').should('have.css','color','red')

    //         cy.get("div.gel-layout__item").should('be.visible');
    //         cy.get(".wr-c-uk-warnings__link").should('be.visible').wait(3000)
    // .and('have.css','text-decoration','none');
    //         cy.get(".wr-c-uk-warnings__link").trigger('mouseover').wait(2000).should('be.enabled')
    // .and('have.css','text-decoration','underline');
    //     })


}
export default artPageObject;