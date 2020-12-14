var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/.well-known/pki-validation/AA046C55E9B2C374CC5720B84B1B0863.txt', function (req, res) {
  res.sendFile('.well-known/pki-vaidation/AA046C55E9B2C374CC5720B84B1B0863.txt')
});
module.exports = router;
