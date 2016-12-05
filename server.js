import express from './config/express'
import mongoose from './config/mongoose'

const db = mongoose()
const app = express()

app.listen(3000,()=>{
  console.log('app running on http://localhost:3000')
})
