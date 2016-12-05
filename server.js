import express from 'express'

const app = express()

app.get('/',(req,res)=>res.send('hello nodejs'))

app.listen(3000,()=>console.log('app running on http://localhost:3000'))
