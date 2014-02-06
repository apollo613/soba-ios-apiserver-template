var Comment = require('./../models/comment');

module.exports = {
  index: function(req, res) {
    console.log('comments index');
    res.json( Comment.allForPost(req.params.pid) );
  },
  show: function(req, res) {
    console.log('comments index');
    res.json( {} );
  },
  create: function(req, res) {
    console.log('comments create', req.params, req.body);
  },
  update: function(req, res) {
    console.log('comments update', req.params, req.body);
  },
  destroy: function(req, res) {
    console.log('comments destroy', req.params, req.body);
  }
};