import UserRepository from "../domain/blogRepository";

import { Blog, BlogType } from "../domain/blog"

export class CreateBlogUseCase {
   constructor(
      readonly userRepository: UserRepository,

   ){}

   async run(
    title: string,
    previewContent: string,
    Content: string,
    image: string,
    author: string,
    date: Date,
    type: BlogType
    
   ): Promise<Blog | null> {
      try{
         const user = new Blog(
            title,
            previewContent,
            Content,
            image,
            author,
            date,
            type,
            
         );
        
         return user
      } catch (error){
         return null
      }
   }
}