import mongoose from "mongoose"

const nonvegFoodPost = new mongoose.Schema({
    itemName:String,  itemPrice:String ,nonvegupload: String, new_Date:String
})
const ItempostNonVeg = new mongoose.model("FoodNonveg", nonvegFoodPost)


export default  ItempostNonVeg;

