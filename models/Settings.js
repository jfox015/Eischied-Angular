var mongoose = require('mongoose');

var settingsSchema = new mongoose.Schema({
    
    siteName: String,
    ownerName: String,
    ownerEmail: String,
    siteStatus: Number,
    allowRegistration: Number,
    userActivation: Number
    
});

/**
 * Helper method for validating user's password.
 */
settingsSchema.methods.getSiteName = function(cb) {
  cb(null, this.siteName);
};
/**
 * Helper method for validating user's password.
 */
settingsSchema.methods.isSiteActive = function(cb) {
  cb(null, this.siteStatus === 1);
};

module.exports = mongoose.model('Settings', settingsSchema);