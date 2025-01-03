const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    resource: { type: mongoose.Schema.Types.ObjectId, required: true } ,
    timestamp: { type: Date, default: Date.now }
});

const notificationsModel = mongoose.model('Notification', notificationSchema);

module.exports = { notificationsModel };
