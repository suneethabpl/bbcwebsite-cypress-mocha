// import tasterPageObject from "../pageObjects/tasterPageObject"
import tasterPageObject from "@pageObjects/tasterPageObject"
describe('Dropdown Element', () => {
    beforeEach(function () {
        tasterPageObject.loadTasterPage();
        // cy.visit("https://www.bbc.co.uk/");
        //we launch the site in beforeEach()hook because it needs to reat on every single method.
        //it's provided by mocha framework. it open before every test/it block. 
    })
    it('go to Taster page check header by using promises.', () => {
        // cy.visit("https://www.bbc.co.uk/");
        // cy.get("ul.ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li").last().click();
        // // cy.get(".ssrcss-16gbqah-MenuLabel.eki2hvo14").click({ force: true });
        // cy.get(".ssrcss-16gbqah-MenuLabel.eki2hvo14").should('be.hidden').invoke('show');
        // cy.xpath("//div[@id='global-navigation-menu']").find('li a').contains('Taster').click();
        // cy.get('h1').then(function (tasterpageheading) {
        //     var headingstring = tasterpageheading.text();
        //     cy.log('welecome to Taster page')
 
        //     // console.log('I am inside')
        // })
        tasterPageObject.getheadingOfPage();
        // console.log('I am outside')

        // promises—cypress commands are asynchronous. In selenium, 
        // we have getText and getAttribute methods where we will get text value 
        // of the particular value. In cypress, we get the text and those values by jquery methods. 
        // So, we use the closure concept where html elements returns a promise. 
        // Get method will be yield the HTML Dom element by using .then() method. 
        // This method receives the first argument of the the callback function. 
        // This is the reference value whatever name we wanted to provide here 
        // we can provide tasterpageheading. Now, we have tasterpageheading is html element 
        // so we can get text method. Text method returns string. Here returns heading string. 
        // Cy.log(heading string) for see console. 
        //output is in console I am outside Iam inside. print I am outside first. 
        //here we expected to run this  console.log('I am inside') before     console.log('I am outside')
        //but that is not happened because of cypress is asynchronous. means when if block runs
        //takes a request of one,two and give it to the cypress to ececute. 
        //bascically,it's node.js process which is single thread which takes all the request at once
        //and pass it to the processors executor and then come back takes another request.
        //  console.log('I am inside') is inside of cypress, it is in queue, then cypress executes
        //one by one. cypress will first open the application and then it executes to get teh h1 tag.
        //and then try to print that one in console command log and then it also giving output.

        //text() method is not a cypress method. it is jquery method. that's why we put .then to resolve
        //the promise and once the promises resolved then take the result. on the top of teh result,
        //whatever is the promises returned that's a yield subject. on the top of it, apply text method to get the text of it.

    })

    it('get the navelements and Taster dropdown elements', () => {
        tasterPageObject.listOfTasterDropdowmEle();
        })
    })




