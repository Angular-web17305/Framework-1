import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: String,
        products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", categorySchema);

/**
 * Category
 *      _id: "cateIdA"
 *      name: "Cate A"
 *      products: [
 *          { id: "productIdA"}
 *      ]
 *
 * Product
 *      _id: "productIdA"
 *      name: "Product A"
 *      categoryId: "cateIdA"
 *
 */
