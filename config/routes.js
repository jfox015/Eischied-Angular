const passport = require('passport');
const passportConfig = require('./passport');
const multer = require('multer');

/**
 * Controllers (route handlers).
 */
const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const contactController = require('../controllers/contact');

var episodeController = require('../controllers/episodes');
var adminController = require('../controllers/admin/admin');
var settingsController = require('../controllers/admin/settings');
/**
 * ROUTES
 * 
 * @param Express App app
 * @package config.routes
 */
module.exports = function(app, destObj){

	const upload = multer(destObj);
	/**
	 * Primary app routes.
	 */
	app.get('/', homeController.index);

	// ACOUNT/USER URLs
	app.get('/login', userController.getLogin);
	app.post('/login', userController.postLogin);
	app.get('/logout', userController.logout);
	app.get('/forgot', userController.getForgot);
	app.post('/forgot', userController.postForgot);
	app.get('/reset/:token', userController.getReset);
	app.post('/reset/:token', userController.postReset);
	app.get('/signup', userController.getSignup);
	app.post('/signup', userController.postSignup);
	app.get('/contact', contactController.getContact);
	app.post('/contact', contactController.postContact);
	app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
	app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
	app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
	app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
	app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);

	// USERS (AUTHENTICATED ONLY)
    app.route('/users')
    	.all(passportConfig.isAuthenticated)       
    	.get(userController.getUsers);

	/**
	 * OAuth authentication routes. (Sign in)
	 */

	app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
	app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
	  res.redirect(req.session.returnTo || '/');
	});
	app.get('/auth/twitter', passport.authenticate('twitter'));
	app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
	  res.redirect(req.session.returnTo || '/');
	});
	app.get('/episodes', episodeController.viewEpisodes);
    
    /*------------------------------------------
    /   RESTful APIs
    /------------------------------------------*/
    app.route('/api/episodes')
            .get(episodeController.getEpisodes)
            .post(episodeController.postEpisodes);
    
    app.route('/api/episode/:id')
            .get(episodeController.getEpisode)
            .put(episodeController.putEpisode);
    
    app.get('/api/episode/delete/:id', episodeController.getDelete);
    /*--------------------------------------------------------
    /	USER ACCOUNT API
    /-------------------------------------------------------*/
    app.get('/api/account/status', userController.getLoggedInStatus);

     /*------------------------------------------
    /   ADMINISTRATIVE DASHBOARD
    /   Authentication is required for all paths
    /------------------------------------------*/
    app.get('/admin/dashboard', passportConfig.isAuthenticated, adminController.index);
    
    app.route('/admin/settings')
            .all(passportConfig.isAuthenticated)
            .get(settingsController.getSettings)
            .post(settingsController.postSettings);
};