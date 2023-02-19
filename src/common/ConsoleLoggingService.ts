import {LoggingService} from "./LoggingService";

export class ConsoleLoggingService implements LoggingService {
  debug(message: string): void {
    console.debug(message);
  }

  info(message: string): void {
    console.info(message);
  }

  warn(message: string): void {
    console.log(message);
  }

  error(message: string): void {
    console.error(message);
  }
}
