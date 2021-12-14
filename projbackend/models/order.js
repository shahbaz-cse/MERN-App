const mongoose = require("mongoose")

// ObjectId is a special type used for unique identifiers to link other documents/schemas with current documents/schemas
const {ObjectId} = mongoose.Schema;0

// Creating ProductCartSchema for including separate schema for multiple products in the cart
const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
});

const OrderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {type: Number},
    address: String,
    status: {
        type: String,
        default: "Received",
        enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Received"]
    },
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
}, {timestamps: true}
);

// Containing the designed 'ProductCartSchema' in 'ProductCart'
const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

// Containing the designed 'OrderSchema' in 'Order'
const Order = mongoose.model("Order", OrderSchema);

// Exports the created modules 'Order' and 'ProductCart'
module.exports = {Order, ProductCart};