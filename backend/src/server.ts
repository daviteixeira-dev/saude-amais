import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "../routes";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(routes);

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.listen(3003, () => console.log("🚀 Server is running"));