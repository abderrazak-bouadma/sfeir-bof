
//
var baseUrl = 'http://sfeir-bof-organizer.appspot.com/#/'
var localhostBaseUrl = 'http://localhost:8080/#/'

//
var Browser = require("zombie")
var assert = require("assert")
var should = require('chai').should()

//
describe('Wizards Test Suite', function () {
    it('Should test@sfeir.com log into app', function () {
        var browser = new Browser()
        console.log(browser)
        browser.visit(localhostBaseUrl, function () {
            var uEmail = 'test@sfeir.cAbderrazakom'
            var uPassword = 'test'
            browser.
                fill('uEmail', uEmail).
                fill('uPassword', uPassword).
                pressButton("Sign in", function () {
                    var ct = browser.query('conferenceTable')
                    browser.success.should.equals(200)
                    ct.should.exist
                })
        })
    })

    it('Should store user in a cookie', function() {
        var browser = new Browser()
        browser.visit(baseUrl, function () {
            var uEmail = 'test@sfeir.com'
            var uPassword = 'test'
            browser.
                fill('uEmail', uEmail).
                fill('uPassword', uPassword).
                pressButton("Sign in", function () {
                    browser.success.should.equals(200)
                    //browser.cookies.get('username').equals('Abderrazak')
                })
        })

        browser.close()
    })
});
