const express = require("express");
const Router = express.Router();

const { productData} = require("../controllers/dummyManagementController")
// const {middleware} = require("../middleware/m-first-middleware")
const {UploadProductImage} = require("../middleware/dummyManagementMiddleWare")

Router.post("/productData",UploadProductImage.single("Image"),productData)

module.exports=Router