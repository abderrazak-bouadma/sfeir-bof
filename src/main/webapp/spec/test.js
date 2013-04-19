
//
var baseUrl = 'http://sfeir-bof-organizer.appspot.com/'

//
var Browser = require("zombie")
var assert = require("assert")

//
describe('Wizards Test Suite', function() {
	it('Should test@sfeir.com log into app and stored within a cookie', function() {
		browser = new Browser()
		browser.visit(baseUrl, function() {
			var uEmail = 'test@sfeir.com'
			var uPassword = 'test'
			browser.
				fill("#uEmail", uEmail).
				fill("#uPassword", uPassword).
				pressButton("Sign in", function() {
					assert.ok(browser.success)
					assert.ok(browser.query("conferenceTable"))
					browser.close()
				})
		})
	})
})
