import { Schema } from "mongoose"
import { Blog,BlogType } from "../../domain/blog";

const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    previewContent: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, required: true },
    type: { type: String, required: true, enum: BlogType },
})

export default blogSchema
