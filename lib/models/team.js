'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TeamSchema = new Schema({
  key: String,
  title: String,
  code: String
});

mongoose.model('Team', TeamSchema);
