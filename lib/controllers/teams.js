'use strict';

var mongoose = require('mongoose'),
    Team = mongoose.model('Team');

exports.list = function(req, res) {
  return Team.find(function (err, teams) {
    if (!err) {
      return res.json(teams);
    } else {
      return res.send(err);
    }
  });
};
