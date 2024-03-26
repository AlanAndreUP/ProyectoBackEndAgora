1.  **CreateBlogUseCase**
    
    *   **Responsabilidad:** Crear un nuevo blog.
        
    *   **Dependencias:**
        
        *   blogRepository: Una instancia de un repositorio de blogs (interfaz definida en la capa de dominio).
            
    *   **Lógica:**
        
        1.  Crea un objeto Blog con los datos proporcionados.
            
        2.  Delega al blogRepository la persistencia del blog (this.blogRepository.createUser(blog))
            
        3.  Maneja posibles errores durante el guardado del blog.
            
        4.  Retorna el objeto Blog guardado (o null en caso de error).
            
2.  **GetBlogByTitleUseCase**
    
    *   **Responsabilidad:** Obtener un blog específico según su título.
        
    *   **Dependencias:**
        
        *   blogRepository: Una instancia de un repositorio de blogs.
            
    *   **Lógica:**
        
        1.  Delega a blogRepository la acción de recuperar el blog por título (this.blogRepository.getBlogByTitle(title)).
            
3.  **GetListOfBlogByLanguageUseCase**
    
    *   **Responsabilidad:** Obtener una lista de blogs según el lenguaje.
        
    *   **Dependencias:**
        
        *   blogRepository: Una instancia de un repositorio de blogs.
            
    *   **Lógica**
        
        1.  Delega a blogRepository la obtención de los blogs (this.blogRepository.GetListOfBlogByLanguageUseCase(language)).