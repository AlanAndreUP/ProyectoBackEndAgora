import mongoose from "mongoose";
import "dotenv/config";
import signale from "signale";

export const mongodbConnect = async () => {
    try {
        const uri = process.env.MONGODB_URI;

        if (!uri) {
            throw new Error("La variable de entorno MONGODB_URI no está definida");
        }

        await mongoose.connect(uri);

        const db = mongoose.connection;

        db.on("error", (error: Error) => { 
            signale.error("Error de conexión a la base de datos:", error);
        });

        db.once("open", () => {
            signale.success("Conexión exitosa a la base de datos MongoDB.");
        });

        db.on("close", () => {
            signale.info("Desconexión exitosa de la base de datos MongoDB.");
        });
    } catch (error:any) {
        signale.fatal(new Error("Error al conectar a la base de datos: " + error.message));
    }
}

export const mongodbDisconnect = async () => {
    try {
        await mongoose.disconnect();
    } catch (error) {
        signale.error("Error al desconectar de la base de datos:", error);
    }
}
