var express = require('express');


var routes = function(Author){
    
var authorRouter = express.Router();

authorRouter.route('/')
    .post(function(req,res){
        var author = new Author(req.body);

        author.save();
        res.status(201).send(author);

    })

    .get(function(req, res){

        var query = {};

        if(req.query.genre){
            query.genre = req.query.genre;
        }

        Author.find(query, function(err, authors){
            if(err)
                res.status(500).send(err);

            else
                res.json(authors);
        })
        
    })

authorRouter.route('/Authors/:authorId')
    .get(function(req, res){
        Author.findById(req.params.authorId, function(err, author){
            if(err)
                res.status(500).send(err);
            else
                res.json(author);
        })  
    });
    return authorRouter;
};

module.exports = routes;