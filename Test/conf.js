exports.config = {
    framework: 'jasmine',
    multiCapabilities: [
    {
      'browserName': 'chrome',
      'chromeOptions': {
        //args: ['--window-size=1920,1080']
      }
    }
  ],
    chromeOnly: true,
    onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },
    
    specs:['./Test/Main_Page.js'],
   
    jasmineNodeOpts:{
        defaultTimeoutInterval: 30000,
        showColors: true
    }
}