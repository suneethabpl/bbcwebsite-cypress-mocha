
import threePageObject from "@pageObjects/threePageObject"
import homePageObject from '@pageObjects/homePageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
        threePageObject.loadThreePage();
    })
    it('get the language dropdown elemets in Bitesize page', () => {
        homePageObject.listOfMainNavMenu();
        homePageObject.moreDropdown();
        threePageObject.threePageOpen();
        threePageObject.listOfItemsInThreePage();
        threePageObject.PRUItemPage();
        threePageObject.jellyfishPageOpen();
        threePageObject.whowearePageOpen();
        threePageObject.listThroughLoop();
        threePageObject.secondIndexItem();
        threePageObject.openPageByText();
        threePageObject.openPageByTextIncluded();
    })
})