var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  event_name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  start_time: {
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },  
  pic_url: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  users_att: {
    type: Array,
    required: true,
  },
  owners: {
    type: Array,
    required: true,
  },
  creation_time: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model('events', EventSchema);