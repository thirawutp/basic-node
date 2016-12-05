import express from './config/express'

const app = express()

app.listen(3000,()=>{
  console.log('app running on http://localhost:3000')
})
