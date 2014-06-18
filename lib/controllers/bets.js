'use strict';

var mongoose = require('mongoose'),
    Match = mongoose.model('Match'),
    Bet = mongoose.model('Bet');


exports.list = function (req, res, next) {
  return Bet.find({})
    .exec(function (err, bets) {
      if (!err) {
        return res.json(bets);
      } else {
        return res.send(err);
      }
    });
};

exports.search = function (req, res, next) {
  var email = req.params.email;

  return Bet.find({ user: email })
    .exec(function (err, bets) {
      if (!err) {
        return res.json(bets);
      } else {
        return res.send(err);
      }
    });
};

exports.update = function (req, res, next) {
  var matchnum = Number(req.body.match);
  var homeScore = Number(req.body.homeScore);
  var awayScore = Number(req.body.awayScore);
  var user = String(req.user.name);

  Match.findOne({ matchnum: matchnum })
    .exec(function (err, match) {
      if (err) {
        res.send(400);
      } else {
        var now = new Date();
        var date = new Date(match.date);
        if (date < now) {
          res.send(405);
        } else {
          Bet.findOne({ match: matchnum, user: user })
            .exec(function (err, bet) {
              if (err) {
                return res.send(err);
              } else {
                if (bet) {
                  bet.homeScore = homeScore;
                  bet.awayScore = awayScore;
                  bet.date = now.toJSON();
                  bet.save(function (err) {
                    if (err) {
                      return res.send(400);
                    } else {
                      res.send(200);
                      console.log(user + ' bets #' + matchnum + ' ' + homeScore + ' - ' + awayScore);
                    }
                  });
                } else {
                  new Bet({
                    user: user,
                    match: matchnum,
                    homeScore: homeScore,
                    awayScore: awayScore,
                    date: now.toJSON()
                  }).save(function (err) {
                    if (err) {
                      return res.send(400);
                    } else {
                      res.send(200);
                      console.log(user + ' bets #' + matchnum + ' ' + homeScore + ' - ' + awayScore);
                    }
                  });
                }
              }
            });
        }
      }
    });
};
