var db = require("../models");

module.exports = function(app){

     app.post("/api/A1C", function(req, res){
      db.A1C.create({
          testDate: req.body.date,
          level: req.body.level
      }).then(function(dbA1C){
            res.json(dbA1C);
      });
    });

};