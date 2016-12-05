import userController from '../controllers/user.controller'

export default (app) => {
  app.post('/login',userController.login)
  app.post('/logout',userController.logout)
  app.route('/user')
    .post(userController.create)
    .get(userController.list)
}
