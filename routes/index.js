var express = require('express');
var router = express.Router();
var async = require('async');
var db = require('../dbconfig');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let data = await db.query('SELECT * FROM postgresqltable');
  res.render('index', { title: 'PostgreSQL', data: JSON.stringify(data.rows) });
});

module.exports = router;
