// import homePageObject from '../pageObjects/homePageObject'
import homePageObject from '@pageObjects/homePageObject'
import localPageObject from '@pageObjects/localPageObject'
// import homePageObject from '../pageObjects/homePageObject'
// import localPageObject from '../pageObjects/localPageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
     localPageObject.loadLocalPage();
        // cy.visit("https://www.bbc.co.uk/");
        //we launch the site in beforeEach()hook because it needs to reat on every single method.
        //it's provided by mocha framework. it open before every test/it block. 
    })
    
    it('home page heading and select more serachable dropdown and go to foodpage test case', () => {
        homePageObject.listOfMainNavMenu();
        homePageObject.moreDropdown();
        localPageObject.localPageOpen();
   
        // artPageObject.ArtPageIframeHeading();
    })
    it("fetch text of all the anchor texts",()=>{
        //create a collection variable to store all the anchor tags
        let arr = [];
        //Find all the anchor tags and store their text in the collection variable created above.
    })
})