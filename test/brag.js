var Code = require('code');
var Lab = require('lab');
var Brag = require('../lib');

var internals = {};

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.describe;
var it = lab.it;

var bragPath = '/tmp/testbrag';

describe('brag', function () {

    it('getNotifyCommand new', function (done) {
        var notify = {
            to: 'lloyd.benson@gmail.com',
            subject: '[ficion] subject',
            body: 'body'
        };
        var brag = new Brag;
        var command = brag.getNotifyCommand(notify);
        //console.log(command);
        expect(command).to.contain('echo "body" | /usr/bin/mail -s "[ficion] subject" lloyd.benson@gmail.com');
        done();
    });

    it('getElements', function (done) {

        var brag = new Brag;
        var elements = brag.getElements();
        //console.log(elements);
        expect(elements).to.be.length(3);
        done();
    });

});
