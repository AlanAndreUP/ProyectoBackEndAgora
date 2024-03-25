import BlogRepository from "../domain/blogRepository"; 

export class GetBlogByTitleUseCase {
    constructor(private readonly blogRepository: BlogRepository) {}

    async run(title: string) {
        return await this.blogRepository.getBlogByTitle(title);      
    }
}
