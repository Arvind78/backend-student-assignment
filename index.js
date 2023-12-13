const express = require("express");
const mongoose = require('mongoose');
const studentModel = require("./Model/studentModel");
 
const app = express();


app.use(express.json());
app.set('view engine', 'ejs');

mongoose.connect(`mongodb+srv://arvind_varma:arvind_varma@cluster0.vn12nqf.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log(`DATABASE__CONNECTED`);
}).catch((err) => {
    console.log(err.message);
    process.exit(1);
})


app.post("/",async(req,res)=>{
     const newStudent = await studentModel.create({
        ...req.body
     })
     res.send(newStudent)
})




app.get("/allStudent",async(req,res)=>{

    const data = await studentModel.find({});
    res.render('student',{data:data,heading:"All Student Data !"})
})


app.get("/student/:id",async(req,res)=>{
    const data = await studentModel.find({id:req.params.id});

    res.render('student',{data:data,heading:"Student Datail !"})
    
})


app.get("/topper",async(req,res)=>{
    const data = await studentModel.find({}).sort({gpa:1}).limit(1);
    res.render('student',{data:data,heading:"All Student Data !"})
    
})
app.listen(8080,()=>{
    console.log(`Serve Running Port 8080`);
})