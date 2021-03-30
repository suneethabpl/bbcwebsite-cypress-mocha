// import weatherPageObject from "../pageObjects/weatherPageObject"
import weatherPageObject from "@pageObjects/weatherPageObject"

describe('Dropdown Element', () => {
    beforeEach(function () {
        weatherPageObject.loadWeatherPage();
        // /weather
        // cy.visit("https://www.bbc.co.uk/");
        //we launch the site in beforeEach()hook because it needs to reat on every single method.
        //it's provided by mocha framework. it open before every test/it block. 
    })
    it('go to Taster page check header by using promises.', () => {
        weatherPageObject.weatherLink();
        // cy.get("a.wr-c-uk-warnings__link").should('be.visible').and('have.css', 'color', 'rgb(34, 34, 34)').then((textcss) => {
        //     cy.log(textcss.text());
        // })
        // .and('have.css', 'text-decoration', 'none');
        // cy.get("a.wr-c-uk-warnings__link").trigger('mouseover').eq(0);
        // cy.get("a.wr-c-uk-warnings__link:nth-child(1)").trigger('mouseover').eq(0).should('contains.text', 'UK flood warnings issued');

        //      .and('have.css','text-decoration','underline');
        // .and('have.css','text-decoration','underline');
    })
})