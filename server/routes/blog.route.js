import express from 'express'
import {addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComment, togglePublish} from "../controllers/blog.controller.js"
import upload from '../middleware/multer.middleware.js'
import auth from '../middleware/auth.middleware.js'

const blogRouter = express.Router()

blogRouter.post('/add',upload.single('image'),auth,addBlog)
blogRouter.get('/all',getAllBlogs)
blogRouter.get('/:blogId',getBlogById)
blogRouter.post('/delete',auth,deleteBlogById)
blogRouter.post('/toggle-publish',auth,togglePublish)
blogRouter.post('/add-comment',addComment)
blogRouter.post('/comments',getBlogComment)
blogRouter.post('/generate',generateContent)



export default blogRouter