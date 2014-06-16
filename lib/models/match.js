'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    TeamSchema = require('./team');

var MatchSchema = new Schema({
  matchnum: Number,
  group: String,
  date: Date,
  home: { code: String, title: String, key: String },   // TODO:
  away: { code: String, title: String, key: String },   // TODO:
  homeScore: Number,
  awayScore: Number,
  location: String
});

mongoose.model('Match', MatchSchema);
