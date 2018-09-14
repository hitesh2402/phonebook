const express = require("express");
const app = express();

app.use(require('morgan')('dev'));

app.listen(3000, function () {
 console.log("App listening on port 3000!");
});

app.get("/hello", function (req, res) {
	res.send("Welocome to Hitesh's Phonebook directory");
});

app.get("/phonebook/v1/:id", function (req, res) {
  if(data[req.params.id] !== undefined){
    res.status(200).send(data[req.params.id]);
  } else {
    res.status(404).send("Oops! 404: Details not found!");
  }
});

var data = {
     858388193 : {
	     Name : "Nipun Kumar",
	     Occuppation : "Software Developer",
	     Organization : "Gemini Solutions",
	     Experities : "Expert Aalsi"
     }
};
