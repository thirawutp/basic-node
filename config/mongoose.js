import mongoose from 'mongoose'
import UserModel from '../app/models/user.model'

export default () => {

  const uri = 'mongodb://localhost/nodebasic'
  const db = mongoose.connect(uri)
  UserModel()

  return db

}
