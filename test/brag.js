var Code = require('code');
var Lab = require('lab');
var Brag = require('../lib');

var internals = {};

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.describe;
var it = lab.it;

describe('brag', function () {

    it('sendEmail', function (done) {

        var notify = {
            to: 'lloyd.benson@gmail.com',
            subject: '[ficion] subject',
            message: 'message'
        };
        var brag = new Brag({});
        brag.sendEmail(notify, function (err, info) {

            //console.log(err);
            //console.log(info);
            expect(err).to.exist();
            done();
        });
    });

    it('getElements', function (done) {

        var brag = new Brag({});
        var elements = brag.getElements();
        expect(elements).to.be.length(3);
        done();
    });

});
