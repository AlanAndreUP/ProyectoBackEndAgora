import { Blog } from "../domain/blog";
import UserRepository  from "../domain/blogRepository";
import { Blogs } from "./model/BlogModel";

export default class MongooseRepository implements UserRepository {
    async createUser(blog: Blog): Promise<Blog> {
        const check = await Blogs.findOne({title: blog.title});
        if(check) { throw new Error("El blog ya existe") }
        const result = await Blogs.create(blog);
        return result;
    }
    
}
