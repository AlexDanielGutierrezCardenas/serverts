import path from "path";
import router from "./routers/routes";
import ExpressServer from "./server/expressServer";
import express from "express";

const HOST: string = process.env.HOST || 'localhost';
const PORT: number = Number(process.env.PORT) || 3000;

const server = new ExpressServer(HOST, PORT);

//rutas
const app = server.getExpress();
// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Usar las rutas definidas
app.use('/', router);

try {
    server.listen();
} catch (error) {
    console.log(error)
    process.exit(1)
}