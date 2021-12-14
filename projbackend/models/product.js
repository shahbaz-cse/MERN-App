const mongoose = require ("mongoose");

// // ObjectId is a special type used for unique identifiers to link other documents/schemas with current documents/schemas
const {ObjectId} = mongoose.Schema;

// 'productSchema' is designed for including the details of a product
const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId, // category detail of the product will be referenced to the 'Category' schema using ObjectId
        ref: "Category",
        required: true
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    }
}, {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);