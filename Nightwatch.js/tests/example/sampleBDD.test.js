

describe('BDD Sample Test', function() {
    test('Open the Glitch site', function(browser) {
        browser
        .url('http://glitchitsystem.com/')
        .waitForElementVisible('body')
        .assert.titleContains('GlitchITSystem')

        .end();
    })
})