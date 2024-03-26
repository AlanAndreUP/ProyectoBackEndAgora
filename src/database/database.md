**database.js**

*   **Propósito:** Exponer funciones de alto nivel para facilitar la conexión y desconexión de la base de datos a lo largo de la aplicación.
    
*   **Funciones:**
    
    *   **connect:** Se encarga de establecer la conexión inicial a MongoDB. Intenta conectarse utilizando mongodbConnect y lanza un error si falla.
        
    *   **disconnect:** Cierra la conexión actual con la base de datos MongoDB. Intenta ejecutar mongodbDisconnect y lanza un error en caso de problemas.
        

**mongodb.database.js**

*   **Propósito:** Contener la implementación concreta de la conexión con MongoDB utilizando Mongoose.
    
*   **mongodbConnect**
    
    1.  **Lectura de variables de entorno:** Obtén la variable MONGODB\_URI, esencial para conectarse a la base de datos.
        
    2.  **Establecimiento de conexión:** Usa mongoose.connect para iniciar la conexión a la base de datos MongoDB de acuerdo con la MONGODB\_URI.
        
    3.  **Manejadores de eventos (db.on(...)):**
        
        *   **"error":** Registra un mensaje de error mediante signale si ocurre algún problema de conexión.
            
        *   **"open":** Notifica, usando signale, que la conexión ha sido exitosa.
            
        *   **"close":** Indica cuándo se ha cerrado la conexión.
            
*   **mongodbDisconnect:** Realiza la desconexión de la base de datos usando mongoose.disconnect.