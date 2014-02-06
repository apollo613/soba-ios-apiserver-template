var Post = require('./../models/post').Post;

module.exports = {
  index: function(req, res) {
    console.log('posts index');
    Post.find({}, function(err, posts) {
      if (err) {
        res.status(500).json({err: 'internal error'});
      } else {
        res.json(posts);
      }
    });
  },
  show: function(req, res) {
    console.log('posts index');
    Post.findById(req.params.id, function(err, post) {
      if (err) {
        res.status(500).json({err: 'internal error'});
      } else {
        res.json(post);
      }
    });
  },
  create: function(req, res) {
    console.log('posts create', req.params, req.body);
    Post.create(req.body, function(err, post) {
      if (err) {
        res.status(500).json({err: 'internal error'});
      } else {
        res.json(post);
      }
    });
  },
  update: function(req, res) {
    console.log('posts update', req.params, req.body);
  },
destroy: function(req, res) {
  console.log('posts destroy', req.params, req.body);
  Post.remove( {_id: req.params.id}, function(err) {
    if (err) {
      res.status(500).json({err: 'internal error'});
    } else {
      res.json({msg:'success'});
    }
  });
}
};