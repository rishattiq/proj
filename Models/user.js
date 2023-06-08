var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: { 
        type: String, 
        required: true, 
        index: { unique: true } 
    },
    password: { 
        type: String, 
        required: true, 
    },
    role: { 
        type: String, 
        default:'user', 
    }

});


module.exports = mongoose.models.User || mongoose.model('User', UserSchema);

