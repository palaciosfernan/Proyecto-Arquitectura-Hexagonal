import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import userRoter from "../src/Users/infrastructure/UserRouter";

dotenv.config();

const APP_PORT = process.env["APP_PORT"] ?? 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoter);

app.listen(APP_PORT, () => {
    console.clear();
    console.log(`Server on http://localhost:${APP_PORT}`);
    
    
})
