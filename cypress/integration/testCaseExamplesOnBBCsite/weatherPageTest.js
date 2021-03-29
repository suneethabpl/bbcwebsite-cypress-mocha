
import weatherPageObject from "@pageObjects/weatherPageObject"

describe('Dropdown Element', () => {
    beforeEach(function () {
        weatherPageObject.loadWeatherPage();
    })
    it('go to Taster page check header by using promises.', () => {
        weatherPageObject.weatherLink();
    })
})