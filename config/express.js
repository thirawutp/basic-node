import express from 'express'
import indexRoutes from '../app/routes/index.routes'

export default () => {

  const app = express()

  indexRoutes(app)

  return app

}
