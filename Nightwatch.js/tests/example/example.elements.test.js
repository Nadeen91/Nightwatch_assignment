


describe('Sample Elements Test SubmitEvent', function() {
//     test('Get text from page', function(broser) {
//         browser
//         .url('https://glitchitsystem.com/monster/')
//         .getText('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > label', function(result) {
//             console.log('Label value: ' + result.value)
            // console.log(result)

        // } )
        // Open site
        // Get text of element
        // body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > label
        // console log text
    // })

    // test('Set text in fields', function(broser) {
    //     browser
    //     .url('https://glitchitsystem.com/monster/')
    //     .setValue('#username', 'example Username')
    //     .pause(2000)
    //     .setValue('#password', 'example password')
    //     .pause(2000)
    //     .getValue('#username', function(result) {
    //         console.log('This is the username:' + result.value)
    //     })
    //     .getValue('#password', function(result) {
    //         console.log('This is the password:' + result.value)
    //     })
    //     .clearValue('#username')
    //     .pause(3000)    
    //     //id="username"
            
    //  })

    test('click everything', function(browser) {
        browser
        .url('https://glitchitsystem.com/monster/')
        .pause(3000)
        .click('#username')
        .pause(3000)
        .click('#password')
        .pause(3000)
        .click('body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button')
    })
})