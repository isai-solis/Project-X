var db = require("../models");

module.exports = function(app){

    // log a user's insulin dose and time measurement was taken 
    app.post("/api/meals", function(req, res){
      db.meals.create({
          meal: req.body.food,
          carbs: req.body.carbs,
          time: req.body.time,

      }).then(function(dbmeals){
            res.json(dbmeals);
      });
    });
};


