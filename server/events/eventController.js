var Event = require('./eventModel.js');

module.exports = {
  createEvent: function(req, res, next) {
    var name       = req.body.name;
    var location   = req.body.location;
    var startTime  = req.body.startTime;
    var endTime    = req.body.endTime;
    var picUrl     = req.body.picUrl;
    var categories = req.body.categories;
    var usersAtt   = req.body.usersAtt;
    var owners     = req.body.owners;
    var description= req.body.description;
  },

  getEvents: function() {

  },

  deleteEvent: function() {

  },

  editEvent: function() {

  }

};