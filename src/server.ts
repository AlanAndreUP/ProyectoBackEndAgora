import database from "./database/database";
import { createServer } from "./app";
const PORT = process.env.PORT || 3000;
export const startApp = () => {
    const port = Number(PORT);

    database().connect();
    createServer(port).run();
};
startApp();
