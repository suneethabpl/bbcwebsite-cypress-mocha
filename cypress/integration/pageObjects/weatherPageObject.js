class weatherPageObject {
    static loadWeatherPage() {
        cy.visit(Cypress.env('url') + '/weather');
        cy.url().should('include', '/weather');
    }
    static weatherLink() {
        cy.get("a.wr-c-uk-warnings__link").should('be.visible').and('have.css', 'color', 'rgb(34, 34, 34)').then((textcss) => {
            cy.log(textcss.text());
        })
        cy.get("a.wr-c-uk-warnings__link").trigger('mouseover').eq(0);
        cy.get("a.wr-c-uk-warnings__link:nth-child(1)").trigger('mouseover').eq(0).should('contains.text', 'UK flood warnings issued');
    }
}
export default weatherPageObject;