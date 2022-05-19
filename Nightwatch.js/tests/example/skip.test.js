


describe('Skip Tests Suite', function() {
    test ('Test 1', function(browser) {
        browser.url('https://glitchitsystem.com/monster/')
        console.log('Test 1 Ran')
    })

    test('Test 2', function(browser) {
        browser.url('https://glitchitsystem.com/monster/')
        console.log('Test 1 Ran')
    })

    test('Test 3', function(browser) {
        browser.url('https://glitchitsystem.com/monster/')
        console.log('Test 1 Ran')
    })
})