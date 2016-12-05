import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  fname: String,
  username: String
})

export default () => mongoose.model('User', UserSchema)
