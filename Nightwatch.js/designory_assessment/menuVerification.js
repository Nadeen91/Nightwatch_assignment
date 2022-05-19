


const menu = '#nav-toggle > button'
const workMenuOption = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(1) > a'
const aboutMenuOption = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(2) > a'
const careersMenuOption = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(3) > a'
const locationsMenuOption = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a'
const contactMenuOption = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(5) > a'
const newsMenuOption = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(6) > a'

const longBeachLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(1) > a'
const chicagoLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(2) > a'
const nashvilleLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(3) > a'
const tokyoLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(4) > a'
const londonLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(5) > a'
const hongKongLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(6) > a'
const parisLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(7) > a'
const newYorkLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(8) > a'
const newJerseyLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(9) > a'
const portlandLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(10) > a'
const philadelphiaLocation = '#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(11) > a'
const locationImageSrc = '#body > div.container.location-detail > div > div.grid-12.grid-md-5.grid-xl-6 > div > div:nth-child(1) > div > a'

describe('Designory Varification Test Suite', function() {
    beforeEach(function(browser) {
        browser.url('https://www.designory.com')
    })
    test('Menu contain six options', function(browser) {
        browser.click(menu)
        browser.expect.element(workMenuOption).to.be.visible
        browser.expect.element(aboutMenuOption).to.be.visible
        browser.expect.element(careersMenuOption).to.be.visible
        browser.expect.element(locationsMenuOption).to.be.visible
        browser.expect.element(contactMenuOption).to.be.visible
        browser.expect.element(newsMenuOption).to.be.visible

        browser.click(workMenuOption)
        browser.expect.url().to.endWith('/work')
        browser.click(menu)
        browser.expect.element(workMenuOption).to.be.visible
        browser.expect.element(aboutMenuOption).to.be.visible
        browser.expect.element(careersMenuOption).to.be.visible
        browser.expect.element(locationsMenuOption).to.be.visible
        browser.expect.element(contactMenuOption).to.be.visible
        browser.expect.element(newsMenuOption).to.be.visible
        browser.click('#nav-toggle > button > span.navicon')
        

        browser.back()
        browser.click('#nav-toggle > button > span.navicon')
        browser.click(menu)
        browser.click(aboutMenuOption)
        browser.expect.url().to.endWith('/about')
        browser.click(menu)
        browser.expect.element(workMenuOption).to.be.visible
        browser.expect.element(aboutMenuOption).to.be.visible
        browser.expect.element(careersMenuOption).to.be.visible
        browser.expect.element(locationsMenuOption).to.be.visible
        browser.expect.element(contactMenuOption).to.be.visible
        browser.expect.element(newsMenuOption).to.be.visible
        browser.click('#nav-toggle > button > span.navicon')

        browser.back()
        browser.click('#nav-toggle > button > span.navicon')
        browser.click(menu)
        browser.click(careersMenuOption)
        browser.expect.url().to.endWith('/careers')
        browser.click(menu)
        browser.expect.element(workMenuOption).to.be.visible
        browser.expect.element(aboutMenuOption).to.be.visible
        browser.expect.element(careersMenuOption).to.be.visible
        browser.expect.element(locationsMenuOption).to.be.visible
        browser.expect.element(contactMenuOption).to.be.visible
        browser.expect.element(newsMenuOption).to.be.visible
        browser.click('#nav-toggle > button > span.navicon')

        browser.back()
        browser.click('#nav-toggle > button > span.navicon')
        browser.click(menu)
        browser.click(locationsMenuOption)
        browser.expect.element(longBeachLocation).to.be.visible
        browser.expect.element(chicagoLocation).to.be.visible
        browser.expect.element(nashvilleLocation).to.be.visible
        browser.expect.element(tokyoLocation).to.be.visible
        browser.expect.element(londonLocation).to.be.visible
        browser.expect.element(hongKongLocation).to.be.visible
        browser.expect.element(parisLocation).to.be.visible
        browser.expect.element(newYorkLocation).to.be.visible
        browser.expect.element(newJerseyLocation).to.be.visible
        browser.expect.element(portlandLocation).to.be.visible
        browser.expect.element(philadelphiaLocation).to.be.visible
        browser.click(chicagoLocation)
        browser.expect.url().to.endWith('/locations/chicago')
        browser.click(menu)
        browser.expect.element(workMenuOption).to.be.visible
        browser.expect.element(aboutMenuOption).to.be.visible
        browser.expect.element(careersMenuOption).to.be.visible
        browser.expect.element(locationsMenuOption).to.be.visible
        browser.expect.element(contactMenuOption).to.be.visible
        browser.expect.element(newsMenuOption).to.be.visible
        browser.click('#nav-toggle > button > span.navicon')

        browser.back()
        browser.click('#nav-toggle > button > span.navicon')
        browser.click(menu)
        browser.click(locationsMenuOption)
        browser.click(contactMenuOption)
        browser.expect.url().to.endWith('/contact')
        browser.click(menu)
        browser.expect.element(workMenuOption).to.be.visible
        browser.expect.element(aboutMenuOption).to.be.visible
        browser.expect.element(careersMenuOption).to.be.visible
        browser.expect.element(locationsMenuOption).to.be.visible
        browser.expect.element(contactMenuOption).to.be.visible
        browser.expect.element(newsMenuOption).to.be.visible
        browser.click('#nav-toggle > button > span.navicon')

        browser.back()
        browser.click('#nav-toggle > button > span.navicon')
        browser.click(menu)
        browser.click(newsMenuOption)
        browser.expect.url().to.endWith('/news')
        browser.click(menu)
        browser.expect.element(workMenuOption).to.be.visible
        browser.expect.element(aboutMenuOption).to.be.visible
        browser.expect.element(careersMenuOption).to.be.visible
        browser.expect.element(locationsMenuOption).to.be.visible
        browser.expect.element(contactMenuOption).to.be.visible
        browser.expect.element(newsMenuOption).to.be.visible
        browser.click('#nav-toggle > button > span.navicon')
    })

    test('Cookie Verification', function(browser) {
        browser.click('#cookie-container > div > button')
        browser.refresh()
        browser.assert.not.visible('#cookie-container > div > button')

        browser.deleteCookies()
        browser.refresh()
        browser.assert.visible('#cookie-container')
        browser.click('#cookie-container > button')
        browser.assert.not.visible('#cookie-container')
    })

    test('location verification', function(browser) {
        browser.click(menu)
        browser.click(locationsMenuOption)
        browser.click(chicagoLocation)
        browser.expect.element('#body > div.immersive-hero > div.immersive-content-box > div > h1').text.to.equal('CHI')

        browser.expect.element('#body > div.container.location-detail > div > div.grid-12.grid-md-5.grid-xl-6 > div > div:nth-child(2) > div > p').text.to.equal('Phone: +1 312 729 4500')
        
        browser.getElementSize('h2', function(result) {
            console.log('result', result);
          });
          

            
         browser.expect.element(locationImageSrc).value.to.contain('https://maps.googleapis.com/maps/api/staticmap?center= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&zoom=16.5&markers= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&size=400x150&key=AIzaSyAkAXQMgbxLGj6ZFqVAAR8JT4-5LaWKfIY')


    
    })

})