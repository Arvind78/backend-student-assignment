// Require necessary libraries and models
const express = require("express");
const mongoose = require('mongoose');
const studentModel = require("./Model/studentModel");

// Create an instance of Express
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Set view engine as EJS
app.set('view engine', 'ejs');

// Connect to MongoDB using Mongoose
mongoose.connect(`mongodb+srv://arvind_varma:arvind_varma@cluster0.vn12nqf.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log(`DATABASE CONNECTED`);
}).catch((err) => {
    console.log(err.message);
    process.exit(1);
})

// Route to add a new student
app.post("/", async (req, res) => {
    const newStudent = await studentModel.create({
        ...req.body
    })
    res.send(newStudent)
})

// Route to fetch all student data and render a view
app.get("/allStudent", async (req, res) => {
    const data = await studentModel.find({});
    console.log(data);
    res.render('student', { data: data, heading: "All Student Data!" })
})

// Route to fetch a specific student's details by ID and render a view
app.get("/student/:id", async (req, res) => {
    const data = await studentModel.find({ id: req.params.id });
    res.render('student', { data: data, heading: "Student Detail!" })
})

// Route to find the student with the highest GPA and render a view
app.get("/topper", async (req, res) => {
    const data = await studentModel.find({}).sort({ gpa: 1 }).limit(1);
    res.render('student', { data: data, heading: "All Student Data!" })
})

// Start the server on port 8080
app.listen(8080, () => {
    console.log(`Server Running on Port 8080`);
})



