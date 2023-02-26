const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    birthdate:{
        type: {
            month: {
                type: Number,
                required: true
            },
            day: {
                type: Number,   
                required: true
            },
            year: {
                type: Number,
                required: true
            }
        },
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})
module.exports = mongoose.model("Posts", PostSchema);
