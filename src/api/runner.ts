import start from "./server";
import {ServiceConfig} from "../config/ServiceConfig";

const config: ServiceConfig = {
  port: (process.env.PORT && parseInt(process.env.PORT)) || 3000,
  basePath: "/api",
  apiVersion: "v0.1",
};

// Stars the server
start(config);
