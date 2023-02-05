import mongoose from "mongoose";

const BlogSchema =mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        createdby:{
            type: String,
            required: true
        },
      
    },
    {
        timestamps: true
    }
)

const BlogModel=mongoose.model("Blog",BlogSchema);
export default BlogModel