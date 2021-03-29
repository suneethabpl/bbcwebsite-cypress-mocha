class CBeebiesPageObject {
    static LoadCBeebiesPage() {
        cy.visit(Cypress.env('url'));
        cy.url().should('include', 'bbc'
        );

    }
    static CBeebiesPageOpen() {
        cy.get("#global-navigation-menu").find('li a').then(function (listitems) {
            cy.log(listitems.text());
        }).contains('CBeebies').click({ force: true });
    }

    static buttonsOnCbeebiesPage() {
        cy.get(".promo__contents").should('have.length', 15).each(($el, index, $listOfElements) => {
            cy.log($listOfElements.length);
            cy.log($el.text());
            if (index == 0) {
                $el.click();
            }
        })
    }

    static syncasyncactions() {
        let arr = [];
        cy.get("a").each((el) => {
            arr.push(el.text());
        })
        console.log(`Anchor Tag Count - ${arr.length}`);
        console.log(`Anchor Tags Text String - ${arr.join(",")}`);
    }

    static asyncactions() {
        let arr = [];
        cy.get("a").each((el) => {
            arr.push(el.text());
        }).then(() => {
            console.log(`Anchor Tag Count - ${arr.length}`);
            console.log(`Anchor Tags Text String - ${arr.join(",")}`);
        })
    }

    static allanchortags() {
        let arr = [];
        cy.get("a").each((el) => {
            arr.push(el.text());
        }).as('myarr')
        cy.get('@myarr').then(() => {
            console.log(`Anchor Tag Count - ${arr.length}`);
            console.log(`Anchor Tags Text String - ${arr.join(",")}`);
        })
    }
    static forLoop() {
        let arr = [];
        cy.get("a")
            .then((els) => {
                for (let index = 0; index < els.length; index++) {
                    arr.push(Cypress.$(els[index]).text());
                }
                return arr;
            }).then((myarr) => {
                console.log(`Anchor Tag Count - ${myarr.length}`);
                console.log(`Anchor Tags Text String - ${myarr.join(",")}`);
            })
    }
    static forBreakLoop(){
        let array = [...Array(10).keys()]
        for (let index = 0; index < array.length; index++) {
            if (array[index] === 5) {
                break;
            }
            console.log(array[index]);
        }
    }
    static itemHeading() {
        cy.get(".content-item-description__heading").should('have.css', 'margin-bottom', '8px');
    }
    static buttonslink() {
        cy.get(".brandcard").should('have.css', 'background-color', 'rgb(157, 85, 234)');
        cy.get(".brandcard").trigger('mouseover').click();
    }
    static specificButton() {
        cy.get("span.button__inner").eq(0).should('contains.text', 'Add to My Shows').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.3) 0px 4px 3px -2px')
            .and('have.css', 'background-color', 'rgb(49, 121, 181)');
        cy.get("span.button__inner").eq(0).should('contains.text', 'Add to My Shows').trigger('mouseover').should('have.css', 'background-color', 'rgb(49, 121, 181)');
        cy.get("span.button__inner").eq(1).should('contain.text', 'Choose an episode').should('have.css', 'background-color', 'rgb(226, 0, 122)');
        cy.get("span.button__inner").eq(1).should('contain.text', 'Choose an episode').trigger('mouseover').should('have.css', 'background-color', 'rgb(226, 0, 122)');
    }
}
export default CBeebiesPageObject;