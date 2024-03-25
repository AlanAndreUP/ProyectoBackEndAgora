import { Blog } from "./blog";

export default interface BlogRepository {
    createUser(blog: Blog): Promise<Blog>
    GetListOfBlogByLanguageUseCase(language: string): Promise<Blog[]>
    getBlogByTitle(title: string): Promise<Blog>
}