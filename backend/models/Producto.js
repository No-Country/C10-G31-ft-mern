import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    disponibles: {
        type: String,
        trim: true,
        required: true
    },
    categoría: {
        type: Boolean,
        default: false
    },
    precio: {
        type: Number,
        default: false
    },
    vendedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendedor'
    }
}, {
    timestamps: true
})

const Producto = mongoose.model('Producto', productoSchema)
export default Producto