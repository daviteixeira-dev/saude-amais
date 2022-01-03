import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "../routes";

const app = express();

var cors = require('cors');
app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3003, () => console.log("🚀 Server is running"));
