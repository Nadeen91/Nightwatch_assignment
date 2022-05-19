module.exports = {
    'Sample Test' : function(browser) {
        browser
        .url('http://glitchitsystem.com/')
        .waitForElementVisible('body')
        .assert.titleContains('GlitchITSystem')

        .end();
    }
}