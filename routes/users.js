var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool/', (req, res, next) => {
  res.render("prac", { title: 'Cool Example', content: 'I can do whatever I want whenever I want to do it'});
});

module.exports = router;
