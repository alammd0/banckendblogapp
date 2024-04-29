/** @format */

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Corrected from 'require' to 'required'
    },
    body: {
        type: String,
        required: true,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like",
        },
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
});

module.exports = mongoose.model("Post", postSchema); // Changed from mongoose.Schema() to mongoose.model()
