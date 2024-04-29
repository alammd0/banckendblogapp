/** @format */

const Post = require("../model/postModel");

exports.createPost = async (req, res) => {
	try {
		const { title, body } = req.body;

		const post = new Post({
			title,
			body,
		});

		const savePost = await post.save();

		res.json({
			post: savePost,
		});
	} catch (error) {
		return res.status(404).json({
			err: "kuch hogya malala check",
		});
	}
};

exports.getallPost = async (req, res) => {
	try {
		const post = await Post.find({}).populate("comments").exec();

		res.json({
			post
		});

	} catch (error) {
		return res.status(404).json({
			error: "kuch hogya malala check",
		});
	}

}