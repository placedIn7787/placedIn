const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userProfile = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    codeforcesProfile:{
        cfUserName: String,
        cfRating: Number,
        cfMaxRating: Number,
        cfRank: String,
    },
    codechefProfile:{
        ccUserName: String,
        ccRating: Number,
        ccMaxRating: Number,
        ccRank: String,
    },
    github:{
        githubUserName: String,
        githubRepo: [],
    },
    linkedIn: String,
},{
    timestamps:true
});

module.exports = Profile = mongoose.model('Profile',userProfile);