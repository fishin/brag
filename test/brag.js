var Code = require('code');
var Lab = require('lab');
var Brag = require('../lib');

var internals = {
    defaults: {
        transporter: {
            service: 'gmail',
            auth: {
                user: 'lloyd.benson@gmail.com',
                pass: 'password'
            }
        }
    }
};

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.describe;
var it = lab.it;

describe('brag', function () {

    it('notify', function (done) {

        var notify = {
            to: 'lloyd.benson@gmail.com',
            subject: 'subject',
            message: 'message'
        };
        var brag = new Brag(internals.defaults);
        brag.notify(notify, function (err, info) {

            //console.log(err);
            //console.log(info);
            expect(err.code).to.equal('EAUTH');
            done();
        });
    });

    it('notify no transporter', function (done) {

        var notify = {
            to: 'lloyd.benson@gmail.com',
            subject: 'subject',
            message: 'message'
        };
        var brag = new Brag({});
        brag.notify(notify, function (err, info) {

            //console.log(err);
            expect(err).to.equal('no transporter provided');
            done();
        });
    });

    it('getElements', function (done) {

        var brag = new Brag(internals.defaults);
        var elements = brag.getElements();
        expect(elements).to.be.length(3);
        done();
    });

});
