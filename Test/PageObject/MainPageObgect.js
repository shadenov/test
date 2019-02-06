var MainPage = function(){}
MainPage.prototype = Object.create({},{
    mainPageTitle: {get: function () { return element(By.css('body > header > div > nav > a'))}},
    mainNavBar: {get: function (){return element(By.css('#navbarNav > ul > li:nth-child(1) > a'))}},
    contactsNavBar: {get: function (){return element(By.css('#navbarNav > ul > li:nth-child(2) > a'))}},
    aboutUsNavBar: {get: function (){return element(By.css('#navbarNav > ul > li:nth-child(3) > a'))}},
    registrationNavBar: {get: function (){return element(By.css('#navbarNav > ul > li.nav-item.navLinkA > ul > li:nth-child(1) > a'))}},
    entetNavBar: {get: function (){return element(By.css('#navbarNav > ul > li.nav-item.navLinkA > ul > li:nth-child(4) > a'))}},
    mainPageCotegori: {get: function (){return element(By.css('body > div > div > h2'))}},
    firstPageImg: {get: function (){return element(By.css('body > div > div > div > div:nth-child(1) > div > a > img'))}},
    secondPageImg: {get: function (){return element(By.css('body > div > div > div > div:nth-child(2) > div > a > img'))}},
    thirdPageImg: {get: function (){return element(By.css('body > div > div > div > div:nth-child(3) > div > a > img'))}},
    firstImgTxt: {get: function (){return element(By.css('body > div > div > div > div:nth-child(1) > div > div > h5'))}},
    secondImgTxt: {get: function (){return element(By.css('body > div > div > div > div:nth-child(2) > div > div > h5'))}},
    thirdImgTxt: {get: function (){return element(By.css('body > div > div > div > div:nth-child(3) > div > div > h5'))}},
    firstImgBtn: {get: function (){return element(By.css('body > div > div > div > div:nth-child(1) > div > div > a'))}},
    secondImgBtn: {get: function (){return element(By.css('body > div > div > div > div:nth-child(2) > div > div > a'))}},
    thirdImgBtn: {get: function (){return element(By.css('body > div > div > div > div:nth-child(3) > div > div > a'))}},
    bodyFooter: {get: function(){return element(By.css('body > footer > p'))}},
})
module.exports = MainPage