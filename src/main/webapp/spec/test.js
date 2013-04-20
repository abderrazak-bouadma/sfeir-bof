//
var baseUrl = 'http://sfeir-bof-organizer.appspot.com/#/'
var localhostBaseUrl = 'http://localhost:8080/#/'

//
var Browser = require("zombie")
var EventEmitter = require("events").EventEmitter
var should = require('chai').should()
var browser = new Browser()

// to void nodejs event emitter limitation
var eventEmitter = new EventEmitter()
eventEmitter.setMaxListeners(0)

//
describe('Wizards Test Suite', function () {

    // test #1
    it('Should test@sfeir.com log into app', function () {

        console.log(browser)
        browser.visit(baseUrl, function (done) {
            var uEmail = 'test@sfeir.cAbderrazakom'
            var uPassword = 'test'
            browser.
                fill('uEmail', uEmail).
                fill('uPassword', uPassword).
                pressButton("Sign in", function () {
                    var ct = browser.query('conferenceTable')
                    browser.success.should.equal(200)
                    ct.should.exist
                })
                done()
        })
    })

    // test #1
    it('Should make 100 visite', function (done) {
        for(var i=0;i<=100; i++) {
            browser.visit(baseUrl, function () {})
        }
        done()
    })

    // test #2
    it('Should store user in a cookie', function(done) {

        browser.visit(baseUrl, function () {
            var uEmail = 'test@sfeir.com'
            var uPassword = 'test'
            console.log(browser.cookies)
            browser.
                fill('#uEmail', uEmail).
                fill('#uPassword', uPassword).
                pressButton("Sign in", function () {
                    browser.success.should.equal(200)
                    browser.cookies.get('username').equal('Abderrazak')
                })
            done()
        })
    })


});
