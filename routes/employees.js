const express = require('express'),
      router = express.Router();

var employees = {
	1 : {
		name : "hitesh"
	},

	2: {
		name : "nipun"
	}
};

router.get('/:id', function(req, res) {

  if(employees[req.params.id] !== undefined){
    res.status(200).send(employees[req.params.id]);
  } else {
    res.status(404).send("Oops! 404: Details not found!");
  }

});

router.get('/', function(req, res) {
    res.status(200).send(employees);    
});

module.exports = router;

