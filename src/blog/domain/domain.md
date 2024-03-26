2.  **Clase:** Representa la entidad principal "Blog".
    
3.  **Propiedades:**
    
    *   title: Título del blog.
        
    *   previewContent: Contenido de vista previa.
        
    *   content: Contenido completo del blog.
        
    *   image: Imagen asociada.
        
    *   author: Autor del blog.
        
    *   date: Fecha de publicación.
        
    *   lenguaje: Idioma en el que está escrito el blog.
        
    *   type: Tipo del blog (determinado por la enumeración BlogType).
        
4.  **BlogRepository**
    
    *   **Interfaz:** Define un contrato para los métodos que deberá implementar cualquier repositorio concreto de blogs.
        
    *   **Métodos**
        
        *   createUser(blog: Blog): Crea un nuevo blog en la fuente de datos.
            
        *   GetListOfBlogByLanguageUseCase(language: string): Recupera la lista de blogs según el idioma indicado.
            
        *   getBlogByTitle(title: string): Obtiene un blog individual a partir de su título.