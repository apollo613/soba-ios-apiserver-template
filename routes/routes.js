var postsController = require('./../controllers/posts.js');
var commentsController = require('./../controllers/comments.js');

module.exports = {
  init: function(app) {
    app.get('/heartbeat', function(req, res) {
      res.send("it's alive! it's alive!!")
    });

    app.get(  '/api/posts',     postsController.index);
    app.get(  '/api/posts/:id', postsController.show);
    app.post( '/api/posts',     postsController.create);
    app.put(  '/api/posts/:id', postsController.update);
    app.del(  '/api/posts/:id', postsController.destroy);

    app.get(  '/api/posts/:pid/comments',       commentsController.index);
    app.get(  '/api/posts/:pid/comments/:cid',  commentsController.show);
    app.post( '/api/posts/:pid/comments',       commentsController.create);
    app.put(  '/api/posts/:pid/comments/:cid',  commentsController.update);
    app.del(  '/api/posts/:pid/comments/:cid',  commentsController.destroy);
  }
};
