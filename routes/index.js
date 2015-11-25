var child_process = require('child_process');
var services = require('../services.json');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Github Webhook');  
});

router.post('/', function(req, res, next) {
  var apiKey = req.query.apiKey;
  var service = services.filter(function(item) {
    return item.apiKey === apiKey; 
  });

  if(service.length !== 1) {
    return res.sendStatus('403'); 
  }
  
  var cmd = 'cd ' + service[0].path + ' && ' + service[0].cmd;
  child_process.exec(cmd, function (err, stdout, stderr){
    if (err) console.log(err);

    console.log(stdout);
  });
    
  res.send('OK');    
});

module.exports = router;
