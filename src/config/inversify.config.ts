import {Container} from "inversify";
import {TYPES} from "./types";
import {LoggingService} from "../common/LoggingService";
import {ConsoleLoggingService} from "../common/ConsoleLoggingService";
import {CustomerController} from "../api/controllers/CustomerController";

const container = new Container();
container.bind<LoggingService>(TYPES.LoggingService).to(ConsoleLoggingService);

container.bind<CustomerController>(CustomerController).toSelf().inSingletonScope();

export {container};
