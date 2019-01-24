module.exports = function(app) {
  require("./models/models.server");
  require("./services/user.service.server")(app);  
  require("./services/reservation.service.server")(app);
  // require('./services/pizza.service.server')(app);
};
