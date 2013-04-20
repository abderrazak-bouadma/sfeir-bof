var baseUrl = 'http://sfeir-bof-organizer.appspot.com/#/'
var localhostBaseUrl = 'http://localhost:8080/#/conference/0'

//
var Browser = require("zombie")
var assert = require("assert")
var should = require('chai').should()
var browser = new Browser()

describe('Conference 0 TestSuite', function() {
    it('Should  insert of a new track', function() {

        browser.visit(localhostBaseUrl, function(done) {
        var oldLength = browser.query('.table tbody tr').length
        var oldTrackCounter = browser.query('#nbTracks')
        browser.fill('uTrackTitle','TEST_TRACK').
            fill('uTrackTimeSlot',45).
            fill('uTrackSpeaker','test@sfeir.com').
            pressButton('add',function() {
                browser.query('.table tbody tr').length.should.equal(oldLength + 1)
                oldTrackCounter.should.not.equal(oldTrackCounter)
                // selector to get last row of a table tr:nth-last-child(1)
            })
            done()

        })
    })
})