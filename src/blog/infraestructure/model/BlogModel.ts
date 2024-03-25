import { model } from "mongoose";
import blogSchema from "../schema/blogSchema";
import { Blog } from "../../domain/blog";

export const Blogs = model<Blog>('Blog', blogSchema)
