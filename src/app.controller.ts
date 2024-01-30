import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello, World! 🎄';
  }

  @Get('new-endpoint')
  newEndpoint(): string {
    return 'New endpoint';
  }

  @Get('/path/')
  new(): string {
    return 'with /sas/';
  }
}
