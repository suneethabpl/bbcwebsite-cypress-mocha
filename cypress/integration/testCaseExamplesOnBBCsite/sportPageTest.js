
import sportPageObject from "@pageObjects/sportPageObject"
import homePageObject from '@/pageObjects/homePageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
        sportPageObject.loadSportsPage();
    })
    it('allSportsMenu in sport page', () => {
        homePageObject.listOfMainNavMenu();
        sportPageObject.SportPageOpen();
        sportPageObject.allSportMenu();
    })
})