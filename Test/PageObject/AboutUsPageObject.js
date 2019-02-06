var AboutUs = function(){}

AboutUs.prototype = Object.create({},{
    aboutUsPageHeader: {get: function(){return element(By.css('body > div > h2'))}},
    bodyContainerTxt: {get: function(){return element(By.css('body > div > div'))}},
})
module.exports = AboutUs