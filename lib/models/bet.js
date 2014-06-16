'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BetSchema = new Schema({
  user: { type: String, ref: 'User' },
  match: { type: Number, ref: 'Match' },
  homeScore: Number,
  awayScore: Number,
  date: Date
});

mongoose.model('Bet', BetSchema);
