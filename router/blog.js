/** @format */
const express = require("express");

const router = express.Router(); // Corrected by adding parentheses to call express.Router()

const { createComment } = require("../controller/commentController");
const { createPost, getallPost } = require("../controller/postController");
const {likePost} = require("../controller/likeController")

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getallPost);
router.post("/likes/like", likePost)

module.exports = router; // Don't forget to export the router
