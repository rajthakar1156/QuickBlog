import express from "express"
import 'dotenv/config'
import cors from 'cors'
import connectDB from "./config/db.js"
import adminRouter from "./routes/admin.route.js"
import blogRouter from "./routes/blog.route.js"

const app=express()

await connectDB()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
        res.send("Api is working!")
})

app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT}`)
})

export default app
