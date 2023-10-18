
import mongoose from "mongoose"

const userSchema3 = new mongoose.Schema({
    name: String,
    email: String,
    password: String,

    wid: {
        type: String
    } , new_Date:String
})
const user4 = new mongoose.model("user4", userSchema3)


export default  user4;