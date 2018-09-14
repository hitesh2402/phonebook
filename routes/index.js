const express = require('express'),
      router = express.Router();

router.use('/employees', require('./employees'))
router.use('/phonebook', require('./phonebook'))

router.get("/hello", function (req, res) {
	res.send("Welocome to Hitesh's Phonebook directory");
});

module.exports = router;
