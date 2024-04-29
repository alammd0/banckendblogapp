const Comment = require("../model/commentModel"); // Import the Comment model
const Post = require("../model/postModel")

exports.createComment = async (req, res) => {
	try {
		const { post, user, body} = req.body;

		const comment = new Comment({
			post, user, body
		});

		const saveComment = await comment.save();

		// find the post by id , and update the new comment in array
		const updatedPost = await Post.findByIdAndUpdate(
			post,
			{ $push: { comments: saveComment._id } },
			{ new: true }
		);
			// .populate("comments")
			// .exec();

		res.json({
			post: updatedPost,
		});
	} catch (err) {
		console.error(err); // Log the actual error for debugging
		return res.status(500).json({
			error: "An internal server error occurred",
		});
	}
};
