import routes from "./routers/routes";
import ExpressServer from "./server/expressServer";

const HOST: string = process.env.HOST || 'localhost';
const PORT: number = Number(process.env.PORT) || 3000;

const server = new ExpressServer(HOST, PORT);

server.use(express.json());
server.use(routes);
try {
    server.listen();
} catch (error) {
    console.log(error)
    process.exit(1)
}