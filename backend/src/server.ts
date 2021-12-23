import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "../routes";

const app = express();

var cors = require('cors');
app.use(cors());

app.use(express.json());

app.use(routes);



// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

app.listen(3003, () => console.log("🚀 Server is running"));