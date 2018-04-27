module.exports = {
    rootUrl: 'http://127.0.0.1:3000',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',

    browsers: {
        chromeDesktop: {
            desiredCapabilities: {
                browserName: 'chrome',
            },
            screenshotMode:'viewport',
            windowSize: '1376x768',
            compositeImage: true,
        },
        chromeMobile:{
            desiredCapabilities: {
                browserName: 'chrome',
            },
            screenshotMode:'viewport',
            windowSize: '375x667',
            compositeImage: true,
        }
    },

    sets: {
        desktop:{
            files:['./gemini/suites/collection-desktop','./gemini/suites/preview-desktop'],
            browsers: ['chromeDesktop']
        },
        mobile:{
            files:['./gemini/suites/collection-mobile','./gemini/suites/preview-mobile'],
            browsers: ['chromeMobile']
        }
    }

};
