import {Request, Response} from "express";
import {inject, injectable} from "inversify";
import {LoggingService} from "../../common/LoggingService";
import {TYPES} from "../../config/types";
import {
  CustomerRepository,
} from "../../app/interfaces/persistence/CustomerRepository";

@injectable()
export class CustomerController {
  loggingService: LoggingService;
  customerRepository: CustomerRepository;


  constructor(@inject(TYPES.LoggingService) loggingService: LoggingService,
    @inject(TYPES.CustomerRepository) customerRepository: CustomerRepository) {
    this.loggingService = loggingService;
    this.customerRepository = customerRepository;
  }

  async index(req: Request, res: Response) {
    this.loggingService.info("Received a request");
    res.send(this.customerRepository.findAll());
  }
}
