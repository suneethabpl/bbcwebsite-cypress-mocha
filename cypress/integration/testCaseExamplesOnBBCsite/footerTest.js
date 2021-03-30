// import footerObject from '../pageObjects/footerObject'
import footerObject from '@pageObjects/footerObject'
describe('footer', () => {
    beforeEach(function () {
        footerObject.loadHomePage();
    })

    it('footer element ', () => {
        footerObject.footerOfAllPages();
    })
})