'use strict';

const Code = require('code');
const Lab = require('lab');
const Brag = require('../lib');

const internals = {
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

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const describe = lab.describe;
const it = lab.it;

describe('brag', () => {

    it('notify', (done) => {

        const notify = {
            to: 'lloyd.benson@gmail.com',
            subject: 'subject',
            message: 'message'
        };
        const brag = new Brag(internals.defaults);
        brag.notify(notify, (err, info) => {

            //console.log(err);
            //console.log(info);
            expect(err.code).to.equal('EAUTH');
            done();
        });
    });

    it('notify no transporter', (done) => {

        const notify = {
            to: 'lloyd.benson@gmail.com',
            subject: 'subject',
            message: 'message'
        };
        const brag = new Brag({});
        brag.notify(notify, (err, info) => {

            //console.log(err);
            expect(err).to.equal('no transporter provided');
            done();
        });
    });

    it('getElements', (done) => {

        const brag = new Brag(internals.defaults);
        const elements = brag.getElements();
        expect(elements).to.be.length(3);
        done();
    });

});
