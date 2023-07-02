const ProductModel = require("../models/dummyManagementModel")

const productData = async (req, res) => {
    // try {
    //     console.log(req.body);
    //     res.json({
    //         Message:`reached end point of api`,
    //         result:req.body
    //     })
    // } catch (error) {
    //     res.json({
    //         Message:error.message,
    //         result:nll
    //     })
    // }

    try {
        const {productName,productPrice}=req.body;
        const docToCreate = await ProductModel({
            productName,
            productPrice,
            imageDetails: {
                imageName: req.file.originalname,
                imageUrl: req.file.filename,
                imageMimeType: req.file.mimetype,
            }
        })
        const docToSave = await docToCreate.save()
        res.json({
            Message: `Data save successfuly`,
            Result: docToSave
        })
    } catch (error) {
        res.json({
            Message: error,
            Result: null
        })
    }
}
module.exports = {
    productData
}