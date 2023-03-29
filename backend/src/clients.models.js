import mongoose from "mongoose";

const clientsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
        required: true
    },
    //orderId? porque guarda elemento no varios
    orders: [
        {
            type: mongoose.Schema.Types.OjectId,
            ref:'Orders'
        }
    ]
}, {
    timestamps: true
});

const Clients = mongoose.model('Clients', clientsSchema);

export default Clients; 