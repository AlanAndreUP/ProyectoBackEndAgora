import BlogRepository from "../domain/blogRepository";

export class GetListOfBlogByLanguageUseCase {
    constructor(readonly userRepository: BlogRepository) {}

    async run(language: string) {
        return await this.userRepository.GetListOfBlogByLanguageUseCase(language);
    }
}