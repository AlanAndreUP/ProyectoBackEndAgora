1.  Representa el caso de uso para crear un usuario y mandar un correo al mismo.
    
2.  **Dependencias:**
    
    *   UserRepository: Interfaz que define la persistencia de usuarios.
        
    *   IEncrypterService: Interfaz para cifrar información sensible (como la profesión).
        
    *   NotificacionNewUserUseCase: Un caso de uso a cargo de enviar notificaciones de usuarios nuevos.
        
3.  **Lógica:**
    
    1.  Intenta crear una instancia de la clase User.
        
    2.  Cifra la profesión del usuario utilizando encrypterService.
        
    3.  Guarda el usuario en el repositorio (userRepository.createUser).
        
    4.  Envía una notificación de nuevo usuario (notificationNewUser.run).
        
    5.  Retorna el objeto User creado o null en caso de error.
        

**2\. IEncrypterService**

**Interfaz:** Define un contrato para las operaciones de cifrado.

hashProfession: Se encarga de cifrar la profesión.

authProfession: Verifica o autentica una profesión .

**3\. ITokenService**

1.  **Interfaz:** Define métodos para trabajar con tokens.
    

generateToken: Crea un token a partir de una carga útil de datos.

verifyToken: Verifica la validez de un token.

Esto se hizo para demostrar que se sabe usar JWT, pero no encontre un caso de uso valido para implementarlo,.

**4\. NotificacionNewUserUseCase**

1.  **Responsabilidad:**
    

1.  Encapsula la lógica de enviar una notificación a un usuario nuevo.
    
2.  **Dependencia**
    
    *   NotificationNewUser: Un servicio, probablemente ubicado en la capa de infraestructura, que se encarga de enviar notificaciones vía email.