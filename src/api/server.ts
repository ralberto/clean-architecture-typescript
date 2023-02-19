import express, {Express} from "express";
import {ServiceConfig} from "../config/ServiceConfig";

const app: Express = express();
app.use(express.json());

export default function start(config: ServiceConfig) {
  app.listen(config.port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${config.port}`);
  });
}
