import mongoose from "mongoose";

const UserSchema =mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        id:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    }
)

const UserModel=mongoose.model("Users",UserSchema);
export default UserModel