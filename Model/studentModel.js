
const mongoose = require('mongoose')

// Define a schema for student details using Mongoose Schema
const studentSchema = new mongoose.Schema({
    id: { type: Number },   
    name: { type: String },  
    gpa: { type: Number }    
})

// Export the mongoose model for student details using the defined schema
module.exports = mongoose.model("studentDetels", studentSchema);
