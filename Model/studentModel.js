const mongoose = require('mongoose')

const studentSchame = new mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    gpa:{type:Number}
})

module.exports = mongoose.model("studentDetels",studentSchame);