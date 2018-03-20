/*----------------------------------------
/  NODE DEPENDANCIES
/---------------------------------------*/
var util = require('util');
var mongoose = require('mongoose');
/*----------------------------------------
/  LOCAL DEPENDANCIES
/---------------------------------------*/
var Settings = require('../../models/Settings');
/*------------------------------------------------------------------------------
/  
/  ROUTE HANDLERS
/  
------------------------------------------------------------------------------*/
/**
 * Home page
 * @route GET /admin/settings
 * @param Object req
 * @param Object res
 */
exports.getSettings = function(req, res) {

    res.render('admin/settings', {
        title: 'Site Settings',
        settings: req.settings
    });
};

/**
 * SAVE SETTINGS
 * @route POST /admin/settings
 * @param Object req
 * @param Object res
 * @param Object next
 * @return  Reloads page on error, returns to dashboard on success
 */
exports.postSettings = function(req, res, next) {
    req.assert('_id', 'ID required but not found').notEmpty();
    req.assert('siteName', 'Site Name cannot be blank').notEmpty();
    req.assert('ownerName', 'Site Woner Name cannot be blank').notEmpty();
    req.assert('ownerEmail', 'Owner Email cannot be blank').notEmpty();
    req.assert('ownerEmail', 'Valid Email Address required').isEmail();
    req.assert('siteStatus', 'Site Status mits be a number value').isInt();

    var errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/admin/settings');
    }
    var _Id = mongoose.Types.ObjectId(req.body._id);
        
    var setting = {
        siteName: req.body.siteName,
        ownerName: req.body.ownerName,
        ownerEmail: req.body.ownerEmail,
        siteStatus: req.body.siteStatus,
        allowRegistration: (typeof req.body.allowRegistration !== "undefined") ? 1 : -1,
        userActivation: (typeof req.body.userActivation !== "undefined") ? 1 : -1
    };
    Settings.findOneAndUpdate({_id: _Id},setting, function (err) {
        if (err) return next(err);
        req.flash('success', { msg: 'Site settings sucessfully updated.' });
        res.redirect('/admin/dashboard');
    });
};

/**
 * GET SETTING BY KEY
 * @route GET /api/setting/:key
 * @param Object req
 * @param Object res
 */
exports.getSetting = function(req, res) {
  Settings
    .findBy(req.params.key, function(err, setting) {
        if (!err) {
            return res.send({ status: 200, message: "Request Successful", data: setting});
        } else {
            res.send({status: 500, errors: err});
        }
    });
};
