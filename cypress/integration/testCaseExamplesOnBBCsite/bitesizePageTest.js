// import bitesizePageObject from "../pageObjects/bitesizePageObject"
// import homePageObject from '../pageObjects/homePageObject'
import bitesizePageObject from "@pageObjects/bitesizePageObject"
import homePageObject from '@pageObjects/homePageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
        bitesizePageObject.loadBitesizePage();
    })
    it('get the language dropdown elemets in Bitesize page', () => {
       homePageObject.listOfMainNavMenu();
        bitesizePageObject.BitesizePageOpen();
        bitesizePageObject.changeLanguageDropdown();
        bitesizePageObject.childLanguageDropdown();
        bitesizePageObject.selectEngLanguageDropdown();
    })
})