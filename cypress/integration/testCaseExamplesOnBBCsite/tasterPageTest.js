
import tasterPageObject from "@pageObjects/tasterPageObject"
describe('Dropdown Element', () => {
    beforeEach(function () {
        tasterPageObject.loadTasterPage();
    })
    it('go to Taster page check header by using promises.', () => {
        tasterPageObject.getheadingOfPage();
    })

    it('get the navelements and Taster dropdown elements', () => {
        tasterPageObject.listOfTasterDropdowmEle();
        })
    })




