var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.redirect("https://www.baidu.com");
  res.send("hello");
});

module.exports = router;
