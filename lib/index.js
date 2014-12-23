var internals = {};

module.exports = internals.Brag = function (options) {

    this.getNotifyCommand = exports.getNotifyCommand;
    this.getElements = exports.getElements;
};

exports.getNotifyCommand = function (notify) {

   var cmd = null;
   cmd = 'echo "' + notify.body +'" | /usr/bin/mail -s "' + notify.subject + '" ' + notify.to;
   return cmd;
};

exports.getElements = function() {

    var elements = [];
    elements.push({ 'tag': 'To', fieldType: 'text', name: 'notify_to', placeHolder: 'lloyd.benson@gmail.com' });
    elements.push({ 'tag': 'Subject', fieldType: 'text', name: 'notify_subject', placeHolder: '[ficion] subject' });
    elements.push({ 'tag': 'Body', fieldType: 'textarea', name: 'notify_body', placeHolder: 'body' });
    return elements;
}
