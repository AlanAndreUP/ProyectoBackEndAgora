import { Blog } from "./blog";

export default interface BlogRepository {
    createUser(blog: Blog): Promise<Blog>
   
}