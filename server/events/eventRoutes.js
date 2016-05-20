var eventController = require('./eventController.js')

module.exports = function(app) {

  app.get('/api/v1/events/', eventController.getEvents);
  app.post('/api/v1/events/', eventController.createEvent);
  app.delete('api/v1/events/', eventController.deleteEvent);
}