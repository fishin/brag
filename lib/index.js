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
       },
       from: 'donotreply@ficion.net',
       subjectHeader: '[ficion]'
   }
};

module.exports = internals.Brag =  function (options) {

   var settings = Hoek.applyToDefaults(internals.defaults, options);
   internals.Brag.settings = settings;
   this.notify = exports.notify;
   this.getElements = exports.getElements;
};

exports.notify = function (notify, callback) {

    var transporter = new NodeMailer.createTransport(internals.Brag.settings.transporter);
    //console.log(transporter);
    var options = {
        from: internals.Brag.settings.from,
        to: notify.to,
        subject: internals.Brag.settings.subjectHeader + ' ' + notify.subject,
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
