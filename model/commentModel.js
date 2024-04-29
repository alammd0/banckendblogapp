const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to the post model; corrected from 'post' to 'Post'
    },
    user: {
        type: String,
        required: true, // corrected from 'req' to 'required'
    },
    body: {
        type: String,
        required: true, // corrected from 'require' to 'required'
    },
});	

module.exports = mongoose.model("Comment", commentSchema); // Changed from mongoose.Schema() to mongoose.model()

