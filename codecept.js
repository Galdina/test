var port = 4444;
if(process.env.BROWSER == 'phantomjs')
  port = 3244;

exports.config = {

    tests: process.env.SUITE_TESTS || './tests/*/*_test.js',
    timeout: 10000,
    output: './output/',

    helpers: {
        WebDriverIO: {
            url: process.env.BASE_URL || 'https://ru.4gametest.com',
            browser: process.env.BROWSER || 'chrome',
            windowSize: process.env.SCREEN || '1360x840',
            port: port,
            waitForTimeout: 30,
            desiredCapabilities: {
                "IE_ENSURE_CLEAN_SESSION": true,
                "javascriptEnabled": true,
                "phantomjs.page.customHeaders.Accept-Language": "en_GB"
            }
        },
        WebdriverCSS: {
            require: 'helpers/webdrivercss_helper.js'
        },
        ForGame: {
            require: './helpers/forgame_helper.js'
        },
        TestApi: {
            require: './helpers/testapi_helper.js'
        },
        WebdriverIOExtra: {
            require: './helpers/webdriverioextra_helper.js'
        },
        MobileResolution: {
            require: "./helpers/mobile-resolution_helper.js"
        }
    },
    include: {
        I:                  "./steps_file.js",
        genericPage:        "./pages/generic.js",
        headerMenu:         "./pages/4gamer-header-switch-menu.js",
        indexPage:          "./pages/4gamer-index-page.js",
        mediaPage:          "./pages/4gamer-media-page.js",
        playPage:           "./pages/play.js",
        referralPage:       "./pages/referral-system-page.js",
        socialWidget:       "./pages/4gamer-social-widgets.js",
        spgPage:            "./pages/spg.js",
        installPage:        "./pages/aion-install-page.js"
    },
    bootstrap: false,
    mocha: {},
    name: '4game-feature-tests',
    checkLayoutEnabled: process.env.CHECK_LAYOUT_ENABLED || true
};
