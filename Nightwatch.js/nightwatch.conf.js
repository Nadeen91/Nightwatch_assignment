module.exports = {
    "src_folders" : ["designory_assessment"],
    // "page_objects_path" : ["page-objects"],

    "webdriver" : {
        "start_process" : true,
  

        "server_path" : require('chromedriver').path,
        "port" : 9515
    },

    "test_settings" : {
        "default" : {
            "launch_url" : "https://www.designory.com/",
            "desiredCapabilities" : {
                "browserName" : "chrome"
            }
        }
    }
}