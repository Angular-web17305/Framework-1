import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
    productId: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }],
    quantity: {
        type: Number,
        default: 0,
    },
});


const cartSchema = mongoose.Schema({
    products: [itemSchema],
    total: {
        type: Number,
        default: 0,
    }
})


export default mongoose.model("Cart", cartSchema)
