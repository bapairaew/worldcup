'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    teams = require('./controllers/teams'),
    matches = require('./controllers/matches'),
    bets = require('./controllers/bets'),
    predictions = require('./controllers/predictions'),
    users = require('./controllers/users'),
    session = require('./controllers/session');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes

  app.get('/api/matches', matches.list);
  app.post('/api/matches/game', matches.updateGame);
  app.post('/api/matches/score', matches.updateScore);

  app.get('/api/teams', teams.list);

  app.get('/api/bets', bets.list)
  app.get('/api/bets/:email', bets.search);
  app.post('/api/bets', bets.update);

  app.get('/api/predictions', predictions.list);
  app.get('/api/predictions/:email', predictions.search);

  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users', users.list);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};
