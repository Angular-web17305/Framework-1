import Product from "../models/product";
import Category from "../models/category";

export const getAll = async (req, res) => {
    try {
        const product = await Product.find()
        return res.status(201).json(product)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        return res.status(201).json(product)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id })
        return res.status(201).json({
            message: "Xóa sản phẩm thành công",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        if (!product) {
            return res.status(400).json({
                message: "Không thể tạo sản phẩm",
            });
        }

        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id,
            },
        });

        return res.status(201).json({
            message: "Product created",
            data: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.status(200).json({
            message: "Sản phẩm đã được cập nhật thành công",
            data: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}