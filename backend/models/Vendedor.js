import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const vendedorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    productos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Producto'
        }
    ],
    token: {
        type: String
    },
    confirmado: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

vendedorSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
})

vendedorSchema.methods.comprobarPassword = async function(passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password)
}

const Vendedor = mongoose.model('Vendedor', vendedorSchema)
export default Vendedor