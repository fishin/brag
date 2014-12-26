var Hoek = require('hoek');
var NodeMailer = require('nodemailer');

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

module.exports = function (options) {

   var settings = Hoek.applyToDefaults(internals.defaults, options);
   this.settings = settings;
   this.sendEmail = exports.sendEmail;
   this.getElements = exports.getElements;
};

exports.sendEmail = function (notify, callback) {

    var transporter = new NodeMailer.createTransport(this.settings.transporter);
    //console.log(transporter);
    var options = {
        from: 'lloyd.benson@gmail.com',
        to: notify.to,
        subject: notify.subject,
        text: notify.message
    };
    //console.log(options);

    transporter.sendMail(options, function(error, info){

        return callback(error, info);
    });

};

exports.getElements = function() {

    var elements = [];
    elements.push({ 'tag': 'To', fieldType: 'text', name: 'notify_to', placeHolder: 'lloyd.benson@gmail.com' });
    elements.push({ 'tag': 'Subject', fieldType: 'text', name: 'notify_subject', placeHolder: '[ficion] subject' });
    elements.push({ 'tag': 'Message', fieldType: 'textarea', name: 'notify_message', placeHolder: 'message' });
    return elements;
}
