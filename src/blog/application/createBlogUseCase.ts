import  BlogRepository from "../domain/blogRepository";
import { Blog, BlogType } from "../domain/blog";

export class CreateBlogUseCase {
   constructor(
      readonly blogRepository: BlogRepository
   ){}

   async run(
      title: string,
      previewContent: string,
      Content: string,
      image: string,
      author: string,
      date: Date,
      lenguaje:string,
      type: BlogType
   ): Promise<Blog | null> {
      try {
         const blog = new Blog(
            title,
            previewContent,
            Content,
            image,
            author,
            date,
            lenguaje,
            type
         );

    
         const savedBlog = await this.blogRepository.createUser(blog);
         
         return savedBlog;
      } catch (error) {
         console.error("Error al guardar el blog:", error);
         return null;
      }
   }
}
