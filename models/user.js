const mongoose = require ('mongoose')
const {Schema} = mongoose

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    roles: [
        {
            ref: "Role",
            type: Schema.Types.ObjectId,
        },
    ],
});

module.exports = mongoose.model('User', userSchema);