
import CBeebiesPageObject from "@pageObjects/CBeebiesPageObject"
import homePageObject from '@pageObjects/homePageObject'
describe('Dropdown Element', () => {

    beforeEach(function () {
        CBeebiesPageObject.LoadCBeebiesPage();
    })
    it('go to CBeebiesPage', () => {
        homePageObject.loadHomePage();
        homePageObject.moreDropdown();
        CBeebiesPageObject.CBeebiesPageOpen();
        expect(browser.getUrl()).to.equal('https://www.bbc.co.uk/news');
    })

    it('fetch text of all the anchor tags with async and sync actions', () => {
        CBeebiesPageObject.syncasyncactions();
    })
    it('fetch text of all the anchor tags with async action', () => {
        CBeebiesPageObject.asyncactions();
    })

    it('fetch text of all the anchor tags', () => {
        CBeebiesPageObject.allanchortags();
    })

    it('for loop', () => {
        CBeebiesPageObject.forLoop();
    })

    it("for loop -break loop", () => {
        CBeebiesPageObject.forBreakLoop();
    });


    it('check css properties', () => {
        CBeebiesPageObject.CBeebiesPageOpen();
        CBeebiesPageObject.buttonsOnCbeebiesPage();
        CBeebiesPageObject.itemHeading();
        CBeebiesPageObject.buttonslink();
        CBeebiesPageObject.specificButton();
    })

})