import express from 'express'
import './backend_part/Connection/connection.js'
import { createRequire } from 'node:module';
import AuthRoutes from './backend_part/Routes/userRoute.js'
import VideoRoutes from './backend_part/Routes/videoRoute.js' 
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
app.use('/video',VideoRoutes)
app.listen(port,()=>{
  console.log("backend start learning")
})
