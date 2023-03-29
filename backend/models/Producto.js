import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    availables: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        default: false
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)
export default Product