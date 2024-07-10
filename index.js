"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routers/routes"));
const expressServer_1 = __importDefault(require("./server/expressServer"));
const express_1 = __importDefault(require("express"));
const HOST = process.env.HOST || 'localhost';
const PORT = Number(process.env.PORT) || 3000;
const server = new expressServer_1.default(HOST, PORT);
//rutas
const app = server.getExpress();
// Servir archivos estáticos
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Usar las rutas definidas
app.use('/', routes_1.default);
try {
    server.listen();
}
catch (error) {
    console.log(error);
    process.exit(1);
}
