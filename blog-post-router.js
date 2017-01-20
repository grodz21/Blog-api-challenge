const express = require('express');
const router = express.Router();

const blogPostModel = require('./models.js').BlogPosts;


router.get('/', function(req,res) {
	const matchingResults = blogPostModel.get(req.query.BlogPostId)

	res.status(200);
	res.send(matchingResults);

});

router.post('/', function(req,res) {
	
	const blogPostItem = blogPostModel.create(
		{author: req.body.author, content: req.body.content});
	res.status(201).json(blogPostItem);
});


router.put('/:id', function(req,res){
//make sure I am using the correct function from models.js
	const updatedPost = blogPostModel.update({
		id: req.params.id,
		title: req.body.title	
	});
	res.status(204).json(updatedPost);
});


router.delete('/:id', function(req,res){
	blogPostModel.delete(req.params.id);
	res.status(204).send();
});




module.exports = router;