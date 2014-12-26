var internals = {};

module.exports = internals.Brag = function (options) {

    this.getNotifyCommands = exports.getNotifyCommands;
    this.getElements = exports.getElements;
};

exports.getNotifyCommands = function (notify) {

   var cmds = [];
   cmds.push('echo "' + notify.body +'" | /usr/bin/mail -s "' + notify.subject + '" ' + notify.to);
   return cmds;
};

exports.getElements = function() {

    var elements = [];
    elements.push({ 'tag': 'To', fieldType: 'text', name: 'notify_to', placeHolder: 'lloyd.benson@gmail.com' });
    elements.push({ 'tag': 'Subject', fieldType: 'text', name: 'notify_subject', placeHolder: '[ficion] subject' });
    elements.push({ 'tag': 'Body', fieldType: 'textarea', name: 'notify_body', placeHolder: 'body' });
    return elements;
}
