const usernameLabel = 'body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > label'
const passwordLabel = 'body > app-root > div > div > div > app-login > div > div > form > div:nth-child(2) > div > div > label'


describe('Assertion Test Suite', function() {
    beforeEach(function(browser) {
        browser.url('http://glitchitsystem.com/monster')
    })

    test('Deal with alerts with assertions', function(browser) {
        browser.assert.visible(usernameLabel)
        browser.assert.visible(passwordLabel)
        
        browser.assert.containsText(usernameLabel, 'Username', 'Username label contains text.')
        browser.assert.containsText(passwordLabel, 'Password', 'Password label contains text')
        
        browser.assert.not.enabled('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button')
        browser.setValue('#username', 'bob@bob.com')
        .assert.value('#username', 'bob@bob.com')
        .assert.valueContains('#username', 'bob')

        browser.assert.not.enabled('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button')
        browser.setValue('#password', 'Test123')
        .assert.valueContains('#password', 'Test123')
        browser.assert.enabled('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button')

       
        browser.assert.containsText('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button', 'Login')

        browser.assert.title('Monster Dream Team')
        // browser.assert.urlContains('monster/')
        //   browser.assert.urlEquals('https://glitchitsystem.com/monster/')

          browser.click('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button')
          browser.click('body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)')
          browser.click('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)')
          browser.assert.selected('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)')



        .pause(3000)
        // .setValue('#username', 'bob@bob.com')
        // .setValue('#password', 'Test123')
        // .click('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button')
        
        // .click('body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)')
        // .getAlertText(function(text) {
        //     console.log(text.value)
        // })
        // .dismissAlert()
        // .pause(3000)
        // .click('body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)')
        // .acceptAlert()

        // .pause(3000)

    })
    test('Test for attributes', function(browser) {
        browser.assert.attributeContains('#username', 'placeholder', 'example')
        browser.assert.attributeEquals('#username', 'placeholder', 'example@example.com')

        browser.assert.cssClassPresent('#username', 'form-control')
    })
})