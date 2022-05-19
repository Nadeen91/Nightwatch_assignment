



describe('Navigation Test Suite', function() {
    test.skip('Navigate to a URL', function(browser) {
        browser.url('https://glitchitsystem.com/monster/')
        .pause(5000)
    })

    test.skip('Navigation Test 2', function(browser) {
        browser.init()
    })

    test.skip('Back and Forth', function(browser) {
        browser.init()
        browser.url(browser.launch_url + '/monster')
        .back()
        .forward()
       .setValue('#username', 'Hello there!!')
        .pause(4000)
        .refresh()
        .pause(4000)
    })

    test('Test the title', function(browser) {
        browser.init()
        .title(function(title) {
            console.log('This is the title: ' + title.value)
        })
        .getTitle(function(titleAlso) {
            console.log('This is also the title: ' + titleAlso)
        })
    })


})



