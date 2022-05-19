


describe('Exercis1 Assertions Test Suite', function() {
    beforeEach(function(browser) {
        browser.url('http://glitchitsystem.com/monster')
    })
test('Correct url after login', function(browser) {
    browser.setValue('#username', 'bob@bob.com')
    .setValue('#password', 'Test123')
    .click('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button')
    browser.expect.url().to.equal('https://glitchitsystem.com/monster/mine')

    browser.click('body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)')
    browser.setValue('#name', 'Nadiia')
    browser.assert.value('#name', 'Nadiia')
    
    browser.click('#favorite')
    .pause(3000)

    browser.verify.not.selected('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)')
    browser.verify.not.selected('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)')
    browser.verify.not.selected('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)')
    browser.verify.not.selected('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)')

    browser.click('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)')
    browser.verify.not.selected('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)')
    browser.verify.not.selected('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)')
    browser.verify.not.selected('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)')

    browser.expect.element('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)').to.have.attribute('value').equals('soldier')
    browser.expect.element('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)').to.have.attribute('value').equals('medic')
    browser.expect.element('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)').to.have.attribute('value').equals('shield')
    browser.expect.element('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)').to.have.attribute('value').equals('thief')
    browser.setValue('#description', 'Test')
    .pause(3000)
    browser.click('body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(1) > div > button.btn.btn-success')
    browser.pause(3000)
})


})
