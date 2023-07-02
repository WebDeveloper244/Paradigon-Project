const mongoose = require("mongoose")

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();


const dummySchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    imageDetails: {
        imageName:{type:String},
        imageUrl:{type:String},
        imageMimeType:{type:String}
    },
    CreateDate: {
        type: String,
        default: `${day}-${month}-${year}-${time}`
    }
}, { timestamps: true })

module.exports = mongoose.model("DummyCollection", dummySchema)