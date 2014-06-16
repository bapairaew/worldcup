'use strict';

var mongoose = require('mongoose'),
    Match = mongoose.model('Match'),
    Bet = mongoose.model('Bet');

exports.list = function(req, res, next) {
  return Match.find({})
    .lean()
    .exec(function (err, matches) {
      if (!err) {
        Bet.find({})
        .lean()
        .exec(function (err, bets) {
          if (!err) {
            matches.forEach(function (m) {
              m.bets = [];
              for (var i = 0; i < bets.length; i++) {
                if (bets[i].match == m.matchnum) {
                  m.bets.push(bets[i]);
                }
              }
            });
            return res.json(matches);
          } else {
            return res.send(err);
          }
        });
      } else {
        return res.send(err);
      }
    });
};

exports.search = function(req, res, next) {
  var email = req.params.email;

  return Match.find({})
    .lean()
    .exec(function (err, matches) {
      if (!err) {
        Bet.find({ user: email })
        .lean()
        .exec(function (err, bets) {
          if (!err) {
            matches.forEach(function (m) {
              m.bets = [];
              for (var i = 0; i < bets.length; i++) {
                if (bets[i].match == m.matchnum) {
                  m.bets.push(bets[i]);
                  break;
                }
              }
            });
            return res.json(matches);
          } else {
            return res.send(err);
          }
        });
      } else {
        return res.send(err);
      }
    });
};
