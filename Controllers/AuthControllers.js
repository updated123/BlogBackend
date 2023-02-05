import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";



export const registerUser= async(req,res)=>{
    const{ name,password,id,eamil,toaken}=req.body;

    const salt=await bcrypt.genSalt(10)
    const hashpass=await bcrypt.hash(password,salt)

    const newUser=new UserModel({name,id,eamil,toaken,password:hashpass})

    try {
        await newUser.save();
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export const loginUser=async(req,res)=>{
    const{username,password}=req.body

    try {
        const user=await UserModel.findOne({username:username})

        if(user)
        {
            const validity=await bcrypt.compare(password,user.password)

            validity? res.status(200).json(user):res.status(400).json("wrong password")
        }
        else{
            res.status(404).jon("user does not exists")
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

