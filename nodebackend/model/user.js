const mongoose = require('mongoose');

const CollegeSchema = mongoose.Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    contactno: String,
    role: String,
    faculty: String,
    location: String,
});

const CollegeData = new mongoose.model("CollegeData", CollegeSchema);
module.exports = CollegeData;