import "reflect-metadata";
import {container} from "../config/inversify.config";
import express, {Express} from "express";
import {ServiceConfig} from "../config/ServiceConfig";
import {CustomerController} from "./controllers/CustomerController";


const app: Express = express();
app.use(express.json());

const getCustomerListController =
  container.resolve<CustomerController>(CustomerController);

export default function start(config: ServiceConfig) {
  app.get("/customers", (req, res) => getCustomerListController.index(req, res));

  app.listen(config.port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${config.port}`);
  });
}
