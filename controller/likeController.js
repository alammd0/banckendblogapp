const Post = require("../model/postModel");

const Like = require("../model/likeModel");


exports.likePost = async (req, res) => {
    try {

        const { post, user } = req.body;

        const like = new Like({
            post, user
        })

        const saveLike = await like.save();


        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: saveLike._id } }, { new: true });

        res.json({
            post: updatedPost
        })


    } catch (error) {
        return res.status(404).json({
            error: "kuch hogya malala check",
        });
    }
}