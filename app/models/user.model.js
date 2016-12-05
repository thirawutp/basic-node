import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  fname: {type:String,required: true},
  username: String
})

export default mongoose.model('User', UserSchema)
