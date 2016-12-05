import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const login = (req,res,next) => {
  return res.render('index',{
    title: `login as ${req.body.email}`,
    isLogin: true
  })
}

const logout = (req,res,next) => {
  return res.render('index',{
    title: `hello world`,
    isLogin: false
  })
}

const create = (req,res,next) => {
  const UserModel = mongoose.model('User')
  const user = new UserModel(req.body)
  user.save().then(user=>{
    res.status(200).json({user:user})
  }).catch(err=>{
    console.log(err)
    res.status(400).json({error: 'validation fail'})
  })
  res.status(200)
}

const list = (req,res,next) => {
  const UserModel = mongoose.model('User')
  UserModel.findOne().then(users=>{
    return res.json(users)
  }).catch(err=>{
    return res.json(err)
  })
}

export default {
  login,
  logout,
  create,
  list
}
