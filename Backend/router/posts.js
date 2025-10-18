import express from 'express';

import { Post } from '../models/Post.js';

const router = express.Router();

// get all posts    
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();   // it will return all posts
        res.json(posts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// get single post by id 
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);   // it will return post by id
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// create a post    
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author,
        image: req.body.image
    });

    try {
        const newPost = await post.save();   // it will save post to db
        res.status(201).json(newPost);       // it will return new post
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// update a post by id
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);   // it will return post by id
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        post.title = req.body.title || post.title;  
        post.content = req.body.content || post.content;
        post.category = req.body.category || post.category;
        post.author = req.body.author || post.author;
        post.image = req.body.image || post.image;
        post.updatedAt = Date.now();   // it will update updatedAt field to current date  

        const updatedpost = await post.save();  
        res.json(updatedpost);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// delete a post by id
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);   // it will return post by id
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        await Post.findByIdAndDelete(post._id); 
        res.json({ message: "Post deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;   // it will export router
