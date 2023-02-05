import PostModel from "../models/blogdata.js";
import mongoose from "mongoose";


export const createPost=async(req,res)=>{
    const newPost=new PostModel(req.body) 

    try {
        await newPost.save()
        res.status(200).json("Post created!")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getPost=async(req,res)=>{
    const id=req.param.id

    try {
        const post=await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updatePost=async(req,res)=>{
    const postId=res.param.id
    const {userId}=req.body

    try {
        const post=await PostModel.findById(postId)
        if(post.userId==userId)
        {
            await post.updatePost( { $set:req.body})
            res.status(200).json("post updated")
        }
        else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const deletePost=async(req,res)=>{
    const id=req.param.id;
    const{userId}=req.body

    try {
        const post=await PostModel.findById(id)
        if(post.userId==userId)
        {
           await post.deletePost();
           res.status(200).json("post deleated sucessfully")

        }
        else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}