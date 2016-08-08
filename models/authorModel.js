var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var authorModel = new Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    gender:{
        type: String
    },
    birthDate:{
        type: Date
    },
    booksWritten:{
        type: Number,
    },
});

module.exports = mongoose.model('Author', authorModel);
