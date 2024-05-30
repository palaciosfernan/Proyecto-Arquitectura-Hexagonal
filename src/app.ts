import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";
import { WebSocketServer } from "ws";
import PubliRouter from "./Publication/infrastructure/PubliRouter";
import { getAllPubliCase, createPubliCase } from "./Publication/infrastructure/dependencies";

dotenv.config();

const APP_PORT = process.env.APP_PORT ?? 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/publi', PubliRouter);

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const sendMessageToAllClients = async () => {
    const results = await getAllPubliCase.run();
    const data = JSON.stringify(results);
    wss.clients.forEach(client => {
        if (client.readyState === client.OPEN) {
            client.send(data);
        }
    });
};

wss.on("connection", (ws) => {
    console.log("New client connected");

    ws.on("message", async (message) => {
        console.log(`Received message => ${message}`);
        if (message.toString() === 'getAll') {
            const results = await getAllPubliCase.run();
            ws.send(JSON.stringify(results));
        }
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

app.post('/publi', async (req, res) => {
    const publication = req.body;
    const result = await createPubliCase.run(publication);
    if (result) {
        await sendMessageToAllClients(); // Notify all WebSocket clients
        return res.status(201).json(result);
    } else {
        return res.status(500).json({ error: 'Failed to create publication' });
    }
});

server.listen(APP_PORT, () => {
    console.clear();
    console.log(`Server on http://localhost:${APP_PORT}`);
});
