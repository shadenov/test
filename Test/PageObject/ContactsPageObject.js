var ContactsPage = function(){}

ContactsPage.prototype = Object.create({},{
    contactsPageHeader: {get: function(){return element(By.css('body > div > div > address:nth-child(1) > h2'))}},
    phoneNumberPresenter: {get: function(){return element(By.css('body > div > div > address:nth-child(1) > h3'))}},
    emailTxtPresenter: {get: function(){return element(By.css('body > div > div > address:nth-child(2) > h3 > a'))}}
})
module.exports = ContactsPage