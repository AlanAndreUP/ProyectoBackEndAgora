import { Blog } from "../domain/blog";
import BlogRepository from "../domain/blogRepository";
import { Blogs } from "./model/BlogModel";

export default class MongooseRepository implements BlogRepository {
    async createUser(blog: Blog): Promise<Blog> {
        try {
            const check = await Blogs.findOne({ title: blog.title });
         
            if (check) {
                throw new Error("El blog ya existe");
            }
            const result = await Blogs.create(blog);
        
            return result;
        } catch (error:any) {
           
            throw new Error("Error al crear el blog: " + error.message);
            
        }
    }

    async GetListOfBlogByLanguageUseCase(language: string): Promise<Blog[]> {
        try {
            
            const result = await Blogs.find({ lenguaje:language });
            return result;
        } catch (error:any) {
            throw new Error("Error al obtener la lista de blogs por idioma: " + error.message);
        }
    }
    async getBlogByTitle(title: string): Promise<Blog> {
        try {
            console.log('Buscando blog con título:', title);
            const result = await Blogs.findOne({ title: title });
            if (!result) {
                throw new Error('No se encontró ningún blog con el título proporcionado');
            }
            console.log('Resultado de la búsqueda:', result);
            return result.toObject() as Blog;
        } catch (error:any) {
            console.error('Error al buscar el blog por título:', error.message);
            throw new Error("Error al buscar el blog por título: " + error.message);
        }
    }
    
}
