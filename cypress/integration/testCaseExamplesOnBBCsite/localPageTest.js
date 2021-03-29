
import homePageObject from '@pageObjects/homePageObject'
import localPageObject from '@pageObjects/localPageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
     localPageObject.loadLocalPage();
    })
    
    it('home page heading and select more serachable dropdown and go to foodpage test case', () => {
        homePageObject.listOfMainNavMenu();
        homePageObject.moreDropdown();
        localPageObject.localPageOpen();
    })
    it("fetch text of all the anchor texts",()=>{
        let arr = [];
    })
})