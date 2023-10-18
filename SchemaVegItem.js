import mongoose from "mongoose"

const vegFoodPost = new mongoose.Schema({
    itemName:String,  itemPrice:String ,vegupload: String, new_Date:String
})
const ItempostVeg = new mongoose.model("FoodVeg", vegFoodPost)


export default  ItempostVeg;

