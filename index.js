"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expressServer_1 = __importDefault(require("./server/expressServer"));
const HOST = process.env.HOST || 'localhost';
const PORT = Number(process.env.PORT) || 3000;
const server = new expressServer_1.default(HOST, PORT);
try {
    server.listen();
}
catch (error) {
    console.log(error);
    process.exit(1);
}
