import Cart from "../Models/cart"




export const addItemToCart = async (req, res) => {
    try {
        const productId = req.body.productId;
        if (!productId)
            return res.status(400).send({ status: false, message: "Sản phẩm không hợp lệ !" });


        const existingCart = await Cart.findOne();


        if (existingCart) {
            const itemIndex = existingCart.products.findIndex((p) => p.productId == productId);


            if (itemIndex > -1) {
                const productItem = existingCart.products[itemIndex];
                productItem.quantity += req.body.quantity;
            } else {
                existingCart.products.push({ productId: productId, quantity: 1 });
            }
            const updatedCart = await existingCart.save();


            return res.status(200).send({ status: true, updatedCart: updatedCart });
        } else {
            const newCart = await Cart.create({
                products: [{ productId: productId, quantity: req.body.quantity }],
                total: 1,
            });


            return res.status(201).send({ status: true, newCart: newCart });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Server error" });
    }
};






export const decreaseQuantity = async (req, res) => {
    try {
        const productId = req.body.productId;
        if (!productId)
            return res.status(400).send({ status: false, message: "Sản phẩm không hợp lệ !" });


        const existingCart = await Cart.findOne();
        if (!existingCart)
            return res.status(404).send({ status: false, message: "Giỏ hàng không tồn tại" });


        const itemIndex = existingCart.products.findIndex((p) => p.productId.toString() === productId);
        if (itemIndex === -1)
            return res.status(400).send({ status: false, message: "Sản phẩm không tồn tại trong giỏ hàng" });


        const productItem = existingCart.products[itemIndex];
        productItem.quantity -= 1;


        if (productItem.quantity === 0) {
            existingCart.products.splice(itemIndex, 1);
        }


        const updatedCart = await existingCart.save();


        return res.status(200).json({
            message: "Update thành công",
            updatedCart: updatedCart
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Lỗi máy chủ" });
    }
};




export const getCart = async (req, res) => {
    try {
        const existingCart = await Cart.find().populate('products.productId');;


        if (!existingCart) {
            return res.status(404).json({
                message: "Không tìm thấy giỏ hàng"
            });
        }


        return res.status(200).json(existingCart);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};




export const removeItem = async (req, res) => {
    try {
        const productId = req.body.productId;


        const existingCart = await Cart.findOne();
        if (!existingCart)
            return res
                .status(404)
                .send({ status: false, message: "Cart not found" });


        const itemIndex = existingCart.products.findIndex(
            (p) => p.productId == productId
        );
        if (itemIndex > -1) {
            existingCart.products.splice(itemIndex, 1);
            const updatedCart = await existingCart.save();
            return res.status(200).send({ status: true, updatedCart: updatedCart });
        }


        res
            .status(400)
            .send({ status: false, message: "Sản phẩm không có trong giỏ hàng !" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Server error" });
    }
};
