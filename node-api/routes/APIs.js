var express = require('express');
var router = express.Router();

router.route('/v1/:id').get(function(req, res){
	res.json({'version':'v1', 'id':req.params.id, 'Method':'GET'});
}).post(function(req, res){
	res.json({'version':'v1', 'id':req.params.id, 'Method':'POST'});
});

router.route('/v2/:id').get(function(req, res){
	res.json({'version':'v2', 'id':req.params.id, 'Method':'GET'});
}).post(function(req, res){
	res.json({'version':'v2', 'id':req.params.id, 'Method':'POST'});
});

module.exports = router;