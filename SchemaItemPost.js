import mongoose from "mongoose"

const foodPost = new mongoose.Schema({
    itemName:String , new_Date:String,bupload: String,
})
const Itempost = new mongoose.model("Food", foodPost)


export default  Itempost;

