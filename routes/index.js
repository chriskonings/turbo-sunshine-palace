var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');
var Twit = require('twit')

/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.render('index', { title: 'Hursley Hack'});
});


router.get('/tweet', function(req,res,next) {
    
    
    //Make call to Twitter
    var T = new Twit({
      consumer_key:         'AZYzHDduJnkbpGGllCkj2AD19',
      consumer_secret:      'SihWaEhY082FmvAjjI2HCWjEJ9JUzDWWrZiPHvu9pAgnBvo0YA',
      access_token:         '707921920042409984-9SuYuGDr8rFEe7dyRSqiWdGKz5W0WE0',
      access_token_secret:  'lZIYNfEDFW3sQWGI1sKCW7ujXep8wlUDPI2LTm1tcVJFP',
      timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
    })
    
    //I.e. get all tweets which match some query
    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response){
    //console.log(data)
    res.json(data);
        
        
        // 'data' contains all the results from the twitter API call
    })
    
   //res.json({hello: "world"}); 
});


module.exports = router;