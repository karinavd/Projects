import express from 'express'
import './Connection/connection.js'
import { createRequire } from 'node:module';
import AuthRoutes from './Routes/userRoute.js'
const require = createRequire(import.meta.url);
var app =express();
var port =4000
app.use(express.json()) 

// app.get('/',(req,res)=>{
//   res.send({
//     message:"Hi we've started our backend project"
//   })
// })

// const AuthRoutes=require('./Routes/userRoute.js')
app.use('/auth',AuthRoutes)
app.listen(port,()=>{
  console.log("backend start learning")
})
