'use strict';

module.exports = function(app) {
    var users = require('../../../users/server/controllers/users.server.controller');
    var messages = require('../controllers/messages.server.controller');

    // Messages Routes
    app.route('/messages/:userId')
        .get(users.requiresLogin, messages.list)
        .post(users.requiresLogin, messages.create);

    app.route('/messages/:userId/:messageId')
        .get(users.requiresLogin, messages.read)
        .delete(users.requiresLogin, messages.hasAuthorization, messages.delete);

    // Finish by binding the Message middleware
    app.param('messageId', messages.messageByID);
};
