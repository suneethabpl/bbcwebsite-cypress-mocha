
import artPageObject from "@pageObjects/artPageObject"
import homePageObject from '@pageObjects/homePageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
    artPageObject.loadArtPage();
    })
    it('go to Taster page check header by using promises.', () => {
        homePageObject.loadHomePage();
        homePageObject.moreDropdown();
        artPageObject.ArtPageOpen();
        artPageObject.ArtPageIframeHeading();
})
})