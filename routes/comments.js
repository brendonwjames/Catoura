const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const { login, logout, requireAuth } = require('../auth');
const db = require('../db/models');
const { User, Question, Answer_Upvote, Answer_Downvote, Answer, Comment, Topic } = db;
const { csrfProtection, userValidators, loginValidators, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');

// router.delete('/:id',asyncHandler(async(req,res)=>{
//     const post = await Post.findByPk(req.params.id)
//     await post.destroy()
//     res.json({message: "Success"})
// }))

router.delete('/:id(\\d+)/', csrfProtection, asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.params.id)
    await comment.destroy()
    res.json({ message: "Success" })
}))

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {

    const answerId = req.params.id;

    const comments = await Comment.findAll({ where: { answerId }, include: User });

    console.log("COMMENTS -------> ", comments)

    res.json({ comments, message: "Success" });

}));



module.exports = router;