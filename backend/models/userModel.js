const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },

    academicQualification: {
        type: String,
        required: true
    },

    courseSelected: {
        type: String,
        required: true
    },

    classType: {
        type: String,
        required: true
    },  

    stateOfOrigin:{
        type: String,
        required: true
    },

    gender:{
        type: String,
        required: true
    },

    phoneNo: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },

    codeExperince: {
        type: String,
        required: true
    },


    stateOfResidence: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema )
module.exports = User