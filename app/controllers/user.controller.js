import mongoose from 'mongoose'

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
  user.save((err)=>{
    if(err){
      return next(err)
    }
    return res.json(user)
  })
}

export default {
  login,
  logout,
  create
}
