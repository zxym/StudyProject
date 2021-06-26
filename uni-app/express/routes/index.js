var express = require('express');
var router = express.Router();

var db = require("../server/db.js")
/* GET home page. */
router.get("/", (req, res, next) => {
 // sql查询user表
 db.query("SELECT * FROM `dt_article` WHERE id = 13", [], function (results, fields) {
  // 以json的形式返回
  res.json({ results })
 })
})

module.exports = router;
