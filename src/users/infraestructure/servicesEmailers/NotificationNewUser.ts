import nodemailer from "nodemailer";
import { INotificationNewUser } from "../../domain/services/INotificationNewUser";
import { User } from "../../domain/user";
import signale from "signale";

export class NotificacionNewUser implements INotificationNewUser {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASSWORD, 
      },
    });
  }
   
  async sendNotification(user: User): Promise<boolean> {
    try {
      const mailOptions = {
        from: process.env.GMAIL_USER, 
        to: user.email, 
        subject: 'Nuevo usuario registrado', 
        html: `
          <html>
            <head>
              <style>
                /* Aquí puedes agregar tu CSS para estilizar el correo */
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f2f2f2;
                  color: #333;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #fff;
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                  color: #007bff;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>Bienvenido ${user.name}!</h1>
                <p>Gracias por registrarte en nuestra plataforma.</p>
                <!-- Puedes agregar más contenido HTML aquí -->
              </div>
            </body>
          </html>
        `
      };
      
      await this.transporter.sendMail(mailOptions);
      
      signale.success("Correo electrónico enviado con éxito");
      return true;
    } catch (error:any) {
      signale.fatal(new Error("Error al enviar el correo electrónico: " + error.message));
      return false;
    }
  }
}
