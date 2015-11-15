'use strict';

const Hoek = require('hoek');
const NodeMailer = require('nodemailer');

const internals = {
    defaults: {
        from: 'donotreply@ficion.net'
    }
};

module.exports = internals.Brag = function (options) {

    const settings = Hoek.applyToDefaults(internals.defaults, options);
    internals.Brag.settings = settings;
    this.notify = exports.notify;
    this.getElements = exports.getElements;
};

exports.notify = function (notify, callback) {

    if (!internals.Brag.settings.transporter) {
        const err = 'no transporter provided';
        return callback(err, '');
    }
    const transporter = new NodeMailer.createTransport(internals.Brag.settings.transporter);
    //console.log(transporter);
    const options = {
        from: internals.Brag.settings.from,
        to: notify.to,
        subject: notify.subject,
        text: notify.message
    };
    //console.log(options);
    transporter.sendMail(options, (err, info) => {

        return callback(err, info);
    });
};

exports.getElements = function () {

    const elements = [];
    elements.push({ 'tag': 'To', fieldType: 'text', name: 'notify_to', placeHolder: 'lloyd.benson@gmail.com' });
    elements.push({ 'tag': 'Subject', fieldType: 'text', name: 'notify_subject', placeHolder: '[ficion] subject' });
    elements.push({ 'tag': 'Message', fieldType: 'textarea', name: 'notify_message', placeHolder: 'message' });
    return elements;
};
