var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/.well-known/pki-validation/AA046C55E9B2C374CC5720B84B1B0863.txt', function (req, res) {
  res.send('55A1969C1F465FBCAC5BAACBEC768B063186548033FBBF7134B8C37F9B04DB85 comodoca.com 5fd6916273b9d')
});
module.exports = router;
