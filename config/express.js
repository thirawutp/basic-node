import express from 'express'
import morgan from 'morgan'
import compression from 'compression'
import sassMiddleware from 'node-sass-middleware'
import bodyParser from 'body-parser'
import validator from 'express-validator'
import path from 'path'

import indexRoutes from '../app/routes/index.routes'
import userRoutes from '../app/routes/user.routes'

export default () => {

  const app = express()
  const env = process.env.NODE_ENV || 'dev'

  if(env === 'dev'){
    app.use(morgan('dev'))
  }else{
    app.use(compression())
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  app.use(validator())

  app.set('views',path.join(__dirname,'../app/views/'))
  app.set('view engine','jade')

  indexRoutes(app)
  userRoutes(app)

  app.use(sassMiddleware({
    src: path.join(__dirname,'../sass/'),
    dest: path.join(__dirname,'../public/css/'),
    outputStyle: 'compressed',
    prefix: '/css'
  }))

  app.use(express.static(path.join(__dirname,'../public/')))

  return app

}
