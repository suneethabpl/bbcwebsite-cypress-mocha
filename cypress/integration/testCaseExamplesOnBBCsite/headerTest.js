
import headerObject from '@pageObjects/headerObject'
describe('header', () => {
    beforeEach(function () {
        headerObject.loadHomePage();
    })

    it('header element ', () => {
        headerObject.headerInAllPages();
    })
})