import {Request, Response} from "express";
import {inject, injectable} from "inversify";
import {LoggingService} from "../../common/LoggingService";
import {TYPES} from "../../config/types";

@injectable()
export class CustomerController {
  loggingService: LoggingService;


  constructor(@inject(TYPES.LoggingService) loggingService: LoggingService) {
    this.loggingService = loggingService;
  }

  async index(req: Request, res: Response) {
    this.loggingService.info("Received a request");
    res.send("OK");
  }
}
