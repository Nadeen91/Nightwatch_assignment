



describe('BDD Exercise test', function()
 {

    beforeEach(function(browser) {
        browser.url('https://glitchitsystem.com/monster/')
    })

    test('Click the text field with error message desplay', function(browser) {
        browser
        .click('#username')
        .click('#password')
        .click('#username')
        .getText('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > p', function(result) {
            console.log('Username error: ' + result.value)
        })
        .getText('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(2) > div > div > p', function(result) {
            console.log('Pasword error' + result.value)
        })
        .pause(5000)
        
    })

    test('Invalid login error message', function(browser) {
        browser
        .setValue('#username', 'test@test.com')
        .setValue('#password', 'password')
        .click('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button')
        .getText('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > p', function(result) {
            console.log('Login error message: ' + result.value)
        })
        .pause(5000)
    })

    test('Valid login', function(browser) {
        browser
        .setValue('#username', 'bob@bob.com')
        .setValue('#password', 'Test123')
        .click('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button')
        .pause(5000)
    })
})