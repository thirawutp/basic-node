import indexController from '../controllers/index.controller'

export default (app) => {
  app.get('/',indexController.render)
}
