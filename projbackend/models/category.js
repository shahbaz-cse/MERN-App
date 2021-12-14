const mongoose = require("mongoose")

// Creating a categorySchema to that will sort products based on type
// {timestamps: true} will include date & time of product listed
const categorySchema =  new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    }
}, {timestamps: true}
);

// exports the categorySchema
module.exports = mongoose.model("Category", categorySchema);

