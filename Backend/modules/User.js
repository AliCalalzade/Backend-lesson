const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: {
        type: String,
        require: true,
        unique: true
    },
    Password: {
        type: String,
        require: true,
    }
})

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.Password = await bcrypt.hash(this.Password, salt)
    next()
})


const User = mongoose.model('User', UserSchema)
module.exports = User
