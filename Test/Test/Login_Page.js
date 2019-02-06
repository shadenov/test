fdescribe('Login page test', function(){
    it('should load the correct url', function(){
        
    browser.ignoreSynchronization = true
    browser.get('http://localhost:7772')
    element(by.css('#navbarNav > ul > li.nav-item.navLinkA > ul > li:nth-child(1) > a')).click()
    expect(element(by.css('body > div > h2')).isDisplayed()).toBe(true)
    element(by.id('Input_Name')).sendKeys('123@test.com')
    //element(by.id('Input_ImageFile')).click()
    $('input[type="file"]').sendKeys('C:/Users/Lenovo-PC/Pictures/MK10.jpg')

    //$('.btn-primary').click()
    element(by.id('Input_Email')).sendKeys('123@test.com')
    element(by.id('Input_Password')).sendKeys('123123')
    element(by.id('Input_ConfirmPassword')).sendKeys('123123')
    

    

    element(by.css('body > div > div > div > form > button')).click()
    browser.sleep(10000)
    })
})