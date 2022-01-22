import { createConnection } from "typeorm";

createConnection().then(async connection => {
  console.log("Database connection established");}
);