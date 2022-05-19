

describe('Expect Test Suite', function() {
    beforeEach(function(browser) {
        browser.url('https://glitchitsystem.com/monster')
    })

    test('Working with expect', function(browser) {
        browser.expect.element('body > app-root > app-header > nav > div > div.collapse.navbar-collapse > ul > li > a').to.be.visible;

        browser.expect.element('body > app-root > app-header > nav > div > div.collapse.navbar-collapse > ul > li > a').text.to.equal('My Monster Team')
        browser.expect.element('body > app-root > app-header > nav > div > div.collapse.navbar-collapse > ul > li > a').text.to.contain('Monster')
        
        browser.expect.title().to.contain('Monster')
        //browser.expect.title().to.not.equal('Monster Dream Team')

        browser.expect.url().to.contain('glitch')
        browser.expect.url().to.endWith('monster/')

        browser.expect.element('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button').to.not.be.enabled
    })
})