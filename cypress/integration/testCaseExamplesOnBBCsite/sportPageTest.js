// import sportPageObject from "../pageObjects/sportPageObject"
// import homePageObject from '../pageObjects/homePageObject'
import sportPageObject from "@pageObjects/sportPageObject"
import homePageObject from '@/pageObjects/homePageObject'
describe('Dropdown Element', () => {
    beforeEach(function () {
        sportPageObject.loadSportsPage();
        // cy.visit("https://www.bbc.co.uk/");
        //we launch the site in beforeEach()hook because it needs to reat on every single method.
        //it's provided by mocha framework. it open before every test/it block. 
    })
    it('allSportsMenu in sport page', () => {
        // cy.get(".ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0").contains('Sport').click();
        homePageObject.listOfMainNavMenu();
        sportPageObject.SportPageOpen();
        sportPageObject.allSportMenu();
    })
})