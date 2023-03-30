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

clientsSchema.pre('save', async function(next) {
    try {
        if(!this.isModified('password')) {
            return next();
        }
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
    }
});

clientsSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        return false;
    }
}

const Clients = mongoose.model('Clients', clientsSchema);

export default Clients; 