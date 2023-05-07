// one route for each crud 
const express = require('express');
const User = require('../models/user');
const router = express.Router(); 

router.get('/', async (req, res) => {
    try {
        const post = await Post.getAllPosts();
        console.log(post); 
        res.send(post);
    } catch(err){
        res.status(401).send({message: error.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const post = await Post.postExists();
        console.log(post); 
        res.send(post);
    } catch(err){
        res.status(401).send({message: error.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const post = await Post.getPost();
        console.log(post); 
        res.send(post);
    } catch(err){
        res.status(401).send({message: error.message});
    }
});

router.put('/edit', async (req, res) => {
    try {
        const user = await Post.editPost(req.body); 
        res.send({...post, password: undefined}); 
    } catch(error){
        res.status(401).send({message: error.message}); 
    }
})

router.delete('/delete', async (req, res) => {
    try {
        await Post.deletePost(req.body.postId); 
        res.send({success: "We'll miss you... :("}); 
    } catch(error) {
        res.status(401).send({message: error.message});
    }
})

module.exports = router; 