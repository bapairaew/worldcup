'use strict';

var mongoose = require('mongoose'),
    Match = mongoose.model('Match'),
    Team = mongoose.model('Team');

exports.list = function(req, res) {
  return Match.find({})
    .exec(function (err, matches) {
      if (!err) {
        return res.json(matches);
      } else {
        return res.send(err);
      }
    });
};

exports.updateGame = function(req, res, next) {
  var role = String(req.user.role);
  if (role !== 'admin') {
    res.send(401);
  } else {
    var matchnum = Number(req.body.matchnum);
    var home = String(req.body.home);
    var away = String(req.body.away);

    Match.findOne({ matchnum: matchnum })
      .exec(function (err, match) {
        if (err) {
          res.send(400);
        } else {
          Team.findOne({ $or:[ { title: home }, { key: home }, { code: home } ] })
            .lean()
            .exec(function (err, home) {
              if (err) {
                res.send(400);
              } else {
                Team.findOne({ $or:[ { title: away }, { key: away }, { code: away } ] })
                  .lean()
                  .exec(function (err, away) {
                    if (err) {
                      res.send(400);
                    } else {
                      match.home = home;
                      match.away = away;
                      match.save(function (err) {
                        if (err) {
                          return res.send(400);
                        } else {
                          res.send(200);
                        }
                      });
                    }
                  });
              }
            });
        }
      });
  }
};

exports.updateScore = function(req, res, next) {
  var role = String(req.user.role);
  if (role !== 'admin') {
    res.send(401);
  } else {
    var matchnum = Number(req.body.matchnum);
    var homeScore = Number(req.body.homeScore);
    var awayScore = Number(req.body.awayScore);

    Match.findOne({ matchnum: matchnum }, function (err, match) {
      if (err) {
        res.send(400);
      } else {
        match.homeScore = homeScore;
        match.awayScore = awayScore;
        match.save(function (err) {
          if (err) return res.send(400);

          res.send(200);
        });
      }
    });
  }
};
