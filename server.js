var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static("public"));

require("./routes/activity-api-routes.js")(app);
require("./routes/bloodSugarM-api-routes.js")(app);
require("./routes/insulin-api-routes.js")(app);
require("./routes/meals-routes.js")(app);
require("./routes/medications-api-routes.js")(app);
require("./routes/userInfo-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("Application listening on PORT " + PORT);
    });
});