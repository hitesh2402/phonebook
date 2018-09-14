const express = require('express'),
      router = express.Router();

var data = {
     858388193 : {
	     Name : "Nipun Kumar",
	     Occuppation : "Software Developer",
	     Organization : "Gemini Solutions",
	     Experities : "Expert Aalsi"
     }
};

router.get("/:id", function (req, res) {
  if(data[req.params.id] !== undefined){
    res.status(200).send(data[req.params.id]);
  } else {
    res.status(404).send("Oops! 404: Details not found!");
  }
});

router.get("/", function(req, res) {
   res.status(200).send(data);
});


module.exports = router;
